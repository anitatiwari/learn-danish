import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'

type AnswerPopupProps = {
  type: 'correct' | 'wrong'
  message: string
  onContinue: () => void
  onTryAgain?: () => void
}

export function AnswerPopup({
  type,
  message,
  onContinue,
  onTryAgain,
}: AnswerPopupProps) {
  const isCorrect = type === 'correct'

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#EEF7FF]/80 px-4">
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 0.45 }}
        className={`w-full max-w-2xl rounded-3xl border-2 p-8 text-center shadow-2xl ${
          isCorrect
            ? 'border-green-300 bg-green-100'
            : 'border-red-300 bg-red-100'
        }`}
      >
        <motion.div
          initial={{ rotate: -15, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ delay: 0.1, type: 'spring' }}
          className="mx-auto -mt-16 mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400 text-5xl shadow-lg"
        >
          {isCorrect ? '🤩' : '😢'}
        </motion.div>

        <div className="mb-4 flex items-center justify-center gap-2">
          {isCorrect ? (
            <CheckCircle className="size-7 text-green-600" />
          ) : (
            <XCircle className="size-7 text-red-600" />
          )}

          <h2
            className={`text-2xl font-black ${
              isCorrect ? 'text-green-700' : 'text-red-700'
            }`}
          >
            {isCorrect ? 'Excellent!' : 'Try again'}
          </h2>
        </div>

        <p className="mx-auto max-w-xl font-semibold text-slate-700">
          {message}
        </p>

        {isCorrect ? (
          <button
            onClick={onContinue}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 py-4 font-black text-white shadow-[0_5px_0_#15803D] active:translate-y-[5px] active:shadow-none"
          >
            Continue →
          </button>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3">
            <button
              onClick={onTryAgain}
              className="rounded-2xl bg-white py-4 font-black text-red-600 shadow-[0_5px_0_#E5E7EB] active:translate-y-[5px] active:shadow-none"
            >
              Try Again
            </button>

            <button
              onClick={onContinue}
              className="rounded-2xl bg-gradient-to-r from-red-500 to-rose-500 py-4 font-black text-white shadow-[0_5px_0_#991B1B] active:translate-y-[5px] active:shadow-none"
            >
              Continue →
            </button>
          </div>
        )}
      </motion.div>
    </div>
  )
}