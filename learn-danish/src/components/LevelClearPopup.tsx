type LevelClearPopupProps = {
  earnedXp: number
  onContinue: () => void
}

export function LevelClearPopup({ earnedXp, onContinue }: LevelClearPopupProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="max-w-sm rounded-3xl bg-white p-8 text-center shadow-xl">
        <div className="text-6xl">🏆</div>

        <h2 className="mt-4 text-3xl font-black">Level Clear!</h2>

        <p className="mt-3 text-gray-600">
          Great job! You earned {earnedXp} XP
        </p>

        <button
          onClick={onContinue}   // ✅ IMPORTANT
          className="mt-6 w-full rounded-xl bg-[#58CC02] py-4 font-black text-white shadow-[0_5px_0_#2B7A0B] active:translate-y-[5px] active:shadow-none"
        >
          Continue
        </button>
      </div>
    </div>
  )
}