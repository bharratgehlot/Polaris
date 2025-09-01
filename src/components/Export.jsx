import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import "./Global.css";
import "./Export.css";

function Export() {




  // for navigation between components

  const navigate = useNavigate();


  // State for all project data
  const [allProjectData, setAllProjectData] = useState({
    planning: {},
    design: {},
    code: {},
    build: {}
  });

  const [showAllPreview, setShowAllPreview] = useState(true);

  // Load all saved data from localStorage
  useEffect(() => {
    try {
      const planningData = JSON.parse(localStorage.getItem('projectPlanningData') || '{}');
      const designData = JSON.parse(localStorage.getItem('projectDesignData') || '{}');
      const codeData = JSON.parse(localStorage.getItem('projectCodeData') || '{}');
      const buildData = JSON.parse(localStorage.getItem('projectBuildData') || '{}');

      setAllProjectData({
        planning: planningData,
        design: designData,
        code: codeData,
        build: buildData
      });
    } catch (error) {
      console.log('Error loading project data: ', error);
    }
  }, []);

  // Export/Download function
  const exportProject = () => {
    const projectBlueprint = {
      projectName: localStorage.getItem('projectData') || 'Project X',
      projectDescription: localStorage.getItem('projectDescription') || 'An web application',
      timestamp: new Date().toISOString(),
      ...allProjectData
    };

    const projectName = localStorage.getItem('projectName') || 'Project X';
    const dataStr = JSON.stringify(projectBlueprint, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `project-${projectName}-blueprint.json`;
    link.click();
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2 className="page-title">📦 Export Project</h2>
        <p className="page-subtitle">Review and export your project blueprint</p>
      </div>

      {/* Complete Project Preview */}
      <div className="preview-card">
        <button
          className={`preview-toggle ${showAllPreview ? 'active' : ''}`}
          onClick={() => setShowAllPreview(!showAllPreview)}
        >
          <span className="toggle-icon">{showAllPreview ? '▼' : '▶'}</span>
          {showAllPreview ? 'Hide Project Overview' : 'Show Project Overview'}
        </button>

        {showAllPreview && (
          <div className="preview-content">

            {/* Planning Section */}
            <div className="page-card" style={{ marginBottom: '1rem' }}>
              <div className="card-header">
                <h3 className="card-title">📋 Planning Data</h3>
              </div>
              <div className="preview-grid">
                <div className="preview-item">
                  <span className="preview-label">Frontend</span>
                  <span className="preview-value">{allProjectData.planning.frontend || 'Not set'}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Backend</span>
                  <span className="preview-value">{allProjectData.planning.backend || 'Not set'}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Database</span>
                  <span className="preview-value">{allProjectData.planning.database || 'Not set'}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Styling</span>
                  <span className="preview-value">{allProjectData.planning.styling || 'Not set'}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Libraries</span>
                  <span className="preview-value">{allProjectData.planning.compLibraries || 'Not set'}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Pages</span>
                  <span className="preview-value">{allProjectData.planning.pages || 'Not set'}</span>
                </div>
                <div className="preview-item features-preview">
                  <span className="preview-label">Features</span>
                  <div className="preview-features">
                    {allProjectData.planning.features?.length > 0 ? (
                      allProjectData.planning.features.map((feature, index) => (
                        <span key={index} className="feature-tag">{feature}</span>
                      ))
                    ) : (
                      <span className="preview-value">None selected</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Design Section */}
            <div className="page-card" style={{ marginBottom: '1rem' }}>
              <div className="card-header">
                <h3 className="card-title">🎨 Design Data</h3>
              </div>
              <div className="preview-grid">
                <div className="preview-item">
                  <span className="preview-label">Colors</span>
                  <span className="preview-value">
                    {[allProjectData.design.primaryColor, allProjectData.design.secondaryColor, allProjectData.design.additionalColor]
                      .filter(Boolean).join(', ') || 'Not set'}
                  </span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Typography</span>
                  <span className="preview-value">
                    {[allProjectData.design.fontStyle, allProjectData.design.fontSize]
                      .filter(Boolean).join(' - ') || 'Not set'}
                  </span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Navigation</span>
                  <span className="preview-value">{allProjectData.design.navigationStyle || 'Not set'}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Spacing</span>
                  <span className="preview-value">{allProjectData.design.spacingPadding || 'Not set'}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Button Style</span>
                  <span className="preview-value">{allProjectData.design.buttonStyle || 'Not set'}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Component Style</span>
                  <span className="preview-value">{allProjectData.design.componentStyle || 'Not set'}</span>
                </div>
              </div>
            </div>

            {/* Code Section */}
            <div className="page-card" style={{ marginBottom: '1rem' }}>
              <div className="card-header">
                <h3 className="card-title">💻 Code Data</h3>
              </div>
              <div className="preview-grid">
                <div className="preview-item">
                  <span className="preview-label">IDE</span>
                  <span className="preview-value">{allProjectData.code.ideSelector || 'Not set'}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Duration</span>
                  <span className="preview-value">
                    {allProjectData.code.durationOfCode ? `${allProjectData.code.durationOfCode} weeks` : 'Not set'}
                  </span>
                </div>
              </div>
            </div>

            {/* Build Section */}
            <div className="page-card" style={{ marginBottom: '1rem' }}>
              <div className="card-header">
                <h3 className="card-title">⚙️ Build Data</h3>
              </div>
              <div className="preview-grid">
                <div className="preview-item">
                  <span className="preview-label">Build Tool</span>
                  <span className="preview-value">{allProjectData.build.buildTool || 'Not set'}</span>
                </div>

                <div className="preview-item">
                  <span className="preview-label">Frontend Hosting</span>
                  <span className="preview-value">{allProjectData.build.frontEndHosting || 'Not set'}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Backend Hosting</span>
                  <span className="preview-value">{allProjectData.build.backendHosting || 'Not set'}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Database Hosting</span>
                  <span className="preview-value">{allProjectData.build.databaseHosting || 'Not set'}</span>
                </div>

                <div className="preview-item">
                  <span className="preview-label">Custom Domain</span>
                  <span className="preview-value">{allProjectData.build.customDomain || 'Not set'}</span>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Export Actions */}
      <div className="page-sections">
        <div className="page-card">
          <div className="card-header">
            <h3 className="card-title">📄 Export Options</h3>
            <p className="card-description">Download your project blueprint</p>
          </div>

          <div className="save-section">
            <button className="save-button" onClick={exportProject}>
              📥 Download Blueprint (JSON)
            </button>
          </div>
        </div>
      </div>

      <div className="next-section">
        <button
          className="prev-button"
          onClick={() => navigate('/build')}    // prev


        >
          ← Back to Build
        </button>
        <button
          className="next-button"
          onClick={() => navigate('/')}         // home
        >
          🏠 Back to Home
        </button>
      </div>
    </div>
  );
}

export default Export;
