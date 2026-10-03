# Rabbit healer runtime delivery — 2026-09-28

Runtime: rabbit-healer-combat.glb. Original rabbit-healer-animated.glb retained unmodified.
Selection: raceId beast, sex f; cleric / bishop / paladin / inquisitor.
Body normalized to 1.131 high, lowest bind-pose point y=0; native +X rotated Y -90 degrees.
Hands: mixamorigRightHand / mixamorigLeftHand after GLTFLoader sanitization. No baked weapon.

Original idle / walk / cast animations and geometry/skin/texture bytes preserved. Cast is cloned as slash for the existing attack/skill contract. Hit and death are retargeted from the locally owned 기본형_동작53.glb clips 전투_피격(머리) / 전투_사망; no paid API calls. Runtime maps these actual clips to the matching Korean combat slots.

Rebuild: node asset/char3d/rabbit-healer/build-combat.mjs then node asset/char3d/rabbit-healer/ground-combat.mjs from prototype. Additional hit/death tracks use original anatomical world-space retargeting without idle-specific upright/arm corrections. Root translation follows source hips, scaled to target stature; grounding measures the deformed body at every keyframe.
Validation: node tools/test-rabbit-healer.mjs; loader syntax check. Verified source binary prefix/rig/three clips unchanged, clone isolation, hands/tail, all clips moving and finite, extra motions sampled ground error <0.01, final fallen body height <0.4. Integrated visual verification remains a separate deployment check.
Source provenance and original delivery details: SOURCE.md.