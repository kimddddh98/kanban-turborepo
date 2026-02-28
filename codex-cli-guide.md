# Codex CLI Guide

## 개요

Codex CLI는 터미널에서 대화형으로 코딩 작업을 지시하거나, 단발성 프롬프트를 비대화형으로 실행할 수 있는 도구입니다.

## 기본 사용법

- 대화형 시작:

```bash
codex
```

- 특정 디렉터리에서 시작:

```bash
codex -C /path/to/repo
```

- 모델 지정:

```bash
codex -m o3
```

## 자주 쓰는 명령어

- 도움말:

```bash
codex --help
```

- 단일 프롬프트 실행(비대화형):

```bash
codex exec "tests 돌리고 실패 원인을 요약해줘"
```

- 코드 리뷰(비대화형):

```bash
codex review
```

- 최신 변경사항 적용:

```bash
codex apply
```

- 현재 폴더 세션 목록 보기:

```bash
codex resume
```

- 최근 세션 재개:

```bash
codex resume --last
```

- 최근 세션 분기:

```bash
codex fork --last
```

## 로그/기록 확인

- 최근 질문 기록(JSONL):

```bash
tail -n 50 ~/.codex/history.jsonl
```

- 질문 텍스트만 보기:

```bash
jq -r '.text' ~/.codex/history.jsonl | tail -n 50
```

- 세션 폴더 확인:

```bash
ls -la ~/.codex/sessions
```

## 실행 모드(승인 정책)

- 자동 승인 중심:

```bash
codex --full-auto
```

- 요청 시 승인:

```bash
codex -a on-request
```

## 팁

- 작업 루트에서 실행하면 파일 탐색과 수정이 자연스럽습니다.
- 스크립트/CI에서는 `codex exec`가 가장 간단합니다.

## 모델 비교

| 모델                 | 성능 포지션(요약)                               | 속도 감각    | 가격(1M 토큰, 입력/캐시/출력) |
| -------------------- | ----------------------------------------------- | ------------ | ----------------------------- |
| `gpt-5.3-codex`      | 코딩 에이전트 최상위(“most capable”)            | 중간         | `$1.75 / $0.175 / $14`        |
| `gpt-5.1-codex`      | 고성능 코딩 에이전트                            | 중간         | `$1.25 / $0.125 / $10`        |
| `gpt-5.1-codex-mini` | 저비용 코딩용(성능은 상위 대비 낮음)            | 빠름         | `$0.25 / $0.025 / $2`         |
| `codex-mini-latest`  | Codex CLI 최적화된 빠른 추론 모델(o4-mini 파생) | 빠름         | `$1.50 / $0.375 / $6`         |
| `gpt-5.2`            | 범용 코딩/에이전트 플래그십                     | 중간         | `$1.75 / $0.175 / $14`        |
| `gpt-5.2-pro`        | 최고 정밀도(매우 비쌈)                          | 느릴 수 있음 | `$21 / - / $168`              |
| `gpt-5 mini`         | 범용 저비용                                     | 빠름         | `$0.25 / $0.025 / $2`         |

빠른 선택 기준:

- 품질 최우선: `gpt-5.3-codex`
- 가성비 코딩: `gpt-5.1-codex-mini` 또는 `gpt-5 mini`
- 레거시/CLI 튜닝 모델: `codex-mini-latest`
