import { createFileRoute } from '@tanstack/react-router'
import { LessonTwoPage } from '../pages/LessonTwoPage'

export const Route = createFileRoute('/lesson2')({
  component: LessonTwoPage,
})