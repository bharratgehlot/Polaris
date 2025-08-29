import { useState, useEffect } from 'react'
import './Planning.css'

function Planning() {
  //const frontendOptions = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'HTML, CSS, Javascript']
  const backendOptions = ['None', 'Node.js', 'Python', 'Java', 'C#', '.NET', 'PHP', 'Go', 'Ruby on rails']
  const databaseOptions = ['None', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Firebase']
  const featuresOptions = ['User Authentication', 'Payment Integration', 'Real-time Chat', 'File Upload', 'Email Notifications', 'Search Functionality', 'Admin Dashboard', 'API Integration', 'Dark Mode', 'Mobile Responsive']

  const feedbackObjectTech = {
     'React+Node.js': {message: '🚀 Excellent choice! Popular and well-supported stack', type: 'great'},
     'Angular+Java': { message: '🏢 Enterprise-grade stack, perfect for large apps', type: 'great' },
     'Vanilla JavaScript+Ruby on rails': { message: '⚠️ Uncommon combo, consider modern frontend framework', type: 'warning' }
  }

  const feedbackObjectDatabase = {
    'MySQL': {message: "Excellent Choice Brother", type: 'great'},
    'PostgreSQL': {message: "Enterprise level stability", type: 'great'},
    'MongoDB': {message: "Great for MERN Stack", type: 'great'}
  }


  const [showPreview, setShowPreview] = useState(false)
  const [formData, setFormData] = useState({
    frontend: '',
    backend: '',
    database: '',
    pages: '',
    styling: '',
    compLibraries: '',
    features: []
  })

  useEffect(() => {
    const savedData = localStorage.getItem('projectPlanningData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

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

  const getfeedbackObjectTech = () => {
    if (!formData.frontend || !formData.backend) return null
    
    const key = `${formData.frontend}+${formData.backend}`
    return feedbackObjectTech[key] || { 
      message: '💡 Interesting combination! Make sure they work well together', 
      type: 'neutral' 
    }
  }



  const getfeedbackObjectDatabase = () => {
    if (!formData.database) return null 

    const key = `${formData.database}`
    return feedbackObjectDatabase[key] || {
      message: 'Well choosen database, make sure it work properly with frontend and backend',
      type: 'neutral'
    }
  }


  const getfeedbackObjectFeatures = () => {
    if(!formData.features.length === 0) return null

    const key = `${formData.features}`
    return {
      message: "TIP: Don't select more than three if you gonna use AI. It will be messy. You can add more features later"
    }
  }

  return (
    <div className="planning-container">
      <div className="planning-header">
        <h2 className="planning-title">📋 Project Planning</h2>
        <p className="planning-subtitle">Define your project's technical foundation</p>
      </div>



      <div className="preview-card">
        <button
          className={`preview-toggle ${showPreview ? 'active' : ''}`}
          onClick={() => setShowPreview(!showPreview)}
        >
          <span className="toggle-icon">{showPreview ? '▼' : '▶'}</span>
          {showPreview ? 'Hide Preview' : 'Show Preview'}
        </button>

        {showPreview && (

          <div className="preview-content">

            <div className="preview-grid">


              <div className="preview-item">
                <span className="preview-label">Frontend</span>
                <span className="preview-value">{formData.frontend || 'Not selected'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Backend</span>
                <span className="preview-value">{formData.backend || 'Not selected'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Database</span>
                <span className="preview-value">{formData.database || 'Not selected'}</span>
              </div>



              <div className="preview-item">
                <span className="preview-label">Styling</span>
                <span className="preview-value">{formData.styling || 'Not selected'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Libraries</span>
                <span className="preview-value">{formData.compLibraries || 'Not selected'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Pages</span>
                <span className="preview-value">{formData.pages || 'Not selected'}</span>
              </div>

              <div className="preview-item features-preview">
                <span className="preview-label">Features</span>

                <div className="preview-features">
                  {formData.features.length > 0 ? (
                    formData.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))
                  ) : (
                    <span className="preview-value">None selected</span>
                  )}
                </div>

              </div>






            </div>

          </div>
        )}
      </div>
























      <div className="planning-sections">
        <div className="planning-card">
          <div className="card-header">
            <h3 className="card-title">⚡ Tech Stack</h3>
            <p className="card-description">Choose your core technologies</p>
          </div>

          <div className="tech-grid">
            <div className="input-group">
              <label className="input-label">Frontend Framework</label>


              <select
                className="modern-select"
                value={formData.frontend}
                onChange={(e) => handleSelectChange('frontend', e.target.value)}
              >
                {/* 
                <option value="">Select frontend</option>
                {frontendOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
                */}

                <option value="">Select frontend</option>
                <option value="React">React</option>
                <option value="Vue.js">Vue.js</option>
                <option value="Angular">Angular</option>
                <option value="Svelte">Svelte</option>
                <option value="Next.js">Next.js</option>
                <option value="Nuxt.js">Nuxt.js</option>
                <option value="Gatsby">Gatsby</option>
                <option value="Vanilla JavaScript">Vanilla JavaScript</option>
                <option value="TypeScript">TypeScript</option>

              </select>





            </div>

            <div className="input-group">
              <label className="input-label">Backend Technology</label>
              <select
                className="modern-select"
                value={formData.backend}
                onChange={(e) => handleSelectChange('backend', e.target.value)}
              >
                <option value="">Select backend</option>
                {backendOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>



            </div>
              

              {formData.frontend && formData.backend && (
                <div className="tech-feedback">
                {getfeedbackObjectTech()?.message}
                </div>
              )}



            <div className="input-group">
              <label className="input-label">Database</label>
              <select
                className="modern-select"
                value={formData.database}
                onChange={(e) => handleSelectChange('database', e.target.value)}
              >
                <option value="">Select database</option>
                {databaseOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>


              {formData.database && (
                <div className="tech-feedback">
                {getfeedbackObjectDatabase()?.message}
                </div>
              )}


          </div>
        </div>

        <div className="planning-card">
          <div className="card-header">
            <h3 className="card-title">🎨 Styling & UI</h3>
            <p className="card-description">Select styling frameworks and libraries</p>
          </div>

          <div className="styling-grid">
            <div className="input-group">
              <label className="input-label">CSS Framework</label>
              <select
                className="modern-select"
                value={formData.styling}
                onChange={(e) => handleSelectChange('styling', e.target.value)}
              >
                <option value="">Select styling</option>
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
              <label className="input-label">Component Library</label>

              <select
                className="modern-select"
                value={formData.compLibraries}
                onChange={(e) => handleSelectChange('compLibraries', e.target.value)}
              >

                <option value="">Select library</option>
                <option value="Mantine">Mantine</option>
                <option value="Radix UI">Radix UI</option>
                <option value="ShadCN/UI">ShadCN/UI</option>
                <option value="Evergreen UI">Evergreen UI</option>
                <option value="Grommet">Grommet</option>
                <option value="PrimeReact">PrimeReact</option>
                <option value="NextUI">NextUI</option>
                <option value="Fluent UI">Fluent UI</option>
                <option value="Rebass">Rebass</option>
                <option value="Theme UI">Theme UI</option>
                <option value="Onsen UI">Onsen UI</option>
                <option value="Shoelace">Shoelace</option>




              </select>





            </div>

            <div className="input-group">
              <label className="input-label">Number of Pages</label>
              <select
                className="modern-select"
                value={formData.pages}
                onChange={(e) => handleSelectChange('pages', e.target.value)}
              >
                <option value="">Select pages</option>
                {[1, 2, 3, 4, '5+'].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>


            </div>
          </div>
        </div>

        <div className="planning-card">
          <div className="card-header">
            <h3 className="card-title">🚀 Features</h3>
            <p className="card-description">Select the features you need</p>
          </div>

          <div className="features-grid">
            {featuresOptions.map(feature => (
              <label key={feature} className="feature-option">
                <input
                  type="checkbox"
                  checked={formData.features.includes(feature)}
                  onChange={(e) => handleFeatureChange(feature, e.target.checked)}
                />
                <span className="checkbox-custom"></span>
                <span className="feature-label">{feature}</span>
              </label>
            ))}
          </div>
                {formData.features.length > 2 && (
                <div className="tech-feedback">
                {getfeedbackObjectFeatures()?.message}
                </div>
              )}

        </div>
      </div>

      <div className="next-section">
        <button
          className="next-button"
          onClick={() => window.location.href = '/design'}
        >
          Continue to Design →
        </button>
      </div>
    </div>
  )
}

export default Planning
