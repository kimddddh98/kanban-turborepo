import { Link } from 'react-router-dom'
import { ROUTES } from '../../shared/consts/routes'

export function BoardPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-6 py-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Board
        </p>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
              Kanban Board
            </h1>
          </div>
          <Link
            className="text-sm font-medium text-slate-700 underline"
            to={ROUTES.HOME}
          >
            홈으로 돌아가기
          </Link>
        </div>
      </header>

      <section className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-8"></section>
    </main>
  )
}
