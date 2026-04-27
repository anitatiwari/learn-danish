import { useNavigate } from '@tanstack/react-router'

export function LessonItem({ number, title, active }: any) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => active && navigate({ to: `/lesson/${number}` })}
      className={`cursor-pointer rounded-xl p-4 ${
        active ? 'bg-blue-100' : 'bg-gray-200'
      }`}
    >
      {title}
    </div>
  )
}