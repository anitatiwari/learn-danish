import { LessonItem } from './LessonItem'

type LearningPathProps = {
  unlockedLessons: number
}

export function LearningPath({ unlockedLessons }: LearningPathProps) {
  return (
    <section className="mx-auto mt-10 max-w-4xl rounded-[2rem] bg-white p-8 shadow-[0_6px_0_#D7E4EF]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-black">Your Learning Path</h2>
        <span className="rounded-full bg-[#EEF7FF] px-4 py-2 text-xs font-black text-[#1CB0F6]">
          {unlockedLessons} unlocked
        </span>
      </div>

      <div className="space-y-4">
        <LessonItem number={1} title="Basic word order (1/2)" xp={25} active={unlockedLessons >= 1} />
        <LessonItem number={2} title="Present Tense Verbs" xp={30} active={unlockedLessons >= 2} />
        <LessonItem number={3} title="Question Formation" xp={25} active={unlockedLessons >= 3} />
        <LessonItem number={4} title="Common Irregular Verbs" xp={30} active={unlockedLessons >= 4} />
      </div>
    </section>
  )
}