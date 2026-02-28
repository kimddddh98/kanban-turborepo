# Repository Guidelines

## 프로젝트 구조 및 모듈 구성

- `apps/web`는 Next.js 앱입니다 (`apps/web/app`에 App Router, `apps/web/public`에 정적 자산).
- `apps/s3-test`는 Vite + React 앱입니다 (`apps/s3-test/src`, 정적 자산은 `apps/s3-test/public`).
- `packages/ui`는 공통 React UI 컴포넌트와 Storybook을 포함합니다 (`packages/ui/src`).
- `packages/utils`는 공통 TypeScript 유틸리티 모음입니다 (`packages/utils/src`).
- `packages/design-tokens`는 `design-token.json`을 기반으로 토큰 출력물을 빌드합니다.
- `packages/store`는 현재 비어 있으며 향후 상태 관리 로직용으로 예약되어 있습니다.

## 빌드, 테스트, 개발 명령어

루트에서 pnpm으로 실행합니다:

- `pnpm dev`는 `turbo run dev`를 실행합니다.
- `pnpm build`는 `turbo run build`로 전체 패키지/앱을 빌드합니다.
- `pnpm test`는 `turbo run test`를 실행합니다 (test 스크립트가 있는 패키지/앱만).
- `pnpm storybook`는 정의된 Storybook 작업을 실행합니다.
- `pnpm format`은 워크스페이스 전체에 Prettier를 적용합니다.

앱별 예시:

- `pnpm --filter @repo/web dev` (Next 개발 서버, 4000 포트).
- `pnpm --filter @repo/s3-test dev` (Vite 개발 서버, 5050 포트).

## 코딩 스타일 및 네이밍 규칙

- TypeScript 사용을 기본으로 합니다.
- 포맷팅은 Prettier로 통일하며, 수동 포맷보다 `pnpm format` 사용을 권장합니다.
- ESLint는 앱별로 설정되어 있습니다 (`apps/web/eslint.config.mjs`, `apps/s3-test/eslint.config.js`).
- 테스트 파일은 `*.test.tsx` 네이밍을 따릅니다 (예: `packages/ui/src/components/Button.test.tsx`).

## 테스트 가이드라인

- `packages/ui`와 `apps/s3-test`는 Vitest(Testing Library 포함)를 사용합니다.
- 대상 테스트 실행: `pnpm --filter @repo/ui test`, `pnpm --filter @repo/s3-test test`.
- 별도의 커버리지 기준은 없으며, 컴포넌트 동작과 유틸리티 중심으로 작성합니다.

## 커밋 및 PR 가이드라인

- 커밋 메시지는 `feat:`, `chore:`, `refactor:`, `lint:` 등 접두어 스타일을 주로 사용합니다.
- 한국어 커밋 메시지도 허용되며, 명확하고 범위가 좁게 작성합니다.

## 구성 관련 참고

- Turborepo 작업은 `turbo.json`에서 관리됩니다. 공통 실행 대상이면 작업을 추가하세요.
- 디자인 토큰은 `design-token.json`을 소스로 하며 `packages/design-tokens/build-output.js`로 빌드합니다.
