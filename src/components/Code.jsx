import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import "./Code.css";

function Code() {

   // Project Name Variable 

  const projectName = localStorage.getItem("projectName") || "your project";

  // for navigation between components

  const navigate = useNavigate();


  // Working data with their state (what user is currently editing)

  const [codeData, setCodeData] = useState({
    ideSelector: "",
    durationOfCode: "",
  });

  // Saved data with their state (what's been explicitly saved)

  const [savedCodeData, setSavedCodeData] = useState({
    ideSelector: "",
    durationOfCode: "",
  });

  // State Management for the Code Data Preview

  const [showCodePreview, setShowCodePreview] = useState(false);

  // Load saved Code data from local storage

  useEffect(() => {
    try {
      const savedCodeData = localStorage.getItem("projectCodeData");
      if (savedCodeData) {
        const parsedData = JSON.parse(savedCodeData);
        setSavedCodeData(parsedData);
        setCodeData(parsedData);
      }
    } catch (error) {
      console.log("Error loading code data: ", error);
    }
  }, []);

  // Manual save function for code data

  const saveCodeData = () => {
    try {
      localStorage.setItem("projectCodeData", JSON.stringify(codeData));
      setSavedCodeData(codeData);
    } catch (error) {
      console.log("Error saving code data: ", error);
    }
  };

  // Manual CLear Button

  const clearCodeData = () => {
    try {
      localStorage.removeItem("projectCodeData");
      const emptyData = {
        ideSelector: "",
        durationOfCode: "",
      };
      setCodeData(emptyData);
      setSavedCodeData(emptyData);
    } catch (error) {
      console.log("Error clearing code data: ", error);
    }
  };

  // Additional (Specific to Design.jsx)
  // Empty

  return (
    <div className="page-container">
      <div className="page-header">
        <h2 className="page-title">💻 Code Generation</h2>
        <p className="page-subtitle">
          Build {projectName}'s code plan
        </p>
      </div>

      {/* Preview for Code Data */}

      <div className="preview-card">
        <button
          className={`preview-toggle ${showCodePreview ? "active" : ""}`}
          onClick={() => setShowCodePreview(!showCodePreview)}
        >
          <span className="toggle-icon">{showCodePreview ? "▼" : "▶"}</span>
          {showCodePreview ? "Hide Code Data" : "Show Code Data"}
        </button>

        {showCodePreview && (
          <div className="preview-content">
            <div className="preview-grid">
              <div className="preview-item">
                <span className="preview-label">IDE</span>
                <span className="preview-value">
                  {savedCodeData.ideSelector || "Not saved"}
                </span>
              </div>

              <div className="preview-item">
                <span className="preview-label">Duration</span>
                <span className="preview-value">
                  {savedCodeData.durationOfCode
                    ? `${savedCodeData.durationOfCode} weeks`
                    : "Not saved"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

   {/* MAIN SECTION */}


      <div className="page-sections">

        <div className="page-card">
          <div className="card-header">
            <h3 className="card-title">⚙️ Code Configuration</h3>
            <p className="card-description">
              Configure your development environment
            </p>
          </div>

          <div className="typography-grid">
            <div className="input-group">
              <label className="input-label">IDE Selector</label>
              <select
                value={codeData.ideSelector}
                onChange={(e) =>
                  setCodeData({ ...codeData, ideSelector: e.target.value })
                }
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
                onChange={(e) =>
                  setCodeData({ ...codeData, durationOfCode: e.target.value })
                }
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
              Save Code Data
            </button>
            <button className="clear-button" onClick={clearCodeData}>
              Clear Code Data
            </button>
          </div>
        </div>
      </div>

      <div className="next-section">
         <button
          className="prev-button"
         onClick={() => navigate('/design')}   // prev



        >
          ← Back to Design
        </button>
        <button
          className="next-button"
         onClick={() => navigate('/build')}    // next
        >
          Continue to Build →
        </button>
      </div>
    </div>
  );
}

export default Code;
