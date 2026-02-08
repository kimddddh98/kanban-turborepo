# 1단계: Prune 단계
FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat
RUN npm install -g turbo
WORKDIR /app
COPY . .
# 실제 패키지명 @repo/web 사용
RUN turbo prune @repo/web --docker

# 2단계: 의존성 설치 및 빌드 단계
FROM node:20-alpine AS installer
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm
WORKDIR /app

# Prune 결과물 복사
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./
COPY --from=builder /app/out/pnpm-workspace.yaml ./

# 의존성 설치
RUN pnpm install --frozen-lockfile

# 소스 복사 및 빌드
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
# @repo/web 패키지만 빌드
RUN pnpm turbo run build --filter=@repo/web...

# 3단계: 실행 단계
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Next.js standalone 결과물 복사
# 주의: Turborepo 내부 폴더 구조(apps/web)를 그대로 따라갑니다.
COPY --from=installer /app/apps/web/public ./apps/web/public
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static

EXPOSE 3000
ENV PORT 3000

# standalone 모드에서는 빌드된 앱 폴더 내의 server.js를 실행합니다.
CMD ["node", "apps/web/server.js"]