import { useState } from 'react'
import { useParams, useNavigate } from '@tanstack/react-router'
import { getLessonData, lessons } from '../data/lessons'
import { AnswerPopup } from '../components/AnswerPopup'
import { LevelClearPopup } from '../components/LevelClearPopup'
import { ExerciseRenderer } from '../components/ExerciseRenderer'
import {
  completeLesson,
  getProgress,
  loseHeart,
  resetHearts,
} from '../utils/progress'

export function QuestionPage() {
  const { id } = useParams({ from: '/lesson/$id' })
  const navigate = useNavigate()

  const currentLesson = getLessonData(Number(id))

  if (!currentLesson) {
    return <div className="p-6">Lesson not found</div>
  }
  
  const lesson = currentLesson
  const [index, setIndex] = useState(0)
  const [status, setStatus] = useState<'correct' | 'wrong' | null>(null)
  const [done, setDone] = useState(false)
  const [hearts, setHearts] = useState(getProgress().hearts)
  const [gameOver, setGameOver] = useState(false)
  const [attemptKey, setAttemptKey] = useState(0)

  if (!lesson) return <div className="p-6">Lesson not found</div>

  const exercise = lesson.exercises[index]
  if (!exercise) return <div className="p-6">Exercise not found</div>

  const progress = getProgress()
  const progressPercent = ((index + 1) / lesson.exercises.length) * 100

  function handleCorrect() {
    if (status !== null || gameOver) return
    setStatus('correct')
  }

  function handleWrong() {
    if (status !== null || gameOver) return

    const remaining = loseHeart()
    setHearts(remaining)
    setStatus('wrong')

    if (remaining === 0) {
      setGameOver(true)
    }
  }

  function tryAgain() {
    setStatus(null)
    setAttemptKey((key) => key + 1)
  }

  function next() {
    setStatus(null)
    setAttemptKey((key) => key + 1)

    if (index + 1 < lesson.exercises.length) {
      setIndex((current) => current + 1)
    } else {
      completeLesson(lesson.id, lesson.xp)
      setDone(true)
    }
  }

  function goNextLesson() {
    const nextLessonId = lesson.id + 1
    const hasNextLesson = lessons.some((item) => item.id === nextLessonId)

    setIndex(0)
    setStatus(null)
    setDone(false)
    setAttemptKey((key) => key + 1)

    if (hasNextLesson) {
      navigate({
        to: '/lesson/$id',
        params: { id: String(nextLessonId) },
      })
    } else {
      navigate({ to: '/' })
    }
  }

  return (
    <main className="min-h-screen bg-[#EEF7FF] p-6">
      <section className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-[0_6px_0_#D7E4EF]">
        <div className="mb-5 flex items-center justify-between">
          <button
            onClick={() => navigate({ to: '/' })}
            className="rounded-full px-3 py-1 text-2xl font-black text-slate-400"
          >
            ×
          </button>

          <div className="flex gap-1 text-2xl">
            {[0, 1, 2].map((heart) => (
              <span key={heart}>{heart < hearts ? '❤️' : '🤍'}</span>
            ))}
          </div>
        </div>

        <div className="mb-6 h-4 rounded-full bg-slate-100 p-1">
          <div
            className="h-2 rounded-full bg-[#58CC02]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <p className="text-sm font-black text-[#58CC02]">
          Lesson {lesson.id}: {lesson.title}
        </p>

        <p className="mt-1 text-xs font-bold text-slate-400">
          Exercise {index + 1} of {lesson.exercises.length}
        </p>

        <h1 className="mt-4 text-2xl font-black">{exercise.question}</h1>

        {exercise.grammarTip && (
          <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm font-bold text-blue-700">
            Tip: {exercise.grammarTip}
          </div>
        )}

        <ExerciseRenderer
          key={`${lesson.id}-${index}-${attemptKey}`}
          exercise={exercise}
          onCorrect={handleCorrect}
          onWrong={handleWrong}
        />
      </section>

      {status === 'correct' && (
        <AnswerPopup
          type="correct"
          message={exercise.explanation}
          onContinue={next}
        />
      )}

      {status === 'wrong' && !gameOver && (
        <AnswerPopup
          type="wrong"
          message={exercise.explanation}
          onContinue={next}
          onTryAgain={tryAgain}
        />
      )}

      {done && (
        <LevelClearPopup
          earnedXp={lesson.xp}
          lesson={lesson}
          totalXp={progress.xp}
          level={progress.level}
          onContinue={goNextLesson}
          onHome={() => navigate({ to: '/' })}
        />
      )}

      {gameOver && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
          <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl">
            <div className="text-6xl">💔</div>
            <h2 className="mt-4 text-3xl font-black">Out of Hearts</h2>

            <button
              onClick={() => {
                resetHearts()
                navigate({ to: '/' })
              }}
              className="mt-6 w-full rounded-2xl bg-red-500 py-4 font-black text-white"
            >
              Go Home
            </button>
          </div>
        </div>
      )}
    </main>
  )
}