type StatCardProps = {
    icon: string
    value: string
    label: string
  }
  
  export function StatCard({ icon, value, label }: StatCardProps) {
    return (
      <div className="rounded-3xl bg-white p-5 text-center shadow-[0_6px_0_#D7E4EF] transition hover:-translate-y-1">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-3xl">
          {icon}
        </div>
        <p className="mt-3 text-2xl font-black text-slate-800">{value}</p>
        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
      </div>
    )
  }