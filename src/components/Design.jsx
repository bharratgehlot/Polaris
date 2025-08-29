import React, { useState, useEffect } from 'react'
import './Design.css'

function Design() {
  const colorOptions = ['Red', 'Blue', 'Green', 'Purple', 'Orange', 'Pink', 'Yellow', 'Teal', 'Indigo', 'Gray', 'Black', 'White']

  const [showPreview, setShowPreview] = useState(false)
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
    spacingPadding: ''
  })

  useEffect(() => {
    const savedData = localStorage.getItem('projectPlanningData')
    if (savedData) {
      setPlanningData(JSON.parse(savedData))
    }
  }, [])

  useEffect(() => {
    const savedDesignData = localStorage.getItem('projectDesignData')
    if (savedDesignData) {
      setDesignData(JSON.parse(savedDesignData))
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
          className={`preview-toggle ${showPreview ? 'active' : ''}`}
          onClick={() => setShowPreview(!showPreview)}
        >
          <span className="toggle-icon">{showPreview ? '▼' : '▶'}</span>
          {showPreview ? 'Hide Planning Data' : 'Show Planning Data'}
        </button>

        {showPreview && (


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



























      <div className="design-sections">
        <div className="design-card">
          <div className="card-header">
            <h3 className="card-title">🎨 Color Palette</h3>
            <p className="card-description">Choose your brand colors</p>
          </div>

          <div className="color-grid">
            <div className="color-input-group">
              <label className="color-label">Primary</label>
              <select
                className="color-select"
                value={designData.primaryColor}
                onChange={(e) => handleColorChange('primaryColor', e.target.value)}
              >
                <option value="">Choose color</option>
                {colorOptions.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
              {designData.primaryColor && (
                <div className={`color-preview ${designData.primaryColor.toLowerCase()}`}></div>
              )}
            </div>

            <div className="color-input-group">
              <label className="color-label">Secondary</label>
              <select
                className="color-select"
                value={designData.secondaryColor}
                onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
              >
                <option value="">Choose color</option>
                {colorOptions.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
              {designData.secondaryColor && (
                <div className={`color-preview ${designData.secondaryColor.toLowerCase()}`}></div>
              )}
            </div>

            <div className="color-input-group">
              <label className="color-label">Accent</label>
              <select
                className="color-select"
                value={designData.additionalColor}
                onChange={(e) => handleColorChange('additionalColor', e.target.value)}
              >
                <option value="">Choose color</option>
                {colorOptions.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
              {designData.additionalColor && (
                <div className={`color-preview ${designData.additionalColor.toLowerCase()}`}></div>
              )}
            </div>
          </div>
        </div>

        <div className="design-card">
          <div className="card-header">
            <h3 className="card-title">📝 Typography</h3>
            <p className="card-description">Set your text styles</p>
          </div>

          <div className="typography-grid">
            <div className="input-group">
              <label className="input-label">Font Family</label>
              <select
                className="modern-select"
                value={designData.fontStyle}
                onChange={(e) => handleColorChange('fontStyle', e.target.value)}
              >
                <option value="">Select font</option>
                <option value="Arial">Arial</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Georgia">Georgia</option>
                <option value="Verdana">Verdana</option>
                <option value="Roboto">Roboto</option>
                <option value="Open Sans">Open Sans</option>
                <option value="Lato">Lato</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Poppins">Poppins</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Base Size</label>
              <select
                className="modern-select"
                value={designData.fontSize}
                onChange={(e) => handleColorChange('fontSize', e.target.value)}
              >
                <option value="">Select size</option>
                <option value="12px">12px - Small</option>
                <option value="14px">14px - Default</option>
                <option value="16px">16px - Medium</option>
                <option value="18px">18px - Large</option>
                <option value="20px">20px - Extra Large</option>
              </select>
            </div>
          </div>
        </div>

        <div className="design-card">
          <div className="card-header">
            <h3 className="card-title">🧭 Navigation</h3>
            <p className="card-description">Choose navigation style</p>
          </div>

          <div className="navigation-options">
            {['Top Bar', 'Sidebar', 'Bottom Nav', 'Hamburger Menu'].map(style => (
              <label key={style} className="radio-option">
                <input
                  type="radio"
                  name="navigation"
                  value={style}
                  checked={designData.navigationStyle === style}
                  onChange={(e) => handleColorChange('navigationStyle', e.target.value)}
                />
                <span className="radio-custom"></span>
                <span className="radio-label">{style}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="design-card">
          <div className="card-header">
            <h3 className="card-title">📏 Spacing</h3>
            <p className="card-description">Define layout density</p>
          </div>

          <div className="spacing-options">
            {[
              { value: 'Compact', label: 'Compact', desc: 'Tight spacing' },
              { value: 'Comfortable', label: 'Comfortable', desc: 'Balanced spacing' },
              { value: 'Spacious', label: 'Spacious', desc: 'Generous spacing' }
            ].map(option => (
              <label key={option.value} className="spacing-option">
                <input
                  type="radio"
                  name="spacing"
                  value={option.value}
                  checked={designData.spacingPadding === option.value}
                  onChange={(e) => handleColorChange('spacingPadding', e.target.value)}
                />
                <div className="spacing-card">
                  <span className="spacing-title">{option.label}</span>
                  <span className="spacing-desc">{option.desc}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>



      <div className="next-section">
        <button
          className="next-button"
          onClick={() => window.location.href = '/code'}
        >
          Continue to Code →
        </button>
      </div>











    </div>
  )
}

export default Design
