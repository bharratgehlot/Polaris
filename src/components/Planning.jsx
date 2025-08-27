import { useState, useEffect } from 'react'
import './Planning.css'

function Planning() {
  const frontendOptions = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'HTML, CSS, Javascript']
  const backendOptions = ['None', 'Node.js', 'Python', 'Java', 'C#', '.NET', 'PHP', 'Go']
  const databaseOptions = ['None', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Firebase']
  const featuresOptions = ['User Authentication', 'Payment Integration', 'Real-time Chat', 'File Upload', 'Email Notifications', 'Search Functionality', 'Admin Dashboard', 'API Integration', 'Dark Mode', 'Mobile Responsive']

  const [showPreview, setShowPreview] = useState(false)


  const [formData, setFormData] = useState({
    frontend: '',
    backend: '',
    database: '',
    pages: '',
    styling: '',
    features: []
  })


  // Load data from localStorage on component mount 

  useEffect(() => {
    const savedData = localStorage.getItem('projectPlanningData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])


  // Save data to localStorage whenever formData changes

  useEffect(() => {
    localStorage.setItem('projectPlanningData', JSON.stringify(formData))
  }, [formData])



  const handleSelectChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFeatureChange = (feature, checked) => {
    setFormData(prev => ({
      ...prev,
      features: checked
        ? [...prev.features, feature]
        : prev.features.filter(f => f !== feature)
    }))
  }




  return (
    <div className="planning-container">
      <h2 className="planning-title">Project Planning</h2>



      <div className="input-group">
        <label className="input-label">Frontend:</label>
        <select
          className="dropdown-select"
          value={formData.frontend}
          onChange={(e) => handleSelectChange('frontend', e.target.value)}
        >
          <option value="">Select a frontend</option>
          {frontendOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>


      <div className="input-group">
        <label className="input-label">Backend:</label>
        <select className="dropdown-select"
          value={formData.backend}
          onChange={(e) => handleSelectChange('backend', e.target.value)}
        >
          <option value="">Select a backend</option>
          {backendOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>


      <div className="input-group">
        <label className="input-label">Database:</label>
        <select className="dropdown-select"
          value={formData.database}
          onChange={(e) => handleSelectChange('database', e.target.value)}

        >
          <option value="">Select a database</option>
          {databaseOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>



      <div className="input-group">
        <label className="input-label">Number of pages:</label>
        <select className="dropdown-select"
          value={formData.pages}
          onChange={(e) => handleSelectChange('pages', e.target.value)}
        >
          <option value="">Select pages</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10+">10+</option>
        </select>
      </div>

      <div className="input-group">
        <label className="input-label">Styling Libraries:</label>
        <select className="dropdown-select"
          value={formData.styling}
          onChange={(e) => handleSelectChange('styling', e.target.value)}
        >
          <option value="">Select a library</option>
          <option value="Tailwind CSS">Tailwind CSS</option>
          <option value="Bootstrap">Bootstrap</option>
          <option value="Plain CSS">Plain CSS</option>
          <option value="Material-UI">Material-UI</option>
          <option value="Ant Design">Ant Design</option>
          <option value="Chakra UI">Chakra UI</option>
          <option value="Bulma">Bulma</option>
          <option value="Semantic UI">Semantic UI</option>
          <option value="Foundation">Foundation</option>

        </select>
      </div>



      <div className="input-group">
        <label className="input-label">Features needed:</label>
        <div className="options-scroll">
          {featuresOptions.map(option => (
            <div key={option} className="option-item">
              <input type="checkbox"
                id={`features-${option}`}
                checked={formData.features.includes(option)}
                onChange={(e) => handleFeatureChange(option, e.target.checked)}
              />
              <label htmlFor={`features-${option}`}>{option}</label>
            </div>
          ))}
        </div>
      </div>



      <div className='preview-section'>

        <button className='preview-button' onClick={() => setShowPreview(!showPreview)} >
          {showPreview ? 'Hide Preview' : 'Preview'}
        </button>

        {showPreview && (
          <div className="preview-box">
            <h3>Project Preview</h3>
            <div className="preview-item">
              <strong>Frontend:</strong> {formData.frontend || 'Not selected'}
            </div>
            <div className="preview-item">
              <strong>Backend:</strong> {formData.backend || 'Not selected'}
            </div>
            <div className="preview-item">
              <strong>Database:</strong> {formData.database || 'Not selected'}
            </div>
            <div className="preview-item">
              <strong>Pages:</strong> {formData.pages || 'Not selected'}
            </div>
            <div className="preview-item">
              <strong>Styling:</strong> {formData.styling || 'Not selected'}
            </div>
            <div className="preview-item">
              <strong>Features:</strong> {formData.features.length > 0 ? formData.features.join(', ') : 'None selected'}
            </div>
          </div>
        )}
      </div>



      <div className="next-section">
        <button
          className="next-button"
          onClick={() => window.location.href = '/design'}
        >
          Next →
        </button>
      </div>







    </div>
  )
}

export default Planning