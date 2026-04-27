import { useState } from 'react'
import { AnswerPopup } from '../components/AnswerPopup'
import { LevelClearPopup } from '../components/LevelClearPopup'

type Question =
  | {
      type: 'multiple'
      question: string
      options: string[]
      answer: string
    }
  | {
      type: 'reorder'
      question: string
      words: string[]
      answer: string
    }

const questions: Question[] = [
  {
    type: 'multiple',
    question: 'What is the correct word order?',
    options: [
      'Jeg spiser æble',
      'Spiser jeg æble',
      'Æble jeg spiser',
    ],
    answer: 'Jeg spiser æble',
  },
  {
    type: 'reorder',
    question: 'Arrange the sentence:',
    words: ['spiser', 'jeg', 'brød'],
    answer: 'jeg spiser brød',
  },
]

export function LessonTwoPage() {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [status, setStatus] = useState<'correct' | 'wrong' | null>(null)
  const [done, setDone] = useState(false)

  const q = questions[index]

  function check(answer: string) {
    if (answer.toLowerCase() === q.answer.toLowerCase()) {
      setStatus('correct')
    } else {
      setStatus('wrong')
    }
  }

  function next() {
    setStatus(null)
    setSelected(null)

    if (index + 1 < questions.length) {
      setIndex(index + 1)
    } else {
      setDone(true)
    }
  }

  return (
    <main className="min-h-screen bg-[#EEF7FF] p-6">
      <section className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow">
        <p className="text-sm font-bold text-blue-500">
          Question {index + 1} of {questions.length}
        </p>

        <h1 className="mt-4 text-2xl font-black">{q.question}</h1>

        {/* MULTIPLE CHOICE */}
        {q.type === 'multiple' && (
          <div className="mt-6 grid gap-4">
            {q.options.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setSelected(opt)
                  check(opt)
                }}
                className="rounded-xl border p-4 text-left font-bold hover:bg-blue-50"
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {/* REORDER */}
        {q.type === 'reorder' && (
          <div className="mt-6">
            <div className="flex flex-wrap gap-3">
              {q.words.map((word) => (
                <button
                  key={word}
                  onClick={() => {
                    const newSentence = (selected || '') + ' ' + word
                    setSelected(newSentence.trim())
                  }}
                  className="rounded-xl bg-blue-100 px-4 py-2 font-bold"
                >
                  {word}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-xl border p-4">
              {selected || 'Tap words to build sentence'}
            </div>

            <button
              onClick={() => check(selected || '')}
              className="mt-4 rounded-xl bg-green-500 px-6 py-3 text-white"
            >
              Check
            </button>
          </div>
        )}
      </section>

      {status === 'correct' && (
        <AnswerPopup
          type="correct"
          message="Great! Correct sentence 🎉"
          onContinue={next}
        />
      )}

      {status === 'wrong' && (
        <AnswerPopup
          type="wrong"
          message={`Correct answer: ${q.answer}`}
          onContinue={() => setStatus(null)}
        />
      )}

      {done && <LevelClearPopup />}
    </main>
  )
}