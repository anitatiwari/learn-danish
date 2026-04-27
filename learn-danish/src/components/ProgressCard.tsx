type ProgressCardProps = {
  xp: number
  level: number
}

export function ProgressCard({ xp, level }: ProgressCardProps) {
  const currentLevelXp = xp % 100
  const percent = currentLevelXp

  return (
    <section className="mx-auto mt-10 max-w-4xl rounded-[2rem] bg-white p-6 shadow-[0_6px_0_#D7E4EF]">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFCC80] text-4xl shadow-[0_4px_0_#FF9600]">
          😊
        </div>

        <div>
          <p className="text-lg font-black">Level {level}</p>
          <p className="text-xs font-bold text-slate-400">
            {currentLevelXp} / 100 XP
          </p>
        </div>

        <p className="ml-auto rounded-full bg-purple-100 px-4 py-2 text-sm font-black text-purple-600">
          {100 - currentLevelXp} XP to next level
        </p>
      </div>

      <div className="mt-6 h-5 rounded-full bg-slate-100 p-1">
        <div
          className="h-3 rounded-full bg-[#58CC02]"
          style={{ width: `${percent}%` }}
        />
      </div>
    </section>
  )
}