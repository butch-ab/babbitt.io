import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [flashcards, setFlashcards] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load flashcards from JSON file
    fetch('/flashcards.json')
      .then(response => response.json())
      .then(data => {
        setFlashcards(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error loading flashcards:', error)
        setIsLoading(false)
      })
  }, [])

  const currentCard = flashcards[currentIndex]
  const progress = flashcards.length > 0 ? ((currentIndex + 1) / flashcards.length) * 100 : 0

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : flashcards.length - 1))
    setIsFlipped(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < flashcards.length - 1 ? prev + 1 : 0))
    setIsFlipped(false)
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  if (isLoading) {
    return (
      <div className="app">
        <div className="loading">Loading flashcards...</div>
      </div>
    )
  }

  if (flashcards.length === 0) {
    return (
      <div className="app">
        <div className="error">No flashcards found. Please check flashcards.json</div>
      </div>
    )
  }

  return (
    <div className="app">
      <header>
        <h1>📚 Flashcards</h1>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="card-counter">
          {currentIndex + 1} / {flashcards.length}
        </div>
      </header>

      <div className="flashcard-container">
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <div className="card-label">Question</div>
              <div className="card-content">{currentCard?.front}</div>
            </div>
            <div className="flashcard-back">
              <div className="card-label">Answer</div>
              <div className="card-content">{currentCard?.back}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="controls">
        <button onClick={handlePrev} disabled={isLoading}>
          ← Previous
        </button>
        <button onClick={handleFlip} className="flip-btn">
          {isFlipped ? 'Show Question' : 'Show Answer'}
        </button>
        <button onClick={handleNext} disabled={isLoading}>
          Next →
        </button>
      </div>

      <footer>
        <p>Click the card to flip • Use arrows or buttons to navigate</p>
      </footer>
    </div>
  )
}

export default App
