import CareerCard from './CareerCard'
import './CareerResults.css'

function CareerResults({ matches, onReset }) {
  return (
    <div className="career-results">
      <div className="results-header">
        <h2>🎉 Your Career Matches</h2>
        <p>Found {matches.length} career{matches.length !== 1 ? 's' : ''} matching your profile</p>
        <button onClick={onReset} className="reset-btn">
          ← Start New Search
        </button>
      </div>

      {matches.length === 0 ? (
        <div className="no-results">
          <p>No strong matches found. Try adjusting your preferences!</p>
          <button onClick={onReset} className="reset-btn">
            Try Again
          </button>
        </div>
      ) : (
        <div className="results-grid">
          {matches.map(career => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CareerResults
