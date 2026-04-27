export function Header() {
    return (
      <header className="mx-auto flex max-w-4xl items-center justify-between rounded-3xl bg-white px-6 py-5 shadow-[0_6px_0_#D7E4EF]">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#58CC02] text-2xl shadow-[0_4px_0_#2B7A0B]">
            🇩🇰
          </div>
  
          <div>
            <p className="text-lg font-black">Hej, Guest 👋</p>
            <p className="text-sm font-semibold text-slate-400">Level 1 learner</p>
          </div>
        </div>
  
        <button className="rounded-2xl bg-[#FFF4D6] px-4 py-3 text-2xl shadow-[0_4px_0_#F4C542]">
          🏆
        </button>
      </header>
    )
  }