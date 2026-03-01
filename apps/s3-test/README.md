# `@repo/s3-test`

React + Vite 기반 웹 앱입니다.

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| Framework | `React 19` |
| Build Tool | `Vite 7` |
| Language | `TypeScript` |
| Routing | `react-router-dom` |
| Styling | `Tailwind CSS v4` |
| Test | `Vitest` |
| UI Package | `@repo/ui` |
| Design Tokens | `@repo/design-tokens` |

## 주요 폴더 구조

```text
apps/s3-test
├── public/
├── src/
│   ├── features/
│   ├── pages/
│   └── shared/
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## `src` 구조

```text
src
├── features/
│   └── kanban/
├── pages/
│   ├── board/
│   └── page.tsx
└── shared/
    ├── consts/
    ├── layouts/
    ├── styles/
    └── test/
```

## 디렉터리 역할

- `features`: 도메인별 기능 단위를 둡니다.
- `pages`: 라우트 경로 기준 페이지를 둡니다.
- `shared`: 전역 공용 리소스를 둡니다.
- `public`: 정적 파일을 둡니다.

## 실행 명령어

루트에서 실행합니다.

```bash
pnpm --filter @repo/s3-test dev
pnpm --filter @repo/s3-test build
pnpm --filter @repo/s3-test test
```

기본 개발 서버 포트는 `5050`입니다.
