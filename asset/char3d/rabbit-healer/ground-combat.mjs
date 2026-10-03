import fs from 'node:fs';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
const path=new URL('./rabbit-healer-combat.glb',import.meta.url),buf=fs.readFileSync(path),len=buf.readUInt32LE(12),j=JSON.parse(buf.toString('utf8',20,20+len)),bin=28+len,g=structuredClone(j);
g.buffers[0].uri='data:application/octet-stream;base64,'+buf.subarray(bin).toString('base64');g.materials=g.materials.map(()=>({pbrMetallicRoughness:{baseColorFactor:[1,1,1,1]}}));delete g.images;delete g.textures;delete g.samplers;globalThis.ProgressEvent??=class ProgressEvent{};
const asset=await new GLTFLoader().parseAsync(JSON.stringify(g),'');let body;asset.scene.traverse(o=>{if(o.isSkinnedMesh)body=o;});asset.scene.updateMatrixWorld(true);body.computeBoundingBox();const floor=new THREE.Box3().setFromObject(body).min.y;
const root=asset.scene.getObjectByName('Root'),mixer=new THREE.AnimationMixer(asset.scene),report=[];
for(const name of ['hit','death']){
 const a=j.animations.find(a=>a.name===name),ch=a.channels.find(c=>c.target.path==='translation'&&j.nodes[c.target.node].name==='Root'),sampler=a.samplers[ch.sampler],ac=j.accessors[sampler.output],v=j.bufferViews[ac.bufferView],offset=bin+(v.byteOffset||0)+(ac.byteOffset||0),clip=asset.animations.find(c=>c.name===name),tr=clip.tracks.find(t=>t.name==='Root.position');
 mixer.stopAllAction();const action=mixer.clipAction(clip);action.setLoop(THREE.LoopOnce,1);action.clampWhenFinished=true;action.play();let maxCorrection=0;
 for(let i=0;i<tr.times.length;i++){
 mixer.setTime(Math.min(tr.times[i],clip.duration-1e-7));asset.scene.updateMatrixWorld(true);body.computeBoundingBox();const min=new THREE.Box3().setFromObject(body).min.y,dy=floor-min;
 const local=new THREE.Vector3(0,dy,0).applyQuaternion(root.parent.getWorldQuaternion(new THREE.Quaternion()).invert()).divide(root.parent.getWorldScale(new THREE.Vector3()));
 for(let k=0;k<3;k++)buf.writeFloatLE(tr.values[i*3+k]+local.getComponent(k),offset+(i*3+k)*4);maxCorrection=Math.max(maxCorrection,Math.abs(dy));
 }report.push({name,maxCorrection});
}
fs.writeFileSync(path,buf);console.log(JSON.stringify(report));