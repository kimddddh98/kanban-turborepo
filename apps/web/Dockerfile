# 1단계: Prune 단계
FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat
RUN npm install -g turbo
WORKDIR /app

COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* turbo.json ./

# 2. 전체 소스 복사
COPY . .

# 3. npx로 실행하면서 명시적으로 현재 폴더를 지정
RUN turbo prune @repo/web --docker

# 2단계: 의존성 설치 및 빌드 단계
FROM node:20-alpine AS installer
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm
WORKDIR /app

# Prune 결과물 복사 (manifest + lockfile + workspace)
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./
COPY --from=builder /app/out/pnpm-workspace.yaml ./
COPY --from=builder /app/turbo.json ./

# 의존성 설치
RUN pnpm install --frozen-lockfile

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# 빌드에 필요한 소스(pruned full) 복사 후 turbo 빌드 (turbo.json 필요)
COPY --from=builder /app/out/full/ .
RUN pnpm turbo run build --filter=@repo/web...

# 3단계: 실행 단계
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Next.js standalone 결과물 복사
# 주의: Turborepo 내부 폴더 구조(apps/web)를 그대로 따라갑니다.
COPY --from=installer /app/apps/web/public ./apps/web/public
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static

EXPOSE 3000
ENV PORT=3000

# standalone 모드에서는 빌드된 앱 폴더 내의 server.js를 실행합니다.
CMD ["node", "apps/web/server.js"]