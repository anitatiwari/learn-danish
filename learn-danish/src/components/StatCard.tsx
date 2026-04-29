type StatCardProps = {
  icon: string
  value: string
  label: string
  color?: 'orange' | 'yellow' | 'purple'
}

export function StatCard({ icon, value, label, color = 'orange' }: StatCardProps) {
  const colors = {
    orange: 'text-orange-500',
    yellow: 'text-yellow-500',
    purple: 'text-purple-500',
  }

  return (
    <div className="rounded-2xl bg-white p-5 text-center shadow-[0_2px_0_#D8E0EA]">
      <div className={`text-3xl ${colors[color]}`}>{icon}</div>
      <p className="mt-2 text-2xl font-black text-slate-900">{value}</p>
      <p className="text-xs font-medium text-slate-500">{label}</p>
    </div>
  )
}