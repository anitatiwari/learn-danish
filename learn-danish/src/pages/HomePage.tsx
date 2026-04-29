import { Header } from '../components/Header'
import { StatCard } from '../components/StatCard'
import { ProgressCard } from '../components/ProgressCard'
import { ContinueButton } from '../components/ContinueButton'
import { LearningPath } from '../components/LearningPath'
import { getProgress } from '../utils/progress'

export function HomePage() {
  const progress = getProgress()

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EEF7FF] to-[#FAF5FF] pb-16 text-slate-900">
      <Header level={progress.level} />

      <section className="mx-auto max-w-3xl px-4 pt-6">
        <div className="grid grid-cols-3 gap-4">
          <StatCard icon="🔥" value="0" label="Day Streak" color="orange" />
          <StatCard icon="☆" value={String(progress.xp)} label="Total XP" color="yellow" />
          <StatCard
            icon="♙"
            value={String(progress.completedLessons.length)}
            label="Badges"
            color="purple"
          />
        </div>

        <ProgressCard xp={progress.xp} level={progress.level} />

        <ContinueButton />

        <LearningPath unlockedLessons={progress.unlockedLessons} />
      </section>
    </main>
  )
}