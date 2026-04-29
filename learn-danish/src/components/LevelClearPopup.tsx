import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Star, Home, ArrowRight } from 'lucide-react'

type LevelClearPopupProps = {
  earnedXp: number
  lesson: {
    id: number
    title: string
  }
  totalXp?: number
  level?: number
  onContinue: () => void
  onHome: () => void
}

export function LevelClearPopup({
  earnedXp,
  lesson,
  totalXp = 0,
  level = 1,
  onContinue,
  onHome,
}: LevelClearPopupProps) {
  const [confetti, setConfetti] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-purple-500 to-pink-500 p-4">
      {confetti && (
        <div className="pointer-events-none absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                y: -20,
                x: Math.random() * window.innerWidth,
                opacity: 1,
              }}
              animate={{
                y: window.innerHeight + 20,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                delay: Math.random() * 0.5,
              }}
              className="absolute text-2xl"
            >
              {['🎉', '⭐', '🎊', '✨', '🏆'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>
      )}

      <div className="w-full max-w-md">
       

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-3xl bg-white p-8 shadow-2xl"
        >
          <div className="mb-6 text-center">
            <h1 className="mb-2 text-3xl font-black text-gray-900">
              Lesson Complete!
            </h1>
            <p className="font-semibold text-gray-600">{lesson.title}</p>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="mb-6 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 p-6 text-center"
          >
            <Star className="mx-auto mb-2 size-12 text-white" />
            <div className="mb-1 text-4xl font-black text-white">
              +{earnedXp} XP
            </div>
            <div className="text-sm font-semibold text-white/90">
              Experience Points Earned
            </div>
          </motion.div>

          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-purple-50 p-4 text-center">
              <Trophy className="mx-auto mb-2 size-6 text-purple-600" />
              <div className="text-xl font-black text-gray-900">{level}</div>
              <div className="text-xs font-semibold text-gray-600">Level</div>
            </div>

            <div className="rounded-xl bg-blue-50 p-4 text-center">
              <Star className="mx-auto mb-2 size-6 text-blue-600" />
              <div className="text-xl font-black text-gray-900">{totalXp}</div>
              <div className="text-xs font-semibold text-gray-600">Total XP</div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={onContinue}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 py-4 font-black text-white transition-all hover:shadow-lg active:translate-y-1"
            >
              Continue Learning
              <ArrowRight className="size-5" />
            </button>

            <button
              onClick={onHome}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-100 py-4 font-black text-gray-700 transition-all hover:bg-gray-200 active:translate-y-1"
            >
              <Home className="size-5" />
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}