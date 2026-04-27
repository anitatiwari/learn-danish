import { useState } from 'react'
import { useParams, useNavigate } from '@tanstack/react-router'
import { lessons } from '../data/lessons'
import { AnswerPopup } from '../components/AnswerPopup'
import { LevelClearPopup } from '../components/LevelClearPopup'
import { completeLesson } from '../utils/progress'

export function QuestionPage() {
  const { id } = useParams({ from: '/lesson/$id' })
  const lesson = lessons[Number(id)]

  const navigate = useNavigate()

  const [index, setIndex] = useState(0)
  const [status, setStatus] = useState<'correct' | 'wrong' | null>(null)
  const [done, setDone] = useState(false)

  if (!lesson) return <div>Lesson not found</div>

  const q = lesson.questions[index]

  function check(answer: string) {
    if (answer === q.answer) {
      setStatus('correct')
    } else {
      setStatus('wrong')
    }
  }

  function next() {
    setStatus(null)

    if (index + 1 < lesson.questions.length) {
      setIndex(index + 1)
    } else {
      completeLesson(lesson.id, lesson.xp)
      setDone(true)
    }
  }

  return (
    <main className="min-h-screen bg-[#EEF7FF] p-6">
      <section className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow">
        <p className="text-sm font-bold text-green-600">
          Lesson {lesson.id} · Question {index + 1}
        </p>

        <h1 className="mt-4 text-2xl font-black">{q.question}</h1>

        <div className="mt-6 grid gap-4">
          {q.options.map((opt) => (
            <button
              key={opt}
              onClick={() => check(opt)}
              className="rounded-xl border p-4 text-left font-bold hover:bg-green-50"
            >
              {opt}
            </button>
          ))}
        </div>
      </section>

      {status === 'correct' && (
        <AnswerPopup
          type="correct"
          message="Correct 🎉"
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

      {done && (
        <LevelClearPopup
        earnedXp={lesson.xp}
        onContinue={() => {
          console.log('Continue clicked')
          const nextLessonId = lesson.id + 1
    
          if (lessons[nextLessonId]) {
            navigate({ to: '/lesson/$id', params: { id: String(nextLessonId) } })
          } else {
            navigate({ to: '/' })
          }
        }}
        />
      )}
    </main>
  )
}