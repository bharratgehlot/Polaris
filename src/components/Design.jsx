import { useState, useEffect } from 'react'
import './Design.css'

function Design() {
  const [showPreview, setShowPreview] = useState(false)
  const [planningData, setPlanningData] = useState({
    frontend: '',
    backend: '',
    database: '',
    pages: '',
    styling: '',
    features: []
  })

  // Load planning data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('projectPlanningData')
    if (savedData) {
      setPlanningData(JSON.parse(savedData))
    }
  }, [])

  return (
    <div className="design-container">
      <h2 className="design-title">Design</h2>
      
      <div className='preview-section'>
        <button className='preview-button' onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? 'Hide Planning Data' : 'Show Planning Data'}
        </button>

        {showPreview && (
          <div className="preview-box">
            <h3>Planning Data</h3>
            <div className="preview-item">
              <strong>Frontend:</strong> {planningData.frontend || 'Not selected'}
            </div>
            <div className="preview-item">
              <strong>Backend:</strong> {planningData.backend || 'Not selected'}
            </div>
            <div className="preview-item">
              <strong>Database:</strong> {planningData.database || 'Not selected'}
            </div>
            <div className="preview-item">
              <strong>Pages:</strong> {planningData.pages || 'Not selected'}
            </div>
            <div className="preview-item">
              <strong>Styling:</strong> {planningData.styling || 'Not selected'}
            </div>
            <div className="preview-item">
              <strong>Features:</strong> {planningData.features.length > 0 ? planningData.features.join(', ') : 'None selected'}
            </div>
          </div>
        )}
      </div>

      <p>Design your project here</p>
    </div>
  )
}

export default Design
