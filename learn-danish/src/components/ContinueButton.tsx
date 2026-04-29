import { useNavigate } from '@tanstack/react-router'
import { BookOpen, ChevronRight } from 'lucide-react'
import { getProgress } from '../utils/progress'

export function ContinueButton() {
  const navigate = useNavigate()
  const progress = getProgress()

  const nextLesson = progress.unlockedLessons || 1

  return (
    <button
      onClick={() =>
        navigate({
          to: '/lesson/$id',
          params: { id: String(nextLesson) },
        })
      }
      className="mt-6 flex w-full items-center justify-between rounded-2xl bg-emerald-500 px-6 py-6 text-white shadow-lg active:translate-y-1"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-white/20 p-3">
          <BookOpen className="size-7" />
        </div>

        <div className="text-left">
          <p className="text-xl font-black">Continue Learning</p>
          <p className="text-sm font-medium text-emerald-50">
            Lesson {nextLesson}
          </p>
        </div>
      </div>

      <ChevronRight className="size-8" />
    </button>
  )
}