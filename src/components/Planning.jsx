import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Planning.css'

function Planning() {


  // Project Name Variable 

  const projectName = localStorage.getItem("projectName") || "your project";

  // for navigation between components

  const navigate = useNavigate();



  // Working data with their state (what user is currently editing)

  const [planningData, setPlanningData] = useState({
    frontend: '',
    backend: '',
    backendFramework: '',
    database: '',
    pages: '',
    styling: '',
    compLibraries: '',
    features: []
  })




  // Saved data with their state (what's been explicitly saved)




  const [savedPlanningData, setSavedPlanningData] = useState({
    frontend: '',
    backend: '',
    backendFramework: '',
    database: '',
    pages: '',
    styling: '',
    compLibraries: '',
    features: []
  })




  // State Management for the Planning Data Preview and custom features

  const [showPlanningPreview, setShowPlanningPreview] = useState(false)
   const [customFeature, setCustomFeature] = useState('')



  // Load saved planning data from local storage

  useEffect(() => {
    try {
      const savedPlanningData = localStorage.getItem('projectPlanningData')
      if (savedPlanningData) {
        const parsedData = JSON.parse(savedPlanningData)
        setSavedPlanningData(parsedData)  // Set saved state
        setPlanningData(parsedData)       // Set working state
      }
    } catch (error) {
      console.log('Error loading planning data: ', error)
    }
  }, [])


  // Manual save function for code data


  const savePlanningData = () => {
    try {
      localStorage.setItem('projectPlanningData', JSON.stringify(planningData))
      setSavedPlanningData(planningData)
    } catch (error) {
      console.log('Error saving planning data: ', error)
    }
  }

  // Manual CLear Button

  const clearPlanningData = () => {
    try {
      localStorage.removeItem('projectPlanningData')
      const emptyData = {
        frontend: '',
        backend: '',
        backendFramework: '',
        database: '',
        pages: '',
        styling: '',
        compLibraries: '',
        features: []
      }
      setPlanningData(emptyData)
      setSavedPlanningData(emptyData)
    } catch (error) {
      console.log('Error clearing planning data: ', error)
    }
  }




  // Additional (Specific to Planning.jsx) 

    // Handle Select change before adding backend framework

/* 
  const handleSelectChange = (field, value) => {
    setPlanningData(prev => ({ ...prev, [field]: value }))
  }
*/

  // Handle Select change after adding backend framework

const handleSelectChange = (field, value) => {
  setPlanningData(prev => {
    const newData = { ...prev, [field]: value }
    // Clear backend framework when backend changes
    if (field === 'backend') {
      newData.backendFramework = ''
    }
    return newData
  })
}




  const handleFeatureChange = (feature, checked) => {
    setPlanningData(prev => ({
      ...prev,
      features: checked
        ? [...prev.features, feature]
        : prev.features.filter(f => f !== feature)
    }))
  }



  //const frontendOptions = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'HTML, CSS, Javascript']
  const backendOptions = ['Not Required', 'Node.js', 'Python', 'Java', 'C#', '.NET', 'PHP', 'Go', 'Ruby on rails', 'Other']
  const databaseOptions = ['Not Required', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Firebase', 'Other']



// Get backend framework options based on selected backend
const getBackendFrameworkOptions = () => {
  switch (planningData.backend) {
    case 'Python':
      return ['Flask', 'Django', 'FastAPI']
    case 'Java':
      return ['Spring Boot', 'Spark']
    default:
      return []
  }
}




  // Features Selection

  const featuresOptions = ['User Authentication', 'Payment Integration', 'Real-time Chat', 'File Upload', 'Email Notifications', 'Search Functionality', 'Admin Dashboard', 'API Integration', 'Dark Mode', 'Mobile Responsive']

  const feedbackObjectTech = {
    'React+Node.js': { message: '🚀 Excellent choice! Popular and well-supported stack', type: 'great' },
    'Angular+Java': { message: '🏢 Enterprise-grade stack, perfect for large apps', type: 'great' },
    'Vanilla JavaScript+Ruby on rails': { message: '⚠️ Uncommon combo, consider modern frontend framework', type: 'warning' }
  }

  const feedbackObjectDatabase = {
    'MySQL': { message: "Excellent Choice Brother", type: 'great' },
    'PostgreSQL': { message: "Enterprise level stability", type: 'great' },
    'MongoDB': { message: "Great for MERN Stack", type: 'great' }
  }



  const getfeedbackObjectTech = () => {
    if (!planningData.frontend || !planningData.backend) return null

    if (planningData.frontend === 'Not Required' || planningData.frontend === 'Other' ||
      planningData.backend === 'Not Required' || planningData.backend === 'Other') return null

    const key = `${planningData.frontend}+${planningData.backend}`
    return feedbackObjectTech[key] || {
      message: '💡 Interesting combination! Make sure they work well together',
      type: 'neutral'
    }
  }



  const getfeedbackObjectDatabase = () => {

    if (!planningData.database) return null
  if (planningData.database === 'Not Required' || planningData.database === 'Other') return null

    const key = `${planningData.database}`
    return feedbackObjectDatabase[key] || {
      message: 'Nice selection! Verify it works with your tech',
      type: 'neutral'
    }
  }


  const getfeedbackObjectFeatures = () => {
    if (planningData.features.length === 0) return null

    const key = `${planningData.features}`
    return {
      message: "💡 Keep it simple: limit to 3-5 features when using AI tools to avoid complexity"
    }
  }



  return (
    <div className="page-container">
      <div className="page-header">
        <h2 className="page-title">📋 Project Planning</h2>
        <p className="page-subtitle">Build {projectName}'s foundation</p>

      </div>


















      <div className="preview-card">
        <button
          className={`preview-toggle ${showPlanningPreview ? 'active' : ''}`}
          onClick={() => setShowPlanningPreview(!showPlanningPreview)}
        >
          <span className="toggle-icon">{showPlanningPreview ? '▼' : '▶'}</span>
          {showPlanningPreview ? 'Hide Preview' : 'Show Preview'}
        </button>

        {showPlanningPreview && (

          <div className="preview-content">

            <div className="preview-grid">


              <div className="preview-item">
                <span className="preview-label">Frontend</span>
                <span className="preview-value">{savedPlanningData.frontend || 'Not selected'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Backend</span>
                <span className="preview-value">{savedPlanningData.backend || 'Not selected'}</span>
              </div>


             {savedPlanningData.backendFramework && (
               <div className="preview-item">
                 <span className="preview-label">Backend Framework</span>
                 <span className="preview-value">{savedPlanningData.backendFramework}</span>
               </div>
             )}



              <div className="preview-item">
                <span className="preview-label">Database</span>
                <span className="preview-value">{savedPlanningData.database || 'Not selected'}</span>
              </div>



              <div className="preview-item">
                <span className="preview-label">Styling</span>
                <span className="preview-value">{savedPlanningData.styling || 'Not selected'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Libraries</span>
                <span className="preview-value">{savedPlanningData.compLibraries || 'Not selected'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Pages</span>
                <span className="preview-value">{savedPlanningData.pages || 'Not selected'}</span>
              </div>

              <div className="preview-item features-preview">
                <span className="preview-label">Features</span>

                <div className="preview-features">
                  {savedPlanningData.features.length > 0 ? (
                    savedPlanningData.features.map((feature, index) => (
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
























      <div className="page-sections">
        <div className="page-card">
          <div className="card-header">
            <h3 className="card-title">⚡ Tech Stack</h3>
            <p className="card-description">Choose your core technologies</p>
          </div>

          <div className="grid-responsive">
            <div className="input-group">
              <label className="input-label">Frontend Framework</label>


              <select
                className="modern-select"
                value={planningData.frontend}
                onChange={(e) => handleSelectChange('frontend', e.target.value)}
              >
                {/* 
                <option value="">Select frontend</option>
                {frontendOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
                */}

                <option value="">Select frontend</option>
                <option value="Not Required">Not Required</option>
                <option value="React">React</option>
                <option value="HTML CSS JS">HTML CSS JS</option>
                <option value="Vue.js">Vue.js</option>
                <option value="Angular">Angular</option>
                <option value="Svelte">Svelte</option>
                <option value="Next.js">Next.js</option>
                <option value="Nuxt.js">Nuxt.js</option>
                <option value="Gatsby">Gatsby</option>
                <option value="TypeScript">TypeScript</option>
                <option value="Other">Other</option>

              </select>





            </div>

            <div className="input-group">
              <label className="input-label">Backend Technology</label>
              <select
                className="modern-select"
                value={planningData.backend}
                onChange={(e) => handleSelectChange('backend', e.target.value)}
              >
                <option value="">Select backend</option>
                {backendOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>



            </div>


            {getBackendFrameworkOptions().length > 0 && (
              <div className="input-group">
                <label className="input-label">Backend Framework</label>
                <select
                  className="modern-select"
                  value={planningData.backendFramework}
                  onChange={(e) => handleSelectChange('backendFramework', e.target.value)}
                >
                  <option value="">Select framework</option>
                  {getBackendFrameworkOptions().map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            )}



            {planningData.frontend && planningData.backend && (
              <div className="tech-feedback">
                {getfeedbackObjectTech()?.message}
              </div>
            )}




            <div className="input-group">
              <label className="input-label">Database</label>
              <select
                className="modern-select"
                value={planningData.database}
                onChange={(e) => handleSelectChange('database', e.target.value)}
              >
                <option value="">Select database</option>
                {databaseOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>


            {planningData.database && (
              <div className="tech-feedback">
                {getfeedbackObjectDatabase()?.message}
              </div>
            )}


          </div>
        </div>

        <div className="page-card">
          <div className="card-header">
            <h3 className="card-title">🎨 Styling & UI</h3>
            <p className="card-description">Select styling frameworks and libraries</p>
          </div>

          <div className="grid-responsive">
            <div className="input-group">
              <label className="input-label">CSS Framework (Optional)</label>
              <select
                className="modern-select"
                value={planningData.styling}
                onChange={(e) => handleSelectChange('styling', e.target.value)}
              >
                <option value="">Select styling</option>
                <option value="Not Required">Not Required</option>
                <option value="Tailwind CSS">Tailwind CSS</option>
                <option value="Bootstrap">Bootstrap</option>
                <option value="Plain CSS">Plain CSS</option>
                <option value="Material-UI">Material-UI</option>
                <option value="Ant Design">Ant Design</option>
                <option value="Chakra UI">Chakra UI</option>
                <option value="Bulma">Bulma</option>
                <option value="Semantic UI">Semantic UI</option>
                <option value="Foundation">Foundation</option>
                <option value="Other">Other</option>

              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Component Library (if required)</label>

              <select
                className="modern-select"
                value={planningData.compLibraries}
                onChange={(e) => handleSelectChange('compLibraries', e.target.value)}
              >

                <option value="">Select library</option>
                <option value="Not Required">Not Required</option>
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
                <option value="Other">Other</option>
              </select>





            </div>

            <div className="input-group">
              <label className="input-label">Number of Pages</label>
              <select
                className="modern-select"
                value={planningData.pages}
                onChange={(e) => handleSelectChange('pages', e.target.value)}
              >
                <option value="">Select pages</option>
                <option value="Small App (1-3 pages)">Small App (1-3 pages)</option>
                <option value="Medium App (4-7 pages)">Medium App (4-7 pages)</option>
                <option value="Large (10+ pages)">Large (10+ pages)</option>


              </select>


            </div>
          </div>
        </div>

        <div className="page-card">
          <div className="card-header">
            <h3 className="card-title">🚀 Features</h3>
            <p className="card-description">Select the features you need</p>
          </div>

          <div className="grid-responsive">
            {featuresOptions.map(feature => (
              <label key={feature} className="feature-option">
                <input
                  type="checkbox"
                  checked={planningData.features.includes(feature)}
                  onChange={(e) => handleFeatureChange(feature, e.target.checked)}
                />
                <span className="checkbox-custom"></span>
                <span className="feature-label">{feature}</span>
              </label>
            ))}
          </div>


















          {planningData.features.length > 2 && (
            <div className="tech-feedback">
              {getfeedbackObjectFeatures()?.message}
            </div>
          )}





        </div>


        <div className="page-card">
          <div className="card-header">
            <h3 className="card-title">✨ Custom Features</h3>
            <p className="card-description">Add your own custom features</p>
          </div>

          <div className="grid-responsive">
            <div className="input-group">
              <label className="input-label">Custom Feature</label>
              <input
                type="text"
                className="modern-select"
                placeholder="Enter custom feature"
                value={customFeature}
                onChange={(e) => setCustomFeature(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && customFeature.trim()) {
                    handleFeatureChange(customFeature.trim(), true)
                    setCustomFeature('')
                  }
                }}
              />
            </div>
            <div className="input-group">
              <label className="input-label" style={{ opacity: 0 }}>Add</label>
              <button
                type="button"
                className="custom-btn"
                onClick={() => {
                  if (customFeature.trim()) {
                    handleFeatureChange(customFeature.trim(), true)
                    setCustomFeature('')
                  }
                }}
              >
                Add Feature
              </button>
            </div>
          </div>


          {planningData.features.filter(feature => !featuresOptions.includes(feature)).length > 0 && (
            <div className="grid-responsive">
              {planningData.features
                .filter(feature => !featuresOptions.includes(feature))
                .map((feature, index) => (
                  <label key={`custom-${index}`} className="feature-option">
                    <input
                      type="checkbox"
                      checked={true}
                      onChange={(e) => handleFeatureChange(feature, e.target.checked)}
                    />
                    <span className="checkbox-custom"></span>
                    <span className="feature-label">{feature}</span>
                  </label>
                ))}
            </div>
          )}







        </div>


      </div>
      <br />
      <div className="page-card">
        <div className="save-section">
          <button className="save-button" onClick={savePlanningData}>
            Save Planning Data
          </button>
          <button className="clear-button" onClick={clearPlanningData}>
            Clear Planning Data
          </button>
        </div>
      </div>

    


      <div className="next-section">

        <button
          className="next-button"
          onClick={() => navigate('/design')}

        >
          Continue to Design →
        </button>
      </div>
    </div>
  )
}

export default Planning
