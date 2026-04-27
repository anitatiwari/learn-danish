import { useNavigate } from '@tanstack/react-router'

export function ContinueButton() {
  const navigate = useNavigate()

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <button
        onClick={() => navigate({ to: '/lesson1' })}
        className="flex w-full items-center justify-between rounded-3xl bg-[#58CC02] px-8 py-5 text-white shadow-[0_6px_0_#2B7A0B]"
      >
        <div className="text-left">
          <p className="text-lg font-black">Continue Learning</p>
          <p className="text-sm font-bold text-green-100">
            Lesson 1 · Basic word order
          </p>
        </div>

        <span className="text-2xl">→</span>
      </button>
    </div>
  )
}