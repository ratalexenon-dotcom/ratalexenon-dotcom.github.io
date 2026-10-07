# MPH 스킬 질감 A 납품 · 2026-10-06

사용자 A안 ㄱㄱ 승인 후 제작. built-in imagegen 사용. 최종 원화 미술 검수는 pending, 게임 배선은 Claude 소관.

납품: prototype/asset/fx/vfx3/ (16 PNG, 총66프레임, 446659bytes). 프레임 가로1행, 좌→우. 모두 RGBA8 흰색RGB+투명알파. 원본16장·생성 프롬프트·기계적 규격화 도구는 _기획/생성아트/skill-vfx-20261006/에 보존.

| 파일 ID | 용도 | 프레임 크기 | 프레임 수 | 시트 크기 | 앵커 |
|---|---|---|---|---|---|
| flow-fire | 불꽃 흐름 | 256×64 | 1 | 256×64 | beam |
| flow-magic | 마력 흐름 | 256×64 | 1 | 256×64 | beam |
| breath-impact | 브레스 타격 | 128×128 | 8 | 1024×128 | target-center |
| lightning-branch | 번개 줄기 | 128×32 | 1 | 128×32 | lightning |
| lightning-spark | 번개 스파크 | 128×128 | 4 | 512×128 | target-center |
| orb-core | 마력 구체 핵 | 64×64 | 1 | 64×64 | orb |
| orb-trail | 구체 잔상 | 64×64 | 4 | 256×64 | orb-trail |
| smoke-puff | 연막 퍼프 | 128×128 | 8 | 1024×128 | caster-foot |
| landing-ring | 착지 충격파 | 128×128 | 6 | 768×128 | target-foot |
| landing-dust | 착지 흙먼지 | 128×128 | 4 | 512×128 | target-foot |
| whirl-slash | 회전 검기 | 256×256 | 6 | 1536×256 | caster-foot |
| fist-impact | 격투 충격 | 128×128 | 6 | 768×128 | target-center |
| ground-fire | 불 장판 | 128×128 | 4 | 512×128 | target-foot |
| ground-ice | 얼음 장판 | 128×128 | 4 | 512×128 | target-foot |
| ground-poison | 독 장판 | 128×128 | 4 | 512×128 | target-foot |
| ground-dark | 암흑 장판 | 128×128 | 4 | 512×128 | target-foot |

## 연결 규칙

- 파일마다 manifest.json의 file/frameWidth/frameHeight/frames/cols/rows를 사용. UV offset.x=frame/frames, repeat.x=1/frames, y는전체높이.
- flow-fire / flow-magic: vfx3.beam의 흐름 마스크. X Repeat / Y Clamp, time에따라 UV X만 이동. 좌우 알파 경계차0.
- breath-impact: 표적맞는점. lightning-branch: 코드가 정한 번개 가지 띠 겉면(이그림자체를 궤적으로 쓰지 않음). lightning-spark: 번개맞는점.
- orb-core / orb-trail: 기존구체·잔상. smoke-puff: blink 출발/도착 퍼프.
- landing-ring / landing-dust: 도약착지·보스포효. 평면은 top-down으로 찍었으므로 Three 평면을 바닥으로 돌려사용.
- whirl-slash: 무기 회전 궤적; 몸 자체를 회전시키는 지시가아님. clockwise 원화순서를 [0,5,4,3,2,1]로 재배열해서 이미구움.
- fist-impact: 격투가평타·주먹/발차기충격. fist-kind.json은 sidecar명세이며 기존단일atlas를 자동확장하는 코드패치가아님. 별도텍스처 지원또는 기존atlas 복제본에6칸추가 필요. 기존impact_b 원본은보존.
- ground-*4: 해당속성광역지속스킬. 4프레임끝→첫프레임 포함 crossfade 권장. 가로반복의 정확한 이음매검증과 달리 장판루프는픽셀완전일치가아닌 시각검수.
- 속성색: 불 #ff6a1a / 얼음 #7fd8ff / 번개 #a9d4ff / 독 #7dff6a / 암흑 #b37bff / 신성 #ffe08a. α가큰빛핵은흰색유지.
- LinearFilter / no mipmaps / frame내투명여백유지. 연막·흙먼지는 NormalAlpha(짙은회색틴트 가능). 빛도밝은바닥은 NormalAlpha부터검토; Additive만쓰면창백한번개·냉기가밝은바닥에서약해짐. 검수판은 normal-alpha로비교.

## 검증과 한계

verified-final.json: 최종저장PNG를독립적으로 inflate/unfilter. 16개 규격/해시/whiteRGB/알파/빈프레임없음/서로다른66프레임/투명여백/광선좌우경계차0 통과. 한장최대63235bytes, 총8MB제한통과.

review.html: 인터넷없이재생/흰원본·틴트/밝은바닥변경가능. contact.png + 16초720×1280 H.264영상(vfx-a-review.mp4), 밝고어두운바닥2쪽씩. 검수재생속도는원화프레임확인용으로느리게설정. 실제전장/블룸/입·손앵커·동시효과32개/실물폰성능은게임연결후별도검사. Claude움직임코드·게임규칙·다른세션변경무수정. push/외부공개업로드없음.
