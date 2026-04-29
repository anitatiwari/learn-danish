type ProgressCardProps = {
  xp: number
  level: number
}

export function ProgressCard({ xp, level }: ProgressCardProps) {
  const currentXp = xp % 100
  const percent = currentXp

  return (
    <section className="mt-6 rounded-2xl bg-white p-5 shadow-[0_2px_0_#D8E0EA]">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-yellow-300 to-orange-400 text-3xl shadow-lg">
          😊
        </div>

        <div>
          <p className="text-lg font-black">Level {level}</p>
          <p className="text-sm text-slate-500">{currentXp}/100 XP</p>
        </div>

        <p className="ml-auto text-sm font-bold text-purple-600">
          {100 - currentXp} XP to next level
        </p>
      </div>

      <div className="mt-6 h-3 rounded-full bg-slate-100">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-pink-400 to-green-400"
          style={{ width: `${percent}%` }}
        />
      </div>
    </section>
  )
}