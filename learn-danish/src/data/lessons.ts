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
    id: 1,
    title: 'Nutid & Ordstilling',
    xp: 40,
    exercises: [
      {
        type: 'fix',
        question: 'Find fejlen: Jeg ikke arbejder i dag',
        sentence: ['Jeg', 'ikke', 'arbejder', 'i', 'dag'],
        mistakeIndex: 1,
        correctWord: 'arbejder',
        explanation: '"ikke" står forkert. Korrekt: Jeg arbejder ikke i dag.',
      },
      {
        type: 'reorder',
        question: 'Byg sætningen korrekt',
        words: ['jeg', 'arbejder', 'ikke', 'i dag'],
        correct: ['jeg', 'arbejder', 'ikke', 'i dag'],
        explanation: 'Rigtigt! Verbet kommer før "ikke": Jeg arbejder ikke i dag.',
      },
      {
        type: 'tap',
        question: 'Vælg korrekt spørgsmål: Du arbejder i dag',
        options: ['Arbejder du i dag?', 'Du arbejder i dag?', 'Arbejder i dag du?'],
        correct: 'Arbejder du i dag?',
        explanation: 'Korrekt! I spørgsmål kommer verbet først: Arbejder du i dag?',
      },
      {
        type: 'tap',
        question: 'Hvilken sætning er rigtig?',
        options: ['Jeg arbejder ikke i dag', 'Jeg ikke arbejder i dag', 'Jeg arbejder i dag ikke'],
        correct: 'Jeg arbejder ikke i dag',
        explanation: 'Korrekt! "ikke" kommer efter verbet i hovedsætninger.',
      },
      {
        type: 'fix',
        question: 'Find fejlen: Jeg bor på Danmark',
        sentence: ['Jeg', 'bor', 'på', 'Danmark'],
        mistakeIndex: 2,
        correctWord: 'i',
        explanation: 'Man siger "i Danmark", ikke "på Danmark".',
      },
    ],
  },
  {
    id: 2,
    title: 'Modalverber & Negation',
    xp: 50,
    exercises: [
      {
        type: 'tap',
        question: 'Jeg ______ arbejde i morgen',
        options: ['kan', 'kan at', 'kan til'],
        correct: 'kan',
        explanation: 'Korrekt! Modalverber bruges uden "at": Jeg kan arbejde.',
      },
      {
        type: 'fix',
        question: 'Find fejlen: Jeg kan at arbejde',
        sentence: ['Jeg', 'kan', 'at', 'arbejde'],
        mistakeIndex: 2,
        correctWord: '',
        explanation: '"at" skal fjernes. Korrekt: Jeg kan arbejde.',
      },
      {
        type: 'tap',
        question: 'Kombinér korrekt: Jeg er syg. Jeg arbejder ikke',
        options: [
          'Jeg arbejder ikke, fordi jeg er syg',
          'Jeg arbejder ikke fordi er jeg syg',
          'Jeg fordi er syg arbejder ikke',
        ],
        correct: 'Jeg arbejder ikke, fordi jeg er syg',
        explanation: 'Korrekt! "fordi" forklarer årsagen.',
      },
      {
        type: 'tap',
        question: 'Vælg datid: Jeg arbejder i dag',
        options: ['Jeg arbejdede i dag', 'Jeg arbejderede i dag', 'Jeg arbejder i går'],
        correct: 'Jeg arbejdede i dag',
        explanation: 'Korrekt! Datid af "arbejder" er "arbejdede".',
      },
      {
        type: 'reorder',
        question: 'Byg sætningen korrekt',
        words: ['jeg', 'var', 'hjemme', 'i går'],
        correct: ['jeg', 'var', 'hjemme', 'i går'],
        explanation: 'Rigtigt! Jeg var hjemme i går.',
      },
    ],
  },
  {
    id: 3,
    title: 'Datid & Struktur',
    xp: 60,
    exercises: [
      {
        type: 'tap',
        question: 'Start med “I dag”',
        options: ['I dag arbejder jeg ikke', 'I dag jeg arbejder ikke', 'I dag ikke arbejder jeg'],
        correct: 'I dag arbejder jeg ikke',
        explanation: 'Korrekt! Efter "I dag" kommer verbet: I dag arbejder jeg ikke.',
      },
      {
        type: 'fix',
        question: 'Find fejlen: I dag jeg arbejder ikke',
        sentence: ['I dag', 'jeg', 'arbejder', 'ikke'],
        mistakeIndex: 1,
        correctWord: 'arbejder',
        explanation: 'Efter "I dag" skal verbet komme før subjektet.',
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
          'Jeg tror at han kommer ikke',
          'Jeg tror, at han ikke kommer',
          'Jeg tror ikke at han kommer',
        ],
        correct: 'Jeg tror, at han ikke kommer',
        explanation: 'Korrekt! I ledsætninger kommer "ikke" før verbet.',
      },
      {
        type: 'tap',
        question: 'Kombinér korrekt: Jeg er træt. Jeg arbejder',
        options: [
          'Jeg arbejder, selvom jeg er træt',
          'Jeg arbejder selvom er jeg træt',
          'Selvom jeg er træt jeg arbejder',
        ],
        correct: 'Jeg arbejder, selvom jeg er træt',
        explanation: 'Korrekt! "selvom" bruges til kontrast.',
      },
    ],
  },
  {
    id: 4,
    title: 'Avanceret Grammatik',
    xp: 70,
    exercises: [
      {
        type: 'tap',
        question: 'Jeg arbejder meget, ______ er jeg træt',
        options: ['derfor', 'fordi', 'men'],
        correct: 'derfor',
        explanation: 'Korrekt! "derfor" viser konsekvens.',
      },
      {
        type: 'fix',
        question: 'Find fejlen: Jeg arbejder meget derfor jeg er træt',
        sentence: ['Jeg', 'arbejder', 'meget', 'derfor', 'jeg', 'er', 'træt'],
        mistakeIndex: 3,
        correctWord: ', derfor',
        explanation: 'Der mangler korrekt struktur: Jeg arbejder meget, derfor er jeg træt.',
      },
      {
        type: 'tap',
        question: '“Jeg er træt, fordi jeg arbejder meget” betyder:',
        options: ['Årsag', 'Konsekvens', 'Spørgsmål'],
        correct: 'Årsag',
        explanation: 'Korrekt! "fordi" forklarer årsagen.',
      },
      {
        type: 'tap',
        question: 'Hvilken er rigtig?',
        options: [
          'Selvom jeg er træt, arbejder jeg',
          'Selvom jeg er træt arbejder jeg ikke',
          'Selvom jeg er træt jeg arbejder',
        ],
        correct: 'Selvom jeg er træt, arbejder jeg',
        explanation: 'Korrekt! Efter ledsætningen kommer verbet før subjektet.',
      },
      {
        type: 'tap',
        question: 'Kombinér korrekt: Jeg har travlt. Jeg kommer senere',
        options: [
          'Jeg kommer senere, fordi jeg har travlt',
          'Jeg kommer senere derfor jeg har travlt',
          'Jeg derfor kommer senere har travlt',
        ],
        correct: 'Jeg kommer senere, fordi jeg har travlt',
        explanation: 'Korrekt! "fordi" forklarer årsagen.',
      },
    ],
  },
]

export function getLessonData(lessonId: number): Lesson | null {
  return lessons.find((lesson) => lesson.id === lessonId) || null
}