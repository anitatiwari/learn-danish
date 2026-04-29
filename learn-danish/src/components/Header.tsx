import { useNavigate } from '@tanstack/react-router'
import { Trophy } from 'lucide-react'

type HeaderProps = {
  level: number
}

export function Header({ level }: HeaderProps) {
  const navigate = useNavigate()

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <div>
          <p className="font-semibold text-slate-900">Hej, Guest! 👋</p>
          <p className="text-sm text-slate-500">Level {level}</p>
        </div>

        <button
          onClick={() => navigate({ to: '/dashboard' })}
          className="rounded-2xl bg-blue-100 p-3 text-blue-600"
        >
          <Trophy className="size-6" />
        </button>
      </div>
    </header>
  )
}