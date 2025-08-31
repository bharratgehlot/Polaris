import { useState, useEffect } from "react";
import "./Global.css"
import "./Build.css";

function Build() {


  // Working data with their state (what user is currently editing)


  const [buildData, setBuildData] = useState({
    buildTool: '',
    hosting: '',
    customDomain: ''
  })


  // Saved data with their state (what's been explicitly saved)


  const [savedBuildData, setSavedBuildData] = useState({
    buildTool: '',
    hosting: '',
    customDomain: ''
  })

  // State Management for the Build Data Preview


  const [showBuildPreview, setShowBuildPreview] = useState(false);


  // Load saved Build data from local storage
  useEffect(() => {
    try {
      const savedBuildData = localStorage.getItem('projectBuildData');
      if (savedBuildData) {
        const parsedData = JSON.parse(savedBuildData);
        setSavedBuildData(parsedData);  // Set saved state
        setBuildData(parsedData);       // Set working state
      }
    } catch (error) {
      console.log('Error loading build data: ', error);
    }
  }, []);


  // Manual save function for build data
  const saveBuildData = () => {
    try {
      localStorage.setItem('projectBuildData', JSON.stringify(buildData));
      setSavedBuildData(buildData);
    } catch (error) {
      console.log('Error saving build data: ', error);
    }
  };


  // Manual Clear Button
  const clearBuildData = () => {
    try {
      localStorage.removeItem('projectBuildData');
      const emptyData = {
        buildTool: '',
        hosting: '',
        customDomain: ''
      };
      setBuildData(emptyData);
      setSavedBuildData(emptyData);
    } catch (error) {
      console.log('Error clearing build data: ', error);
    }
  };


  const handleBuildChange = (field, value) => {
    setBuildData(prev => ({ ...prev, [field]: value }));
  };





  return (
    <div className="page-container">
      <div className="page-header">
        <h2 className="page-title">⚙️ Build Configuration</h2>
        <p className="page-subtitle">Configure your build and deployment</p>
      </div>















      {/* Preview for Build Data */}

      {/* Preview for Build Data */}
      <div className="preview-card">
        <button
          className={`preview-toggle ${showBuildPreview ? 'active' : ''}`}
          onClick={() => setShowBuildPreview(!showBuildPreview)}
        >
          <span className="toggle-icon">{showBuildPreview ? '▼' : '▶'}</span>
          {showBuildPreview ? 'Hide Build Data' : 'Show Build Data'}
        </button>

        {showBuildPreview && (
          <div className="preview-content">
            <div className="preview-grid">
              <div className="preview-item">
                <span className="preview-label">Build Tool</span>
                <span className="preview-value">{savedBuildData.buildTool || 'Not saved'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Hosting</span>
                <span className="preview-value">{savedBuildData.hosting || 'Not saved'}</span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Custom Domain</span>
                <span className="preview-value">{savedBuildData.customDomain || 'Not saved'}</span>
              </div>
            </div>
          </div>
        )}
      </div>











      {/* MAIN SECTION */}

      {/* POSSIBLE INPUTS:
      
      1. Build tool choice (optional)
      2. Environment variables (API keys, database url, etc)
      3. Hosting -- Vercel, Netlify, Render, AWS, GitHub Pages
      4. Custom Domain (hostinger, godaddy, etc)
      
      */}



      <div className="page-sections">

        {/* Section 1 for Build */}

















        <div className="page-card">
          <div className="card-header">
            <h3 className="card-title">⚙️ Build Configuration</h3>
            <p className="card-description">
              Configure your build environment
            </p>
          </div>



          <div className="build-grid-1">

            {/* ITEM 1 */}


            <div className="input-group">
              <label className="input-label">Build Tool (Optional)</label>
              <select
                className="modern-select"
                value={buildData.buildTool}
                onChange={(e) => handleBuildChange('buildTool', e.target.value)}
              >
                <option value="">Select Build Tool</option>
                <option value="vite">Vite</option>
                <option value="webpack">Webpack</option>
                <option value="parcel">Parcel</option>
                <option value="rollup">Rollup</option>
                <option value="create-react-app">Create React App</option>
                <option value="next.js">Next.js</option>
                <option value="nuxt.js">Nuxt.js</option>
                <option value="gatsby">Gatsby</option>
              </select>
            </div>



            {/* ITEM 2 */}

            <div className="input-group">
              <label className="input-label">Hosting</label>
              <select
                className="modern-select"
                value={buildData.hosting}
                onChange={(e) => handleBuildChange('hosting', e.target.value)}
              >
                <option value="">Select Hosting</option>
                <option value="vercel">Vercel</option>
                <option value="netlify">Netlify</option>
                <option value="render">Render</option>
                <option value="aws">AWS</option>
                <option value="github-pages">GitHub Pages</option>
                <option value="firebase">Firebase Hosting</option>
                <option value="surge">Surge</option>
                <option value="heroku">Heroku</option>
              </select>
            </div>






          </div>

        </div>





      </div>
      <br></br>
      <div className="page-sections">

        {/* Section 2 for Deploy */}

















        <div className="page-card">
          <div className="card-header">
            <h3 className="card-title">⚙️ Deployment Configuration</h3>
            <p className="card-description">
              Configure your deployment environment
            </p>
          </div>



          <div className="build-grid-1">



            {/* ITEM 2 */}

            <div className="input-group">
              <label className="input-label">Hosting</label>
              <select
                className="modern-select"
                value={buildData.hosting}
                onChange={(e) => handleBuildChange('hosting', e.target.value)}
              >
                <option value="">Select Hosting</option>
                <option value="vercel">Vercel</option>
                <option value="netlify">Netlify</option>
                <option value="render">Render</option>
                <option value="aws">AWS</option>
                <option value="github-pages">GitHub Pages</option>
                <option value="firebase">Firebase Hosting</option>
                <option value="surge">Surge</option>
                <option value="heroku">Heroku</option>
              </select>
            </div>



            {/* ITEM 3 */}


            <div className="input-group">
              <label className="input-label">Custom Domain</label>
              <select
                className="modern-select"
                value={buildData.customDomain}
                onChange={(e) => handleBuildChange('customDomain', e.target.value)}
              >
                <option value="">Select Domain Provider</option>
                <option value="hostinger">Hostinger</option>
                <option value="godaddy">GoDaddy</option>
                <option value="namecheap">Namecheap</option>
                <option value="cloudflare">Cloudflare</option>
                <option value="google-domains">Google Domains</option>
                <option value="domain.com">Domain.com</option>
                <option value="none">No Custom Domain</option>
              </select>
            </div>



          </div>





          <div className="save-section">
            <button className="save-button" onClick={saveBuildData}>
              Save Code Data
            </button>
            <button className="clear-button" onClick={clearBuildData}>
              Clear Code Data
            </button>
          </div>









        </div>





      </div>

























      <div className="next-section">
        <button
          className="prev-button"
          onClick={() => (window.location.href = "/code")}
        >
          ← Back to Code
        </button>
        <button
          className="next-button"
          // amazonq-ignore-next-line
          onClick={() => (window.location.href = "/export")}
        >
          Continue to Export →
        </button>
      </div>








    </div>
  );
}



export default Build;
