import type { Exercise } from '../data/lessons'
import { TapExercise } from './exercises/TapExercise'
import { FixExercise } from './exercises/FixExercise'
import { ReorderExercise } from './exercises/ReorderExercise'

type Props = {
  exercise: Exercise
  onCorrect: () => void
  onWrong: () => void
}

export function ExerciseRenderer({ exercise, onCorrect, onWrong }: Props) {
  if (exercise.type === 'tap') {
    return (
      <TapExercise
        exercise={exercise}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    )
  }

  if (exercise.type === 'fix') {
    return (
      <FixExercise
        exercise={exercise}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    )
  }

  if (exercise.type === 'reorder') {
    return (
      <ReorderExercise
        exercise={exercise}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    )
  }

  if (exercise.type === 'input') {
    return (
      <InputExercise
        exercise={exercise}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    )
  }

  return null
}