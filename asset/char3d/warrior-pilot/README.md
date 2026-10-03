# 완성 후보 전사 1명 게임 내 검수 — 2026-09-14

진입: prototype/ranked-fit.html?hero=warrior (기존 Vite 서버에서 사용).
기본 ranked-fit은 기존 캐릭터 유지. warrior 옵션만 첫 아군의 외형/초상을 교체하며, 첫 아군의 직업·종족·화염탄은 ownedRoster가 복제한 메모리 객체에만 지정한다. 저장 파일 쓰기 없음.

적용 자산: asset/char3d/warrior-pilot/warrior.glb, cast-single.animation.json, portrait.png.
모델 원본: warrior-equipped-v5.glb. 사용자가 승인한 몸 비율과 복원한 얼굴을 유지한 도끼 장착본.
전용 시전 클립은 tools/retarget-warrior-cast.mjs로 현재 뼈대에 재변환. 기존 인간용 JSON을 그대로 복사하지 않았다.

검증: 저장 격리 단위검사와 전투/스킬 5개 테스트 파일 통과. 전사 옵션과 기본 화면 모두 숨김 Edge 390×844·360×800에서 12명, 초상, 실제 전투·일시정지·배치복귀·상세정보 검사 통과, 콘솔 오류 0. 전사 옵션 warriorCount=1. 실제 unit 0 prop_37 castSeq 1, 단일 시전 모션과 활성 FX 관측. 저장 SHA256 전후 일치 9bdc4d9e2363d7d89cd2aadce905e835ed9c599e19ede94e576d2d92dc6c38f8.

warrior-live-battle.mp4: 실제 숨김 브라우저 canvas의 약 8초 영상. 사전 렌더 몽타주가 아니다. UI는 canvas 영상에 포함되지 않으며 전체 UI는 ranked-tripo-captures의 PNG로 확인한다.

한계: 본편 game.html 연결·배포·실폰 성능 검증 미실행. 등 털의 각진 변형, 손가락 쥐기, 도끼 재질과 일부 관통, 시전 시 도끼 궤적 추가 보정 필요. HP는 엔진에서 먼저 확정되어 투사체 도착과 시차가 있다. 최종 아트 전체 품질을 승인한 단계가 아니다. 추가 유료 호출 없음.

## 2026-09-14 · 비율·걷기·전투불능 표시 수정
- 최신 모델: warrior-compact-equipped-v7.glb. 원래 얼굴/머리를 세 축 동일 1.50배로 확대하고 다리 비중을 더 축소. 얼굴 역변환 형상 오차 최대 3.08e-8. 기존 모델과 원본은 보존.
- 검수용 warrior.glb 및 전용 시전 JSON 갱신. 게임 내 저장 변경 없음.
- 걸음 위상 유지, 짧은 이동 뒤 0.12초 걸음 마무리, 이동을 잔여 기본 공격보다 우선 처리. 이동 속도에 따라 걷기 재생 속도 조절. 시전은 기존 우선순위 유지.
- HP 0 즉시 숨김 제거: 사망 모션 후 1.2초까지 표시, 이후 0.6초 페이드. 전투 종료 뒤에도 표시 타이머 진행. 배치 복귀 시 투명도 복원. 사망은 기존 클립 기반 강체 쓰러짐으로 전문 사망 모션은 아님.
- 배우 표현 회귀 테스트 및 기존 전투/스킬/시연 테스트 통과. 실제 브라우저에서 발 위치 변화, 걸음 위상 유지, 사망 후 표시/소실을 검증. 최종 및 기본 검수 화면 모두 390×844·360×800 통과, 오류 0, 세이브 해시 불변.
- 영상/실측 근거: motion-fix/warrior-live-battle.mp4, motion-proof.json, gait-check.json, verification-summary.json. 최종 비교: compact-comparison.jpg. 추가 유료 호출 없음.
- 털 복장, 얼굴 표정, 손가락 쥐기·무기 관통, 발 접지 및 HP/투사체 시차는 남은 품질 항목이다. 목표 아트 전체와 일치한다는 승인은 아직 없음.
