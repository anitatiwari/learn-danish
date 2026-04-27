import { motion } from 'framer-motion'
import { PressableButton } from './PressableButton'

type AnswerPopupProps = {
  type: 'correct' | 'wrong'
  message: string
  onContinue: () => void
}

export function AnswerPopup({ type, message, onContinue }: AnswerPopupProps) {
  const isCorrect = type === 'correct'

  return (
    <motion.div
      initial={{ y: 120 }}
      animate={{ y: 0 }}
      exit={{ y: 120 }}
      className={`fixed bottom-0 left-0 right-0 p-6 ${
        isCorrect ? 'bg-green-100' : 'bg-red-100'
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
        <div>
          <h2
            className={`text-2xl font-black ${
              isCorrect ? 'text-green-700' : 'text-red-700'
            }`}
          >
            {isCorrect ? 'Correct! 🎉' : 'Try again 💡'}
          </h2>
          <p className="font-semibold text-slate-700">{message}</p>
        </div>

        <PressableButton
          variant={isCorrect ? 'green' : 'red'}
          onClick={onContinue}
        >
          Continue
        </PressableButton>
      </div>
    </motion.div>
  )
}