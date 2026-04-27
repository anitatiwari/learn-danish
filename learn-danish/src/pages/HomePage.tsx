import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { StatCard } from '../components/StatCard'
import { ProgressCard } from '../components/ProgressCard'
import { ContinueButton } from '../components/ContinueButton'
import { LearningPath } from '../components/LearningPath'
import { getProgress } from '../utils/progress'

export function HomePage() {
  const [progress, setProgress] = useState(getProgress())

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  return (
    <main className="min-h-screen bg-[#EEF7FF] px-4 py-6 text-slate-800">
      <Header level={progress.level} />

      <section className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-4">
        <StatCard icon="🔥" value="0" label="Day Streak" />
        <StatCard icon="⭐" value={String(progress.xp)} label="Total XP" />
        <StatCard icon="🎖️" value={String(progress.completedLessons.length)} label="Badges" />
      </section>

      <ProgressCard xp={progress.xp} level={progress.level} />
      <ContinueButton />
      <LearningPath unlockedLessons={progress.unlockedLessons} />
    </main>
  )
}