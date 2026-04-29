import { BookOpen } from 'lucide-react'
import { LessonItem } from './LessonItem'
import { getProgress } from '../utils/progress'

type LearningPathProps = {
  unlockedLessons: number
}

export function LearningPath({ unlockedLessons }: LearningPathProps) {
  const progress = getProgress()

  const completedLessons = progress.completedLessons || []

  return (
    <section className="mt-6 rounded-3xl bg-white p-8 shadow-[0_2px_0_#D8E0EA]">
      <div className="mb-8 flex items-center gap-3">
        <BookOpen className="size-7 text-blue-600" />
        <h2 className="text-3xl font-semibold text-slate-900">
          Your Learning Path
        </h2>
      </div>

      <div className="space-y-5">
        <LessonItem
          number={1}
          title="Nutid & Ordstilling"
          xp={50}
          completed={completedLessons.includes(1)}
          active={unlockedLessons >= 1}
        />

        <LessonItem
          number={2}
          title="Modalverber & Negation"
          xp={50}
          completed={completedLessons.includes(2)}
          active={unlockedLessons >= 2}
        />

        <LessonItem
          number={3}
          title="Datid (Past Tense)"
          xp={55}
          completed={completedLessons.includes(3)}
          active={unlockedLessons >= 3}
        />

        <LessonItem
          number={4}
          title="Ledsætninger"
          xp={60}
          completed={completedLessons.includes(4)}
          active={unlockedLessons >= 4}
        />

        <LessonItem
          number={5}
          title="Avanceret Grammatik"
          xp={65}
          completed={completedLessons.includes(5)}
          active={unlockedLessons >= 5}
        />
      </div>
    </section>
  )
}