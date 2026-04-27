import { createFileRoute } from '@tanstack/react-router'
import { QuestionPage } from '../pages/QuestionPage'

export const Route = createFileRoute('/lesson/$id')({
  component: QuestionPage,
})