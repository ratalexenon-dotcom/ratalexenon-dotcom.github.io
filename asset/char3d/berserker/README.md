## 2026-09-27 인간 광전사 동작·전투 연결
- 최종: C:/Users/jenew/Documents/MPH-berserker-20260927/berserker-animated.glb 및 .blend. 런타임 사본 prototype/asset/char3d/berserker/berserker-animated.glb (9,654,236 bytes; asset은 프로젝트 기존 원칙상 Git 밖).
- idle/walk/slash 3클립, 베기 1.2초, 보행 수평 순이동 제거. 42뼈·별도 대검·오른손 Grip_R 유지.
- char3d.berserker.js + battle3d.js: 인간 남성의 유효 직업 berserker에만 선택. 대검 중복 방지; 로드 실패 시 기존 몸 폴백. 로컬 연결 완료, 배포 미수행.
- 검증: test-berserker, test-liverun(22), test-char3d, JS 구문 통과. 숨김 IAB 검수 페이지에서 실제 B3 4인 fixture로 대상 1명·대검 1개, 걷기/공격 전환과 console error 0 확인. IAB 캡처 기능 실패로 실게임 화면 잘림은 미검증; Blender 정면 정지 렌더 확인.
- 검수 페이지: prototype/_look/berserker-20260927.html. 사용자 세이브 수정 없음.
- 남은 다듬기: 왼손 양손잡기 IK/손가락 보정, 대기 자세 검끝 접지, 전용 스킬/피격/사망 애니메이션(현재 기존 런타임 폴백), 실제 전투 화면 시각 검수.
- 동작 비용 50cr: batch 8bc2e9b8-d69d-4314-b0b7-8660d7c7ebc5(30cr, slash만 반환), idle be9cacf6-b609-4cd5-93c7-1517a8f09e33(10cr), walk 7e61ba39-b617-4bef-ae40-bc73e04f04dd(10cr). 마지막 잔액935cr.
