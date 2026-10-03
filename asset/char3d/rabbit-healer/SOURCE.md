# 토끼족 여성 힐러 — 리깅·솜꼬리·동작 납품

- 최종: rabbit-healer-animated.glb (idle / walk / cast 3개). 바인드 포즈: rabbit-healer-rigged.glb.
- 확인 영상: rabbit-healer-preview.mp4. 정면/후면: final-front.jpg, final-back.jpg. 동작별 contact JPG.
- H3.1 재제작 얼굴 유지. 23개 뼈, 솜꼬리는 Hips 자식 별도 메시이며 뒤쪽 몸체에 뿌리를 겹쳐 배치. 얼굴·몸체의 위치/UV/텍스처는 변경하지 않음.
- 리깅 시 옷자락에 묻은 팔 영향을 골반으로 재연결(weight-correction.json). 포즈별 접지 보정.
- 동작은 기존 게임 기본형_동작53.glb의 생활_대기 / 이동_걷기_여 / 스킬_시전_단일을 로컬 리타깃하고 팔 자세 보정. Tripo 생성 동작이 아님. cast는 한 손 시전이며 지팡이/치유 VFX는 포함하지 않음.
- Tripo rig: 7beb46c9-f073-418f-8857-b4db1839f186 성공, 25크레딧 (1220→1195).
- Tripo animation: cce979b0-c0ee-4847-8dfd-1de653ea1a67 실패(unsupported target skeleton), 차감 0, 잔액 1195, 묶임 0. 재시도 생성 없음.
- 이전 P2 실패 모델 110크레딧 환급 신청은 Naver 메일로 발송 완료. 승인/복구 확인은 아직 없음. H3.1 재제작 비용40 별도.
- animation-verification.json: 전 프레임 샘플 유한 좌표, 3클립 움직임 확인, 브라우저 오류 없음. 정면/측면/후면 육안 검수. 실게임 런타임 연결과 실게임 검수는 미수행.
- Three.js: AnimationMixer에서 idle/walk LoopRepeat, cast LoopOnce. 네이티브 정면 +X, 프리뷰는 Y -90도. 신장 약1.0. 동작은 제자리. 별도 tail은 Hips를 따라감.
- 재현: build-animations.mjs → rabbit-tail.mjs → animation-capture.mjs → animation-movie.mjs. 원본 rabbit-rigged-raw.glb 보존.
