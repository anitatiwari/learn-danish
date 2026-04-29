import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Exercise } from '../../data/lessons'
import { useEffect } from 'react'

type Props = {
  exercise: Exercise
  onCorrect: () => void
  onWrong: () => void
}

export function TapExercise({ exercise, onCorrect, onWrong }: Props) {
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    setSelected(null)
  }, [exercise])
  function handleSelect(option: string) {
    if (selected) return

    setSelected(option)

    const isCorrect = option === exercise.correct

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
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {exercise.options?.map((option, index) => {
          const isSelected = selected === option
          const isCorrect = option === exercise.correct

          return (
            <motion.button
              key={`${option}-${index}`}
              onClick={() => handleSelect(option)}
              disabled={selected !== null}
              whileHover={selected === null ? { scale: 1.03 } : {}}
              whileTap={selected === null ? { scale: 0.95 } : {}}
              className={`rounded-2xl border-2 p-4 text-left font-black transition-all shadow-[0_5px_0_#D7E4EF] active:translate-y-[5px] active:shadow-none ${
                isSelected
                  ? isCorrect
                    ? 'border-green-500 bg-green-100 text-green-900 shadow-none'
                    : 'border-red-500 bg-red-100 text-red-900 shadow-none'
                  : 'border-slate-200 bg-white text-slate-900 hover:border-[#1CB0F6] hover:bg-blue-50'
              } disabled:cursor-not-allowed`}
            >
              {option}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}