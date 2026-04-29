import { useNavigate } from '@tanstack/react-router'
import { Check, ChevronRight } from 'lucide-react'

type LessonItemProps = {
  number: number
  title: string
  xp: number
  active?: boolean
  completed?: boolean
}

export function LessonItem({
  number,
  title,
  xp,
  active = false,
  completed = false,
}: LessonItemProps) {
  const navigate = useNavigate()

  const clickable = active || completed

  return (
    <button
      disabled={!clickable}
      onClick={() =>
        navigate({
          to: '/lesson/$id',
          params: { id: String(number) },
        })
      }
      className={`flex w-full items-center justify-between rounded-3xl border-2 px-7 py-6 text-left transition ${
        completed
          ? 'border-green-200 bg-green-50'
          : active
            ? 'border-blue-300 bg-blue-50 shadow-[0_3px_0_#93C5FD]'
            : 'border-slate-100 bg-slate-50 opacity-50'
      }`}
    >
      <div className="flex items-center gap-6">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full text-3xl font-black ${
            completed
              ? 'bg-green-500 text-white'
              : active
                ? 'bg-blue-500 text-white'
                : 'bg-slate-200 text-slate-400'
          }`}
        >
          {completed ? <Check className="size-9" /> : number}
        </div>

        <div>
          <p
            className={`text-2xl font-black ${
              completed || active ? 'text-slate-900' : 'text-slate-400'
            }`}
          >
            {title}
          </p>
          <p className="text-lg font-semibold text-slate-500">{xp} XP</p>
        </div>
      </div>

      {active && !completed && <ChevronRight className="size-8 text-blue-500" />}
    </button>
  )
}