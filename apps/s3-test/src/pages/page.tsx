import { Button } from '@repo/ui'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../shared/consts/routes'

export function HomePage() {
  const navigate = useNavigate()

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-6 px-6 py-16">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Kanban Demo
        </p>
      </div>

      <div>
        <Button text="보드로 이동" onClick={() => navigate(ROUTES.BOARD)} />
      </div>
    </main>
  )
}
