
## 2026-09-14 궁수 뼈대·전투 연결
- archer-common-rig-v1.glb/blend: 기존 male-base-animated-human 41뼈대 + 최근접4정점 가중치 전이. 원본 체형 정점 좌표 보존. 무가중치0. 생성/리깅 API 추가결제0.
- prototype/asset/char3d/archer-pilot/: 본체·초상·전용 단일시전·활 모션 JSON. 기존 기본형_동작53 전투_활을 바인드 축 맞춰 13상체뼈 retarget, 전사 시전용 팔보정은 제외. 로더에서 전투_활만 별도 덮어씀.
- ranked-fit.html?hero=duo: 아군 첫 전사/둘째 은빛궁수. 궁수 class archer/elf/여성, 활 별도 기존게임에셋 장착. 양쪽 모델75%. 메모리 검수값이며 세이브 불변. 기존 hero=warrior 유지.
- browser-check: 390×844/360×800, 전사1+궁수1/총12, 스킬FX/걷기/사망표시/재생복귀/초상/상세 검사통과. 콘솔오류0. 세이브SHA 전후동일. fixture 독립성 및 활상체회전트랙 변화 확인.
- 실제전투 영상 archer-final-v1/warrior-archer-battle.mp4. 아직 손가락/활시위 릴리즈 정렬 및 원화활 형태는 미완성. 머리카락·치마 자동가중치 고품질검수 추가필요. 기존 목각사망동작은 사용자 피드백만 기록됐고 아직 수정 안 함. 본편 연결/배포 안 함.