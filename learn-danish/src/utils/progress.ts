export type Progress = {
  xp: number
  level: number
  hearts: number
  unlockedLessons: number
  completedLessons: number[]
}

const defaultProgress: Progress = {
  xp: 0,
  level: 1,
  hearts: 3,
  unlockedLessons: 1,
  completedLessons: [],
}

export function getProgress(): Progress {
  const saved = localStorage.getItem('progress')

  if (!saved) {
    return defaultProgress
  }

  const parsed = JSON.parse(saved)

  return {
    xp: parsed.xp ?? 0,
    level: parsed.level ?? 1,
    hearts: parsed.hearts ?? 3,
    unlockedLessons: parsed.unlockedLessons ?? 1,
    completedLessons: parsed.completedLessons ?? [],
  }
}

export function saveProgress(progress: Progress) {
  localStorage.setItem('progress', JSON.stringify(progress))
}

export function completeLesson(lessonNumber: number, earnedXp: number) {
  const progress = getProgress()
  const alreadyCompleted = progress.completedLessons.includes(lessonNumber)

  if (!alreadyCompleted) {
    progress.xp += earnedXp
    progress.completedLessons.push(lessonNumber)
    progress.unlockedLessons = Math.max(
      progress.unlockedLessons,
      lessonNumber + 1,
    )
    progress.level = Math.floor(progress.xp / 100) + 1
  }

  progress.hearts = 3

  saveProgress(progress)
  return progress
}

export function loseHeart() {
  const progress = getProgress()

  progress.hearts = Math.max(0, progress.hearts - 1)

  saveProgress(progress)

  return progress.hearts
}

export function resetHearts() {
  const progress = getProgress()

  progress.hearts = 3

  saveProgress(progress)

  return progress.hearts
}