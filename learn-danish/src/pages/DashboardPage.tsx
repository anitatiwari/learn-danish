import { useNavigate } from '@tanstack/react-router'
import { Flame, Star, TrendingUp, Award, ArrowLeft } from 'lucide-react'
import { getProgress } from '../utils/progress'

export function DashboardPage() {
  const navigate = useNavigate()
  const progress = getProgress()

  const currentXp = progress.xp % 100
  const completed = progress.completedLessons.length

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EEF7FF] to-[#FAF5FF] pb-12 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-3xl items-center gap-6 px-4 py-5">
          <button onClick={() => navigate({ to: '/' })}>
            <ArrowLeft className="size-6 text-slate-600" />
          </button>
          <h1 className="text-lg font-semibold">Your Progress</h1>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 pt-8">
        <div className="rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 p-8 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-b from-yellow-300 to-orange-400 text-4xl shadow-lg">
              😊
            </div>

            <div className="text-right">
              <p className="text-lg font-semibold">Guest</p>
              <p className="mt-1">🏆 Level {progress.level}</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white/20 p-4">
            <div className="flex justify-between text-sm font-semibold">
              <span>Level {progress.level}</span>
              <span>{currentXp}/100 XP</span>
            </div>

            <div className="mt-3 h-3 rounded-full bg-white/30">
              <div
                className="h-3 rounded-full bg-white"
                style={{ width: `${currentXp}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <StatBox icon={<Flame />} value="0" label="Day Streak" note="Keep it up! 🔥" color="orange" />
          <StatBox icon={<Star />} value={String(progress.xp)} label="Total XP" note="Nice progress!" color="yellow" />
          <StatBox icon={<TrendingUp />} value={String(completed)} label="Lessons Done" note="Great job!" color="green" />
          <StatBox icon={<Award />} value={String(completed)} label="Badges" note="Awesome! 🏆" color="purple" />
        </div>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-[0_2px_0_#D8E0EA]">
          <div className="mb-5 flex items-center gap-2">
            <Award className="size-5 text-purple-600" />
            <h2 className="text-lg font-semibold">Your Achievements</h2>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Badge active icon="🌟" title="First Step" subtitle="Complete 1 lesson" />
            <Badge icon="🔥" title="On Fire" subtitle="3 day streak" />
            <Badge icon="📚" title="Grammar Pro" subtitle="Complete 5 lessons" />
            <Badge icon="⚡" title="Week Warrior" subtitle="7 day streak" />
            <Badge icon="💎" title="XP Hunter" subtitle="Earn 100 XP" />
            <Badge icon="🏆" title="Master" subtitle="Reach Level 5" />
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-[0_2px_0_#D8E0EA]">
          <h2 className="mb-5 text-lg font-semibold">Learning Journey</h2>

          <InfoRow label="Completed Lessons" value={String(completed)} />
          <InfoRow label="Current Level" value={String(progress.level)} />
          <InfoRow label="Longest Streak" value="0 days" />
          <InfoRow label="Last Active" value={new Date().toLocaleDateString()} />
        </section>
      </section>
    </main>
  )
}

function StatBox({
  icon,
  value,
  label,
  note,
  color,
}: {
  icon: React.ReactNode
  value: string
  label: string
  note: string
  color: 'orange' | 'yellow' | 'green' | 'purple'
}) {
  const colors = {
    orange: 'bg-orange-100 text-orange-500',
    yellow: 'bg-yellow-100 text-yellow-500',
    green: 'bg-green-100 text-green-500',
    purple: 'bg-purple-100 text-purple-500',
  }

  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_2px_0_#D8E0EA]">
      <div className="flex items-center gap-4">
        <div className={`rounded-xl p-3 ${colors[color]}`}>{icon}</div>
        <div>
          <p className="text-3xl font-black">{value}</p>
          <p className="text-sm text-slate-500">{label}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-500">{note}</p>
    </div>
  )
}

function Badge({
  active = false,
  icon,
  title,
  subtitle,
}: {
  active?: boolean
  icon: string
  title: string
  subtitle: string
}) {
  return (
    <div
      className={`rounded-2xl border-2 p-4 text-center ${
        active
          ? 'border-yellow-400 bg-yellow-50'
          : 'border-slate-100 bg-slate-50 opacity-60'
      }`}
    >
      <div className="text-3xl">{icon}</div>
      <p className="mt-2 text-sm font-semibold">{title}</p>
      <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 text-lg">
      <span className="text-slate-600">{label}</span>
      <span className="font-black">{value}</span>
    </div>
  )
}