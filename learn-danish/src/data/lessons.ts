export interface Exercise {
  type: 'tap' | 'reorder' | 'fix'
  question: string
  grammarTip?: string
  options?: string[]
  correct?: string | string[]
  words?: string[]
  sentence?: string[]
  mistakeIndex?: number
  correctWord?: string
  explanation: string
}

export interface Lesson {
  id: number
  title: string
  xp: number
  exercises: Exercise[]
}

export const lessons: Lesson[] = [
  {
    id: 5,
    title: 'Hverdag & Tid',
    xp: 50,
    exercises: [
      {
        type: 'tap',
        question: 'Jeg ______ kl. 7 hver dag',
        options: ['står op', 'stå op', 'står oppe'],
        correct: 'står op',
        explanation: 'Korrekt! "står op" er nutid. (present tense)',
      },
      {
        type: 'reorder',
        question: 'Byg sætningen korrekt',
        words: ['jeg', 'går', 'på arbejde', 'hver dag'],
        correct: ['jeg', 'går', 'på arbejde', 'hver dag'],
        explanation: 'Rigtigt! Jeg går på arbejde hver dag.',
      },
      {
        type: 'tap',
        question: 'Vælg datid',
        options: [
          'Jeg gik i skole i går',
          'Jeg går i skole i går',
          'Jeg gåede i skole i går',
        ],
        correct: 'Jeg gik i skole i går',
        explanation: 'Korrekt! "gik" er datid af "gå".',
      },
      {
        type: 'fix',
        question: 'Find fejlen: Jeg går i går i skole',
        sentence: ['Jeg', 'går', 'i går', 'i skole'],
        mistakeIndex: 1,
        correctWord: 'gik',
        explanation: 'Datid skal bruges: Jeg gik i skole i går.',
      },
    ],
  },

  {
    id: 6,
    title: 'Mad & Restaurant',
    xp: 50,
    exercises: [
      {
        type: 'tap',
        question: 'Jeg ______ pizza i går',
        options: ['spiste', 'spiser', 'spisede'],
        correct: 'spiste',
        explanation: 'Korrekt! Datid af "spise" er "spiste".',
      },
      {
        type: 'tap',
        question: 'Maden var ______',
        options: ['kold', 'kolde', 'koldt'],
        correct: 'kold',
        explanation: 'Korrekt! "maden" er fælleskøn.',
      },
      {
        type: 'tap',
        question: 'Vi ______ på restaurant i går',
        options: ['var', 'er', 'været'],
        correct: 'var',
        explanation: 'Korrekt! Datid af "er" er "var".',
      },
      {
        type: 'fix',
        question: 'Find fejlen: Jeg var på restaurant i går og maden dårlig',
        sentence: ['Jeg', 'var', 'på', 'restaurant', 'i går', 'og', 'maden', 'dårlig'],
        mistakeIndex: 7,
        correctWord: 'var dårlig',
        explanation: 'Der mangler "var": maden var dårlig.',
      },
    ],
  },

  {
    id: 7,
    title: 'Transport & By',
    xp: 55,
    exercises: [
      {
        type: 'tap',
        question: 'Jeg tager ______ arbejde',
        options: ['på', 'i', 'til'],
        correct: 'på',
        explanation: 'Korrekt! Man siger "på arbejde".',
      },
      {
        type: 'tap',
        question: 'Jeg bor ______ Danmark',
        options: ['i', 'på', 'til'],
        correct: 'i',
        explanation: 'Korrekt! Man siger "i Danmark".',
      },
      {
        type: 'reorder',
        question: 'Byg sætningen korrekt',
        words: ['jeg', 'tager', 'bussen', 'hver dag'],
        correct: ['jeg', 'tager', 'bussen', 'hver dag'],
        explanation: 'Rigtigt! Jeg tager bussen hver dag.',
      },
      {
        type: 'tap',
        question: 'Vælg korrekt spørgsmål',
        options: [
          'Tager du bussen hver dag?',
          'Du tager bussen hver dag?',
          'Tager bussen du hver dag?'
        ],
        correct: 'Tager du bussen hver dag?',
        explanation: 'Korrekt! Verbet kommer først i spørgsmål.',
      },
    ],
  },

  {
    id: 8,
    title: 'Modalverber & Planer',
    xp: 60,
    exercises: [
      {
        type: 'tap',
        question: 'Jeg ______ arbejde i morgen',
        options: ['skal', 'skal at', 'skal til'],
        correct: 'skal',
        explanation: 'Korrekt! Modalverber bruges uden "at".',
      },
      {
        type: 'tap',
        question: 'Jeg ______ gå i skole',
        options: ['kan', 'kan at', 'kan til'],
        correct: 'kan',
        explanation: 'Korrekt! "kan" bruges uden "at".',
      },
      {
        type: 'tap',
        question: 'Jeg arbejder ikke, ______ jeg er syg',
        options: ['fordi', 'derfor', 'men'],
        correct: 'fordi',
        explanation: 'Korrekt! "fordi" viser årsag.',
      },
      {
        type: 'tap',
        question: 'Jeg er træt, ______ går jeg i seng',
        options: ['derfor', 'fordi', 'men'],
        correct: 'derfor',
        explanation: 'Korrekt! "derfor" viser resultat.',
      },
    ],
  },

  {
    id: 9,
    title: 'Sætninger & Struktur',
    xp: 65,
    exercises: [
      {
        type: 'tap',
        question: 'Start med “I dag”',
        options: [
          'I dag arbejder jeg ikke',
          'I dag jeg arbejder ikke',
          'I dag ikke arbejder jeg'
        ],
        correct: 'I dag arbejder jeg ikke',
        explanation: 'Korrekt! Verbet kommer efter "I dag".',
      },
      {
        type: 'fix',
        question: 'Find fejlen: I dag jeg går ikke i skole',
        sentence: ['I dag', 'jeg', 'går', 'ikke', 'i', 'skole'],
        mistakeIndex: 1,
        correctWord: 'går',
        explanation: 'Verbet skal før subjekt: I dag går jeg ikke i skole.',
      },
      {
        type: 'tap',
        question: 'Jeg tror, ______ han kommer',
        options: ['at', 'fordi', 'så'],
        correct: 'at',
        explanation: 'Korrekt! Man siger: Jeg tror, at han kommer.',
      },
      {
        type: 'tap',
        question: 'Hvilken er rigtig?',
        options: [
          'Jeg tror, at han ikke kommer',
          'Jeg tror at han kommer ikke',
          'Jeg tror ikke at han kommer'
        ],
        correct: 'Jeg tror, at han ikke kommer',
        explanation: 'Korrekt! "ikke" før verbet i ledsætning.',
      },
    ],
  },
]

export function getLessonData(lessonId: number): Lesson | null {
  return lessons.find((lesson) => lesson.id === lessonId) || null
}