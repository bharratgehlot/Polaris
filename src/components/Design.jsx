import { useState, useEffect } from 'react'
import './Design.css'

function Design() {


  // Working data with their state (what user is currently editing)

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


  // Saved data with their state (what's been explicitly saved)



  const [savedDesignData, setSavedDesignData] = useState({
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


  // Load Design data from local storage

  useEffect(() => {
    try {
      const savedDesignData = localStorage.getItem('projectDesignData')
      if (savedDesignData) {
        const parsedData = JSON.parse(savedDesignData)
        setSavedDesignData(parsedData)  // Set saved state
        setDesignData(parsedData)       // Set working state
      }
    } catch (error) {
      console.log('Error loading Design data: ', error)
    }
  }, [])


  // Manual save function for code data


  const saveDesignData = () => {
    try {
      localStorage.setItem('projectDesignData', JSON.stringify(designData))
      setSavedDesignData(designData)
    } catch (error) {
      console.log('Error saving design data: ', error)
    }
  }

  // State Management for the Design Data Preview

  const [showDesignPreview, setShowDesignPreview] = useState(false)

























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






  // Preview Planning Data and manage their state when changed



  const [showPlanningPreview, setshowPlanningPreview] = useState(false)

  // Save and load Desgin data from local storage












  // Saved data with their state (what's been explicitly saved)



  /* What does this line do ??  

  useEffect(() => {
    localStorage.setItem('projectDesignData', JSON.stringify(designData))
  }, [designData])
*/

























































  // Color Options Array 1 

  const colorOptions = ['Red', 'Blue', 'Green', 'Purple', 'Orange', 'Pink', 'Yellow', 'Teal', 'Indigo', 'Gray', 'Black', 'White']


  // Font styling code 2 

  const getFontClass = (fontName) => {
    const fontMap = {
      'Arial': 'font-arial',
      'Helvetica': 'font-helvetica',
      'Times New Roman': 'font-times',
      'Georgia': 'font-georgia',
      'Verdana': 'font-verdana',
      'Roboto': 'font-roboto',
      'Open Sans': 'font-opensans',
      'Lato': 'font-lato',
      'Montserrat': 'font-montserrat',
      'Poppins': 'font-poppins'
    }
    return fontMap[fontName] || ''
  }

  // Font Sizing code 3

  const getFontSizeClass = (fontSize) => {
    const sizeMap = {
      '12px': 'size-12px',
      '14px': 'size-14px',
      '16px': 'size-16px',
      '18px': 'size-18px',
      '20px': 'size-20px'
    }
    return sizeMap[fontSize] || ''
  }







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
                  {[savedDesignData.primaryColor, savedDesignData.secondaryColor, savedDesignData.additionalColor]
                    .filter(Boolean).join(', ') || 'Not saved'}
                </span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Typography</span>
                <span className="preview-value">
                  {[savedDesignData.fontStyle, savedDesignData.fontSize]
                    .filter(Boolean).join(' - ') || 'Not saved'}
                </span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Navigation</span>
                <span className="preview-value">{savedDesignData.navigationStyle || 'Not saved'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Spacing</span>
                <span className="preview-value">{savedDesignData.spacingPadding || 'Not saved'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Button Style</span>
                <span className="preview-value">{savedDesignData.buttonStyle || 'Not saved'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Component Style</span>
                <span className="preview-value">{savedDesignData.componentStyle || 'Not saved'}</span>
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
                className={`modern-select ${getFontClass(designData.fontStyle)}`}
                value={designData.fontStyle}
                onChange={(e) => handleColorChange('fontStyle', e.target.value)}
              >
                <option value="">Select font</option>
                <option value="Arial" className="font-arial">Arial</option>
                <option value="Helvetica" className="font-helvetica">Helvetica</option>
                <option value="Times New Roman" className="font-times">Times New Roman</option>
                <option value="Georgia" className="font-georgia">Georgia</option>
                <option value="Verdana" className="font-verdana">Verdana</option>
                <option value="Roboto" className="font-roboto">Roboto</option>
                <option value="Open Sans" className="font-opensans">Open Sans</option>
                <option value="Lato" className="font-lato">Lato</option>
                <option value="Montserrat" className="font-montserrat">Montserrat</option>
                <option value="Poppins" className="font-poppins">Poppins</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Base Size</label>
              <select
                className={`modern-select ${getFontSizeClass(designData.fontSize)}`} value={designData.fontSize}

                onChange={(e) => handleColorChange('fontSize', e.target.value)}
              >
                <option value="">Select size</option>
                <option value="12px" className="size-12px">12px - Small</option>
                <option value="14px" className="size-14px">14px - Default</option>
                <option value="16px" className="size-16px">16px - Medium</option>
                <option value="18px" className="size-18px">18px - Large</option>
                <option value="20px" className="size-20px">20px - Extra Large</option>
              </select>


              {designData.fontSize && (
                <div className={`font-size-preview ${getFontSizeClass(designData.fontSize)}`}>
                  Sample text in {designData.fontSize}
                </div>)}
            </div>
          </div>

        </div>






        <div className="design-card">
          <div className="card-header">
            <h3 className="card-title">🧭 Navigation</h3>
            <p className="card-description">Choose navigation style</p>
          </div>


          <div className="navigation-options">
            {[
              { value: 'Top Bar', preview: 'topbar' },
              { value: 'Sidebar', preview: 'sidebar' },
              { value: 'Bottom Nav', preview: 'bottom' },
              { value: 'Hamburger Menu', preview: 'hamburger' }
            ].map(style => (
              <label key={style.value} className="radio-option">
                <input
                  type="radio"
                  name="navigation"
                  value={style.value}
                  checked={designData.navigationStyle === style.value}
                  onChange={(e) => handleColorChange('navigationStyle', e.target.value)}
                />
                <span className="radio-custom"></span>
                <div>
                  <span className="radio-label">{style.value}</span>
                  <div className={`nav-preview ${style.preview}`}></div>
                </div>
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





        <div className="design-card">
          <div className="card-header">
            <h3 className="card-title">🔘 Button Style</h3>
            <p className="card-description">Choose button appearance</p>
          </div>

          <div className="button-styles-grid">
            {[
              { value: 'Rounded', preview: 'rounded' },
              { value: 'Pill', preview: 'pill' },
              { value: 'Sharp', preview: 'sharp' },
              { value: 'Outlined', preview: 'outlined' },
              { value: 'Ghost', preview: 'ghost' },
              { value: 'Gradient', preview: 'gradient' }
            ].map(style => (
              <label key={style.value} className="btn-style-option">
                <input
                  type="radio"
                  name="buttonStyle"
                  value={style.value}
                  checked={designData.buttonStyle === style.value}
                  onChange={(e) => handleColorChange('buttonStyle', e.target.value)}
                />
                <span className="radio-custom"></span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }} >
                  <span className="radio-label">{style.value}</span>
                  <button className={`btn-style-preview ${style.preview}`}>Sample</button>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="design-card">
          <div className="card-header">
            <h3 className="card-title">📦 Component Style</h3>
            <p className="card-description">Set overall design language</p>
          </div>

          <div className="component-styles-grid">
            {[
              { value: 'Material', preview: 'material' },
              { value: 'Flat', preview: 'flat' },
              { value: 'Neumorphism', preview: 'neumorphism' },
              { value: 'Glassmorphism', preview: 'glassmorphism' },
              { value: 'Minimal', preview: 'minimal' },
              { value: 'Brutalist', preview: 'brutalist' }
            ].map(style => (
              <label key={style.value} className="comp-style-option">
                <input
                  type="radio"
                  name="componentStyle"
                  value={style.value}
                  checked={designData.componentStyle === style.value}
                  onChange={(e) =>{ 
                    
                    setDesignData({ ...designData, componentStyle: e.target.value })
                    console.log('designData.componentStyle =', e.target.value)
                }
                }
                  

                />
                {/*onChange={(e) => handleColorChange('componentStyle', e.target.value)}*/}
                <span className="radio-custom"></span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }} >
                  <span className="radio-label">{style.value}</span>
                  <div className={`comp-style-preview ${style.preview}`}></div>
                </div>
              </label>
            ))}
          </div>



          <div className="save-section">
            <button className="save-button" onClick={saveDesignData}>
              Save Design Data
            </button>
          </div>

        </div>


      </div>



      <div className="next-section">
        <button
          className="next-button"
          // amazonq-ignore-next-line
          onClick={() => window.location.href = '/code'}
        >
          Continue to Code →
        </button>
      </div>











    </div>
  )
}

export default Design
