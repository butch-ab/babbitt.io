import { useState } from 'react'
import flashcardsData from './data/flashcards.json'
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  
  const currentCard = flashcardsData[currentIndex]
  
  const handleNext = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev + 1) % flashcardsData.length)
  }
  
  const handlePrevious = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev - 1 + flashcardsData.length) % flashcardsData.length)
  }
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="app">
      <h1>Flashcards</h1>
      <div className="card-counter">
        Card {currentIndex + 1} of {flashcardsData.length}
      </div>
      
      <div className="card" onClick={handleFlip}>
        <div className={`card-content ${isFlipped ? 'flipped' : ''}`}>
          {isFlipped ? currentCard.answer : currentCard.question}
        </div>
        <div className="flip-hint">
          {isFlipped ? 'Click to see question' : 'Click to see answer'}
        </div>
      </div>
      
      <div className="controls">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleFlip}>Flip Card</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default App
