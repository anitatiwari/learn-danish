import { useState } from 'react'
import { motion, Reorder } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import type { Exercise } from '../../data/lessons'

type Props = {
  exercise: Exercise
  onCorrect: () => void
  onWrong: () => void
}

export function ReorderExercise({ exercise, onCorrect, onWrong }: Props) {
  const [items, setItems] = useState<string[]>(exercise.words || [])
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    setSubmitted(true)

    const correctItems = Array.isArray(exercise.correct)
      ? exercise.correct
      : String(exercise.correct).split(' ')

    const isCorrect =
      JSON.stringify(items.map((item) => item.toLowerCase())) ===
      JSON.stringify(correctItems.map((item) => item.toLowerCase()))

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
        Drag the words to form the correct sentence
      </p>

      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="mb-6 space-y-3"
      >
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            <motion.div
              className="touch-none select-none rounded-xl border-2 border-blue-300 bg-blue-100 p-4 shadow-[0_4px_0_#93C5FD]"
              whileHover={{ scale: 1.02 }}
              whileDrag={{ scale: 1.05, zIndex: 10 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-1">
                  <div className="h-1 w-1 rounded-full bg-blue-400" />
                  <div className="h-1 w-1 rounded-full bg-blue-400" />
                  <div className="h-1 w-1 rounded-full bg-blue-400" />
                </div>

                <span className="font-black text-gray-900">{item}</span>
              </div>
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <button
        onClick={handleSubmit}
        disabled={submitted}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 py-4 font-black text-white transition-all hover:shadow-lg disabled:opacity-50"
      >
        <CheckCircle className="size-5" />
        Check Answer
      </button>
    </div>
  )
}