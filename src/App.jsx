import { useState } from 'react'
import CareerForm from './components/CareerForm'
import CareerResults from './components/CareerResults'
import './App.css'

function App() {
  const [matches, setMatches] = useState([])
  const [showResults, setShowResults] = useState(false)

  const handleMatch = (userPreferences) => {
    const matchedCareers = findCareerMatches(userPreferences)
    setMatches(matchedCareers)
    setShowResults(true)
  }

  const findCareerMatches = (preferences) => {
    const { interests, skills, education, workStyle, salary } = preferences

    // Career database with detailed information
    const careers = [
      {
        id: 1,
        title: "Software Developer",
        description: "Design and create software applications and systems",
        interests: ["technology", "problem-solving", "creative"],
        skills: ["programming", "analytical", "technical"],
        education: "bachelor",
        workStyle: ["independent", "team"],
        salaryRange: "$70,000 - $120,000",
        salaryMin: 70000,
        growth: "22%",
        tasks: ["Write and test code", "Debug programs", "Design software solutions"]
      },
      {
        id: 2,
        title: "Data Scientist",
        description: "Analyze complex data to help organizations make decisions",
        interests: ["technology", "analytical", "problem-solving"],
        skills: ["analytical", "technical", "programming"],
        education: "master",
        workStyle: ["independent", "team"],
        salaryRange: "$80,000 - $140,000",
        salaryMin: 80000,
        growth: "36%",
        tasks: ["Analyze data patterns", "Create predictive models", "Present insights"]
      },
      {
        id: 3,
        title: "Marketing Manager",
        description: "Develop and implement marketing strategies",
        interests: ["creative", "people", "business"],
        skills: ["communication", "creative", "leadership"],
        education: "bachelor",
        workStyle: ["team", "fast-paced"],
        salaryRange: "$65,000 - $110,000",
        salaryMin: 65000,
        growth: "10%",
        tasks: ["Plan campaigns", "Manage teams", "Analyze market trends"]
      },
      {
        id: 4,
        title: "Nurse Practitioner",
        description: "Provide advanced nursing care and treatment",
        interests: ["helping", "people", "healthcare"],
        skills: ["communication", "technical", "leadership"],
        education: "master",
        workStyle: ["team", "fast-paced"],
        salaryRange: "$95,000 - $125,000",
        salaryMin: 95000,
        growth: "45%",
        tasks: ["Diagnose conditions", "Prescribe treatments", "Patient care"]
      },
      {
        id: 5,
        title: "Financial Analyst",
        description: "Evaluate financial data to guide business decisions",
        interests: ["analytical", "business", "problem-solving"],
        skills: ["analytical", "technical", "communication"],
        education: "bachelor",
        workStyle: ["independent", "structured"],
        salaryRange: "$60,000 - $95,000",
        salaryMin: 60000,
        growth: "9%",
        tasks: ["Analyze financial data", "Create reports", "Forecast trends"]
      },
      {
        id: 6,
        title: "Graphic Designer",
        description: "Create visual concepts to communicate ideas",
        interests: ["creative", "artistic", "technology"],
        skills: ["creative", "technical", "communication"],
        education: "bachelor",
        workStyle: ["independent", "team"],
        salaryRange: "$45,000 - $75,000",
        salaryMin: 45000,
        growth: "3%",
        tasks: ["Design layouts", "Create graphics", "Collaborate with clients"]
      },
      {
        id: 7,
        title: "Teacher",
        description: "Educate students in various subjects",
        interests: ["helping", "people", "creative"],
        skills: ["communication", "leadership", "creative"],
        education: "bachelor",
        workStyle: ["team", "structured"],
        salaryRange: "$45,000 - $70,000",
        salaryMin: 45000,
        growth: "8%",
        tasks: ["Develop lessons", "Teach students", "Assess progress"]
      },
      {
        id: 8,
        title: "Civil Engineer",
        description: "Design and oversee infrastructure projects",
        interests: ["problem-solving", "technology", "outdoors"],
        skills: ["technical", "analytical", "leadership"],
        education: "bachelor",
        workStyle: ["team", "structured"],
        salaryRange: "$65,000 - $105,000",
        salaryMin: 65000,
        growth: "8%",
        tasks: ["Design structures", "Manage projects", "Ensure safety"]
      },
      {
        id: 9,
        title: "Human Resources Manager",
        description: "Oversee recruiting, training, and employee relations",
        interests: ["people", "business", "helping"],
        skills: ["communication", "leadership", "analytical"],
        education: "bachelor",
        workStyle: ["team", "structured"],
        salaryRange: "$70,000 - $115,000",
        salaryMin: 70000,
        growth: "9%",
        tasks: ["Recruit talent", "Manage policies", "Resolve conflicts"]
      },
      {
        id: 10,
        title: "Physical Therapist",
        description: "Help patients recover movement and manage pain",
        interests: ["helping", "people", "healthcare"],
        skills: ["communication", "technical", "leadership"],
        education: "doctorate",
        workStyle: ["team", "independent"],
        salaryRange: "$75,000 - $95,000",
        salaryMin: 75000,
        growth: "17%",
        tasks: ["Assess patients", "Create treatment plans", "Track progress"]
      },
      {
        id: 11,
        title: "Accountant",
        description: "Prepare and examine financial records",
        interests: ["analytical", "business", "structured"],
        skills: ["analytical", "technical", "communication"],
        education: "bachelor",
        workStyle: ["independent", "structured"],
        salaryRange: "$55,000 - $85,000",
        salaryMin: 55000,
        growth: "6%",
        tasks: ["Prepare taxes", "Audit records", "Ensure compliance"]
      },
      {
        id: 12,
        title: "UX Designer",
        description: "Design user-friendly digital experiences",
        interests: ["creative", "technology", "people"],
        skills: ["creative", "technical", "communication"],
        education: "bachelor",
        workStyle: ["team", "independent"],
        salaryRange: "$65,000 - $110,000",
        salaryMin: 65000,
        growth: "13%",
        tasks: ["Research users", "Create prototypes", "Test designs"]
      },
      {
        id: 13,
        title: "Environmental Scientist",
        description: "Protect the environment and human health",
        interests: ["outdoors", "analytical", "helping"],
        skills: ["analytical", "technical", "communication"],
        education: "bachelor",
        workStyle: ["independent", "team"],
        salaryRange: "$55,000 - $85,000",
        salaryMin: 55000,
        growth: "8%",
        tasks: ["Conduct research", "Analyze data", "Develop solutions"]
      },
      {
        id: 14,
        title: "Sales Manager",
        description: "Lead sales teams and develop strategies",
        interests: ["people", "business", "competitive"],
        skills: ["communication", "leadership", "analytical"],
        education: "bachelor",
        workStyle: ["team", "fast-paced"],
        salaryRange: "$75,000 - $130,000",
        salaryMin: 75000,
        growth: "7%",
        tasks: ["Set goals", "Train teams", "Build relationships"]
      },
      {
        id: 15,
        title: "Cybersecurity Analyst",
        description: "Protect computer systems from threats",
        interests: ["technology", "problem-solving", "analytical"],
        skills: ["technical", "analytical", "communication"],
        education: "bachelor",
        workStyle: ["independent", "fast-paced"],
        salaryRange: "$75,000 - $120,000",
        salaryMin: 75000,
        growth: "35%",
        tasks: ["Monitor systems", "Respond to threats", "Implement security"]
      }
    ]

    // Calculate match scores
    const scoredCareers = careers.map(career => {
      let score = 0
      let maxScore = 0

      // Interest matching (30 points)
      maxScore += 30
      const interestMatches = interests.filter(i => career.interests.includes(i))
      score += (interestMatches.length / Math.max(interests.length, 1)) * 30

      // Skills matching (30 points)
      maxScore += 30
      const skillMatches = skills.filter(s => career.skills.includes(s))
      score += (skillMatches.length / Math.max(skills.length, 1)) * 30

      // Education matching (20 points)
      maxScore += 20
      const educationLevels = ["high-school", "associate", "bachelor", "master", "doctorate"]
      const userEduLevel = educationLevels.indexOf(education)
      const careerEduLevel = educationLevels.indexOf(career.education)
      if (userEduLevel >= careerEduLevel) {
        score += 20
      } else {
        score += Math.max(0, 20 - (careerEduLevel - userEduLevel) * 5)
      }

      // Work style matching (10 points)
      maxScore += 10
      if (career.workStyle.includes(workStyle)) {
        score += 10
      }

      // Salary matching (10 points)
      maxScore += 10
      if (salary === "any" || career.salaryMin >= parseInt(salary)) {
        score += 10
      } else {
        score += Math.max(0, 10 - (parseInt(salary) - career.salaryMin) / 10000)
      }

      const matchPercentage = Math.round((score / maxScore) * 100)

      return {
        ...career,
        matchPercentage,
        matchedInterests: interestMatches,
        matchedSkills: skillMatches
      }
    })

    // Sort by match percentage and return top matches
    return scoredCareers
      .sort((a, b) => b.matchPercentage - a.matchPercentage)
      .filter(career => career.matchPercentage >= 30)
  }

  const handleReset = () => {
    setShowResults(false)
    setMatches([])
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎯 Career Matching System</h1>
        <p>Find your perfect career based on your interests, skills, and goals</p>
      </header>

      <main className="app-main">
        {!showResults ? (
          <CareerForm onSubmit={handleMatch} />
        ) : (
          <CareerResults matches={matches} onReset={handleReset} />
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 Career Matching System | BUS202 Project</p>
      </footer>
    </div>
  )
}

export default App
