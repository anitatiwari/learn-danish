import { useState } from 'react'

type Props = {
  words: string[]
  correctAnswer: string
  onCorrect: () => void
  onWrong: () => void
}

export function SentenceBuilder({
  words,
  correctAnswer,
  onCorrect,
  onWrong,
}: Props) {
  const [selected, setSelected] = useState<string[]>([])
  const [available, setAvailable] = useState(words)

  function selectWord(word: string) {
    setSelected([...selected, word])
    setAvailable(available.filter((w) => w !== word))
  }

  function removeWord(index: number) {
    const word = selected[index]
    setSelected(selected.filter((_, i) => i !== index))
    setAvailable([...available, word])
  }

  function check() {
    const sentence = selected.join(' ')
    if (sentence.toLowerCase() === correctAnswer.toLowerCase()) {
      onCorrect()
    } else {
      onWrong()
    }
  }

  function reset() {
    setSelected([])
    setAvailable(words)
  }

  return (
    <div className="mt-6">
      {/* Selected sentence */}
      <div className="min-h-[60px] rounded-xl border p-4 bg-gray-50">
        {selected.length === 0 ? (
          <p className="text-gray-400">Build your sentence</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {selected.map((word, i) => (
              <button
                key={i}
                onClick={() => removeWord(i)}
                className="bg-white px-3 py-2 rounded shadow"
              >
                {word}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Word bank */}
      <div className="mt-4 flex flex-wrap gap-2">
        {available.map((word) => (
          <button
            key={word}
            onClick={() => selectWord(word)}
            className="bg-white px-3 py-2 rounded shadow"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={check}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Check
        </button>

        <button
          onClick={reset}
          className="bg-gray-200 px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  )
}