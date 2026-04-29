import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import type { Exercise } from '../../data/lessons'

type Props = {
  exercise: Exercise
  onCorrect: () => void
  onWrong: () => void
}

export function FixExercise({ exercise, onCorrect, onWrong }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (selectedIndex === null) return

    setSubmitted(true)

    const isCorrect = selectedIndex === exercise.mistakeIndex

    setTimeout(() => {
      if (isCorrect) {
        onCorrect()
      } else {
        onWrong()
      }
    }, 500)
  }

  return (
    <div className="mt-6 rounded-2xl bg-white">
      <p className="mb-6 text-center text-sm font-semibold text-gray-500">
        Tap the word that needs to be fixed
      </p>

      {/* Sentence */}
      <div className="mb-6 flex flex-wrap justify-center gap-2 rounded-xl bg-gray-50 p-4">
        {exercise.sentence?.map((word, index) => {
          const isSelected = selectedIndex === index

          return (
            <motion.button
              key={`${word}-${index}`}
              onClick={() => setSelectedIndex(index)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-xl px-4 py-2 font-black transition-all border-2 ${
                isSelected
                  ? 'bg-[#1CB0F6] text-white border-[#1CB0F6]'
                  : 'bg-white text-gray-900 border-gray-300 hover:border-[#1CB0F6]'
              }`}
            >
              {word}
            </motion.button>
          )
        })}
      </div>

      {/* Hint preview */}
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 rounded-xl border-2 border-blue-200 bg-blue-50 p-4 text-center"
        >
          <p className="text-sm font-semibold text-blue-900">
            Replace{' '}
            <span className="font-black">
              "{exercise.sentence?.[selectedIndex]}"
            </span>{' '}
            with{' '}
            <span className="font-black">
              "{exercise.correctWord || '—'}"
            </span>
            ?
          </p>
        </motion.div>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={selectedIndex === null || submitted}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 py-4 font-black text-white transition-all hover:shadow-lg disabled:opacity-50"
      >
        <CheckCircle className="size-5" />
        Check Answer
      </button>
    </div>
  )
}