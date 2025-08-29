import { useState, useEffect } from 'react'
import './Code.css'

function Code() {




  const [showDesignPreview, setShowDesignPreview] = useState(false)
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

  useEffect(() => {
    try {
      const savedDesignData = localStorage.getItem('projectDesignData')
      if (savedDesignData) {
        setDesignData(JSON.parse(savedDesignData))
      }
    } catch (error) {
      console.log('Error loading planning data: ', error)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('projectDesignData', JSON.stringify(designData))
  }, [designData])

  const handleColorChange = (field, value) => {
    setDesignData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="design-container">
      <div className="design-header">
        <h2 className="design-title">🎨 Design System</h2>
        <p className="design-subtitle">Define your project's visual identity</p>
      </div>



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







      <div className="design-sections">




        <div className="design-card">
          <div className="card-header">
            <h3 className="card-title">📝 Typography</h3>
            <p className="card-description">Set your text styles</p>
          </div>

          <div className="typography-grid">
            <div className="input-group">
              <label className="input-label">Font Family</label>
              <select>

              </select>
            </div>


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
