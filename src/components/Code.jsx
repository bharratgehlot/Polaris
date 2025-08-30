import { useState, useEffect } from 'react'
import './Code.css'

function Code() {


  // Working data with their state (what user is currently editing)

  const [codeData, setCodeData] = useState({
    ideSelector: '',
    durationOfCode: ''
  })









  // Saved data with their state (what's been explicitly saved)



  const [savedCodeData, setSavedCodeData] = useState({
    ideSelector: '',
    durationOfCode: ''
  })









  // Load Code data from local storage

  useEffect(() => {
    try {
      const savedCodeData = localStorage.getItem('projectCodeData')
      if (savedCodeData) {
        const parsedData = JSON.parse(savedCodeData)
        setSavedCodeData(parsedData)
        setCodeData(parsedData)
      }
    } catch (error) {
      console.log('Error loading code data: ', error)
    }
  }, [])


  // Manual save function for code data


  const saveCodeData = () => {
    try {
      localStorage.setItem('projectCodeData', JSON.stringify(codeData))
      setSavedCodeData(codeData)
    } catch (error) {
      console.log('Error saving code data: ', error)
    }
  }

  // State Management for the Code Data Preview

  const [showCodePreview, setShowCodePreview] = useState(false)































  // Preview Planning Data and manage their state when changed


  const [showPlanningPreview, setshowPlanningPreview] = useState(false)

  const [planningData, setPlanningData] = useState({
    frontend: '',
    backend: '',
    database: '',
    pages: '',
    styling: '',
    compLibraries: '',
    features: []
  })


  // Save and load Planning data from local storage

  useEffect(() => {
    try {
      const savedData = localStorage.getItem('projectPlanningData')
      if (savedData) {
        setPlanningData(JSON.parse(savedData))
      }
    } catch (error) {
      console.log('Error loading planning data: ', error)
    }

  }, [])




  // Preview Design Data and manage their state when changed


  const [showDesignPreview, setShowDesignPreview] = useState(false)
  const [designData, setDesignData] = useState({
    primaryColor: '',
    secondaryColor: '',
    additionalColor: '',
    fontStyle: '',
    fontSize: '',
    navigationStyle: '',
    spacingPadding: '',
    buttonStyle: '',
    componentStyle: ''
  })


  // Save and load Desgin data from local storage


  useEffect(() => {
    try {
      const savedDesignData = localStorage.getItem('projectDesignData')
      if (savedDesignData) {
        setDesignData(JSON.parse(savedDesignData))
      }
    } catch (error) {
      console.log('Error loading design data: ', error)
    }
  }, [])


  // What does this line do ??  

  useEffect(() => {
    localStorage.setItem('projectDesignData', JSON.stringify(designData))
  }, [designData])


















































































  return (
    <div className="code-container">
      <div className="code-header">
        <h2 className="code-title">💻 Code Generation</h2>
        <p className="code-subtitle">Generate your project blueprint and code structure</p>
      </div>

      {/* Preview for Planning Data */}

      <div className="preview-card">
        <button
          className={`preview-toggle ${showPlanningPreview ? 'active' : ''}`}
          onClick={() => setshowPlanningPreview(!showPlanningPreview)}
        >
          <span className="toggle-icon">{showPlanningPreview ? '▼' : '▶'}</span>
          {showPlanningPreview ? 'Hide Planning Data' : 'Show Planning Data'}
        </button>

        {showPlanningPreview && (


          <div className="preview-content">

            <div className="preview-grid">

              <div className="preview-item">
                <span className="preview-label">Frontend</span>
                <span className="preview-value">{planningData.frontend || 'Not selected'}</span>
              </div>



              <div className="preview-item">
                <span className="preview-label">Backend</span>
                <span className="preview-value">{planningData.backend || 'Not selected'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Database</span>
                <span className="preview-value">{planningData.database || 'Not selected'}</span>
              </div>



              <div className="preview-item">
                <span className="preview-label">Styling</span>
                <span className="preview-value">{planningData.styling || 'Not selected'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Libraries</span>
                <span className="preview-value">{planningData.compLibraries || 'Not selected'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Pages</span>
                <span className="preview-value">{planningData.pages || 'Not selected'}</span>
              </div>

              <div className="preview-item features-preview">
                <span className="preview-label">Features</span>

                <div className="preview-features">
                  {planningData.features.length > 0 ? (
                    planningData.features.map((feature, index) => (
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

      {/* Preview for Design Data */}

      <div className="preview-card">
        <button
          className={`preview-toggle ${showDesignPreview ? 'active' : ''}`}
          onClick={() => setShowDesignPreview(!showDesignPreview)}
        >
          <span className="toggle-icon">{showDesignPreview ? '▼' : '▶'}</span>
          {showDesignPreview ? 'Hide Design Data' : 'Show Design Data'}
        </button>

        {showDesignPreview && (
          <div className="preview-content">
            <div className="preview-grid">
              <div className="preview-item">
                <span className="preview-label">Colors</span>
                <span className="preview-value">
                  {[designData.primaryColor, designData.secondaryColor, designData.additionalColor]
                    .filter(Boolean).join(', ') || 'Not selected'}
                </span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Typography</span>
                <span className="preview-value">
                  {[designData.fontStyle, designData.fontSize]
                    .filter(Boolean).join(' - ') || 'Not selected'}
                </span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Navigation</span>
                <span className="preview-value">{designData.navigationStyle || 'Not selected'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Spacing</span>
                <span className="preview-value">{designData.spacingPadding || 'Not selected'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Button Style</span>
                <span className="preview-value">{designData.buttonStyle || 'Not selected'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Component Style</span>
                <span className="preview-value">{designData.componentStyle || 'Not selected'}</span>
              </div>
            </div>
          </div>
        )}
      </div>


      {/* Preview for Code Data */}


      <div className="preview-card">
        <button
          className={`preview-toggle ${showCodePreview ? 'active' : ''}`}
          onClick={() => setShowCodePreview(!showCodePreview)}
        >
          <span className='toggle-icon'>{showCodePreview ? '▼' : '▶'}</span>
          {showCodePreview ? 'Hide Code Data' : 'Show Code Data'}
        </button>


        {showCodePreview && (
          <div className="preview-content">
            <div className="preview-grid">

              <div className="preview-item">
                <span className="preview-label">IDE</span>
                <span className="preview-value">{savedCodeData.ideSelector || 'Not saved'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Duration</span>
                <span className="preview-value">{savedCodeData.durationOfCode ? `${savedCodeData.durationOfCode} weeks` : 'Not saved'}</span>
              </div>
            </div>
          </div>
        )}
      </div>









      <div className="code-sections">
        <div className="code-card">
          <div className="card-header">
            <h3 className="card-title">⚙️ Code Configuration</h3>
            <p className="card-description">Configure your development environment</p>
          </div>










          <div className="typography-grid">
            <div className="input-group">
              <label className="input-label">IDE Selector</label>
              <select
                value={codeData.ideSelector}
                onChange={(e) => setCodeData({ ...codeData, ideSelector: e.target.value })}
              >
                <option value="">Select IDE</option>
                <option value="vscode">VS Code</option>
                <option value="webstorm">WebStorm</option>
                <option value="atom">Atom</option>
                <option value="sublime">Sublime Text</option>
              </select>
            </div>
          </div>












          <br></br>
          <div className="typography-grid">

            <div className="input-group">
              <label className="input-label">Duration of Code (weeks)</label>
              <select
                value={codeData.durationOfCode}
                onChange={(e) => setCodeData({ ...codeData, durationOfCode: e.target.value })}
              >
                <option value="">Select Duration</option>
                <option value="1">1 week</option>
                <option value="2">2 weeks</option>
                <option value="4">1 month</option>
                <option value="8">2 months</option>
                <option value="12">3 months</option>
              </select>
            </div>
          </div>












          <div className="save-section">
            <button className="save-button" onClick={saveCodeData}>
              Save Code Configuration
            </button>
          </div>


        </div>
      </div>




      <div className="next-section">
        <button
          className="next-button"
          // amazonq-ignore-next-line
          onClick={() => window.location.href = '/build'}
        >
          Continue to Build →
        </button>
      </div>











    </div>
  )
}

export default Code
