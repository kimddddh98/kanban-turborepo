import { Link } from 'react-router-dom'
import { AddCardButton, KanbanCard, KanbanColumn } from '@repo/ui'

import { ROUTES } from '../../shared/consts/routes'

const columns = [
  {
    id: 'backlog',
    title: 'Backlog',
    description: '정리 전 아이디어와 요청',
    accent: 'bg-slate-500',
    tasks: [
      {
        title: '프로젝트 온보딩 화면 초안',
        summary: '첫 진입 사용자를 위한 소개 레이아웃 정리',
        meta: 'Design',
      },
      {
        title: '보드 필터 정책 정리',
        summary: '우선순위와 담당자 기준 필터 방식 정의',
        meta: 'Planning',
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    description: '현재 진행 중인 작업',
    accent: 'bg-amber-500',
    tasks: [
      {
        title: '칸반 컬럼 레이아웃 구현',
        summary: '데스크톱/모바일 대응 보드 프레임 구성',
        meta: 'Frontend',
      },
      {
        title: '라우트 구조 정리',
        summary: '페이지 경로를 폴더 기준으로 재정렬',
        meta: 'Architecture',
      },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    description: '확인 또는 피드백 대기',
    accent: 'bg-sky-500',
    tasks: [
      {
        title: 'README 구조 문서 검토',
        summary: '폴더 구조 문서화 내용 점검',
        meta: 'Docs',
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    description: '완료된 작업',
    accent: 'bg-emerald-500',
    tasks: [
      {
        title: 'react-router-dom 도입',
        summary: '홈과 보드 라우트 분리',
        meta: 'Setup',
      },
      {
        title: '기본 페이지 구조 생성',
        summary: '홈/보드 페이지와 공통 레이아웃 연결',
        meta: 'Routing',
      },
    ],
  },
] as const

export function BoardPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_45%,#e2e8f0_100%)]">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col gap-8 px-4 py-6 pb-0 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[32px] border border-white/60 bg-slate-950 text-white shadow-[0_30px_80px_rgba(15,23,42,0.24)]">
          <div className="grid gap-8 px-6 py-8 md:px-8 lg:grid-cols-[1.6fr_0.9fr]">
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
                    Product Board
                  </p>
                  <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Kanban Workspace
                  </h1>
                </div>
                <Link
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-white/40 hover:bg-white/10"
                  to={ROUTES.HOME}
                >
                  홈으로
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Total Tasks
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">7</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Active Sprint
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    12 Days
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Blockers
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">1</p>
                </div>
              </div>
            </div>

            <div className="bg-white/6 rounded-[28px] border border-white/10 p-5 backdrop-blur-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Focus
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    이번 스프린트 목표
                  </h2>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  On Track
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white px-4 py-4 text-slate-900">
                  <p className="text-sm font-semibold">칸반보드 UI 뼈대 완성</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    컬럼, 카드, 상단 상태 영역 배치를 우선 확정
                  </p>
                </div>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>레이아웃 진행률</span>
                    <span>65%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="bg-linear-to-r h-2 w-[65%] rounded-full from-sky-400 to-cyan-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="flex items-center justify-between gap-4 px-1">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Board Layout
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              작업 상태별 컬럼
            </h2>
          </div>
        </section>

        <section className="-mx-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="grid min-w-[1100px] grid-cols-4 gap-5">
            {columns.map((column) => (
              <KanbanColumn
                key={column.id}
                title={column.title}
                description={column.description}
                accent={column.accent}
                count={column.tasks.length}
              >
                {column.tasks.map((task) => (
                  <KanbanCard
                    key={task.title}
                    title={task.title}
                    summary={task.summary}
                    meta={task.meta}
                  />
                ))}
                <AddCardButton
                  onClick={() => alert('새 카드를 추가할 자리')}
                  label="+ 새 카드를 추가할 자리"
                />
              </KanbanColumn>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
