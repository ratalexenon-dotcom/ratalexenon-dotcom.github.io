# estate-v7 — A31 v7 정면 배치 런타임 자산(⑩ · 2026-09-22 · B19)

정본 원화: `_기획/생성아트/ui-visuals-20260921/estate-front-facing-v7/`(구역 PNG 1600×2600 · 시설이 배경에 같이 그려진 한 장).
세계 좌표 = 구역 PNG 의 1/2(800×1300). 좌표 원본 `tools/estate-v7.layout.json`(손으로 잰 초안 · `tools/_v7-overlay.mjs` 로 대조) → `tools/gen-estate-v7.mjs` → `src/game/ui/estate-v7.data.js`.

| 파일 | 내용 | 상태 |
|---|---|---|
| `{district}-plate.jpg` | 구역 원화 + **시설 bbox 자리만 빈 땅으로 교체**(2026-09-27 · Gemini flash i2i 로 건물 지운 800×1300 판을 bbox+14px·페더 22px 로만 원본 1600×2600 에 합성) | ✅ 시설 잔상 없음 — Lv 낮은 T1/T2·잠김 빈터 뒤로 최종 건물이 비치던 문제 해결. 원본(시설 포함)·생성 빈 판은 `_보관/estate-v7_plate_시설포함원본_20260927/` |
| `facilities/{id}.png` | 원화 bbox 크롭(2배 해상도) = T3 파츠 | T1/T2 는 v23 파츠를 같은 발치(groundAnchor)에 ×1.38 로 세운다 — **화풍 불일치는 알려진 한계**(Codex T1/T2 대기) |
| `emitters/{district}.json` | 굴뚝 연기 앵커 **초안**(bbox-local px · 눈대중) | Codex 앵커 표 오면 교체 |
| (없음) | 물·수관·깃발·안개·발광 층 | Codex 분리본 대기 — livefx 스펙 키 비움. 새·구름 그림자만 켜 둠 |
| (v23 재사용) | 훈련 문 5칸 = v23 T3 문 스프라이트를 v7 펜스 자리(layout `gates`)에 | 펜스 T1/T2 변형은 Codex 대기(훅만) |
