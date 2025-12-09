import { useState } from 'react'
import './CareerForm.css'

function CareerForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    interests: [],
    skills: [],
    education: 'bachelor',
    workStyle: 'team',
    salary: 'any'
  })

  const interestOptions = [
    { value: 'technology', label: 'Technology & Computers' },
    { value: 'creative', label: 'Creative & Artistic' },
    { value: 'people', label: 'Working with People' },
    { value: 'analytical', label: 'Analytical & Research' },
    { value: 'helping', label: 'Helping Others' },
    { value: 'business', label: 'Business & Finance' },
    { value: 'problem-solving', label: 'Problem Solving' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'outdoors', label: 'Outdoors & Nature' },
    { value: 'competitive', label: 'Competitive' }
  ]

  const skillOptions = [
    { value: 'communication', label: 'Communication' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'technical', label: 'Technical Skills' },
    { value: 'creative', label: 'Creativity' },
    { value: 'analytical', label: 'Analytical Thinking' },
    { value: 'programming', label: 'Programming' }
  ]

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => {
      const currentValues = prev[field]
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value]
      return { ...prev, [field]: newValues }
    })
  }

  const handleSelectChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.interests.length === 0 || formData.skills.length === 0) {
      alert('Please select at least one interest and one skill')
      return
    }
    onSubmit(formData)
  }

  return (
    <div className="career-form-container">
      <form onSubmit={handleSubmit} className="career-form">
        <div className="form-section">
          <h2>📌 Select Your Interests</h2>
          <p className="form-hint">Choose at least one (select multiple)</p>
          <div className="checkbox-grid">
            {interestOptions.map(option => (
              <label key={option.value} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.interests.includes(option.value)}
                  onChange={() => handleCheckboxChange('interests', option.value)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h2>💪 Select Your Skills</h2>
          <p className="form-hint">Choose at least one (select multiple)</p>
          <div className="checkbox-grid">
            {skillOptions.map(option => (
              <label key={option.value} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.skills.includes(option.value)}
                  onChange={() => handleCheckboxChange('skills', option.value)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h2>🎓 Education Level</h2>
          <div className="select-group">
            <select
              value={formData.education}
              onChange={(e) => handleSelectChange('education', e.target.value)}
              className="form-select"
            >
              <option value="high-school">High School</option>
              <option value="associate">Associate Degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="doctorate">Doctorate/PhD</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h2>🏢 Preferred Work Style</h2>
          <div className="select-group">
            <select
              value={formData.workStyle}
              onChange={(e) => handleSelectChange('workStyle', e.target.value)}
              className="form-select"
            >
              <option value="team">Team-oriented</option>
              <option value="independent">Independent Work</option>
              <option value="structured">Structured Environment</option>
              <option value="fast-paced">Fast-paced</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h2>💰 Minimum Salary Expectation</h2>
          <div className="select-group">
            <select
              value={formData.salary}
              onChange={(e) => handleSelectChange('salary', e.target.value)}
              className="form-select"
            >
              <option value="any">Any Salary</option>
              <option value="40000">$40,000+</option>
              <option value="50000">$50,000+</option>
              <option value="60000">$60,000+</option>
              <option value="70000">$70,000+</option>
              <option value="80000">$80,000+</option>
              <option value="90000">$90,000+</option>
              <option value="100000">$100,000+</option>
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Find My Career Matches 🚀
        </button>
      </form>
    </div>
  )
}

export default CareerForm
