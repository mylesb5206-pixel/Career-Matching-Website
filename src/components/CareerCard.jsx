import './CareerCard.css'

function CareerCard({ career }) {
  const getMatchColor = (percentage) => {
    if (percentage >= 80) return 'excellent'
    if (percentage >= 60) return 'good'
    if (percentage >= 40) return 'fair'
    return 'low'
  }

  return (
    <div className="career-card">
      <div className={`match-badge ${getMatchColor(career.matchPercentage)}`}>
        {career.matchPercentage}% Match
      </div>
      
      <h3 className="career-title">{career.title}</h3>
      <p className="career-description">{career.description}</p>

      <div className="career-details">
        <div className="detail-item">
          <span className="detail-label">💵 Salary Range:</span>
          <span className="detail-value">{career.salaryRange}</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">📈 Job Growth:</span>
          <span className="detail-value">{career.growth}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">🎓 Education:</span>
          <span className="detail-value">
            {career.education.charAt(0).toUpperCase() + career.education.slice(1)}'s Degree
          </span>
        </div>
      </div>

      <div className="matched-section">
        <h4>✅ Your Matched Interests:</h4>
        <div className="tag-list">
          {career.matchedInterests.map(interest => (
            <span key={interest} className="tag tag-interest">
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div className="matched-section">
        <h4>💪 Your Matched Skills:</h4>
        <div className="tag-list">
          {career.matchedSkills.map(skill => (
            <span key={skill} className="tag tag-skill">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="tasks-section">
        <h4>📋 Typical Tasks:</h4>
        <ul className="tasks-list">
          {career.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      <div className="job-listings-section">
        <h4>💼 Available Positions:</h4>
        <div className="job-item">
          <div className="job-header">
            <div>
              <div className="job-title">{career.title} - Entry Level</div>
              <div className="job-company">Tech Solutions Inc.</div>
              <div className="job-location">📍 Remote / Hybrid</div>
            </div>
            <span className="job-badge">New</span>
          </div>
        </div>
        <div className="job-item">
          <div className="job-header">
            <div>
              <div className="job-title">Senior {career.title}</div>
              <div className="job-company">Innovation Corp</div>
              <div className="job-location">📍 New York, NY</div>
            </div>
            <span className="job-badge">Featured</span>
          </div>
        </div>
        <div className="job-item">
          <div className="job-header">
            <div>
              <div className="job-title">{career.title} Specialist</div>
              <div className="job-company">Future Enterprises</div>
              <div className="job-location">📍 San Francisco, CA</div>
            </div>
          </div>
        </div>
        <button className="view-more-jobs">
          View All {career.title} Jobs →
        </button>
      </div>
    </div>
  )
}

export default CareerCard
