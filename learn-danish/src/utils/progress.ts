export type Progress = {
    xp: number
    level: number
    unlockedLessons: number
    completedLessons: number[]
  }
  
  const defaultProgress: Progress = {
    xp: 0,
    level: 1,
    unlockedLessons: 1,
    completedLessons: [],
  }
  
  export function getProgress(): Progress {
    const saved = localStorage.getItem('progress')
    return saved ? JSON.parse(saved) : defaultProgress
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
      progress.unlockedLessons = Math.max(progress.unlockedLessons, lessonNumber + 1)
      progress.level = Math.floor(progress.xp / 100) + 1
    }
  
    saveProgress(progress)
    return progress
  }