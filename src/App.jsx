import { useState, useEffect } from "react";
import Build from "./components/Build";
import Code from "./components/Code";
import Design from "./components/Design";
import Export from "./components/Export";
import Planning from "./components/Planning";
import polarisLogo from "./assets/polaris_logo_2.png";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

function AppContent() {
  // Navigate variable

  const navigate = useNavigate();

  // Variables for storing data

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  // Checks if there is previously stored data

  const hasStoredData = () => {
    try {
      return (
        localStorage.getItem("projectName") ||
        localStorage.getItem("projectDescription") ||
        localStorage.getItem("projectPlanningData") ||
        localStorage.getItem("projectDesignData") ||
        localStorage.getItem("projectCodeData") ||
        localStorage.getItem("projectBuildData")
      );
    } catch (error) {
      return false;
    }
  };

  // Logo Spinning State and user click delay

  const [isSpinning, setIsSpinning] = useState(false);
  const [canClick, setCanClick] = useState(true);

  // Logo Spins logic
  useEffect(() => {
    const handleDOMLoaded = () => {
      // Add 3 second delay so page loads
      setCanClick(false);
      setTimeout(() => {
        setIsSpinning(true);
        setTimeout(() => {
          setIsSpinning(false);
          setCanClick(true);
        }, 2000);
      }, 2500);
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDOMLoaded);
    } else {
      handleDOMLoaded();
    }

    return () =>
      document.removeEventListener("DOMContentLoaded", handleDOMLoaded);
  }, []);

  // Click on logo to make it spins

  const handleLogoClick = () => {
    if (!canClick) return;

    setCanClick(false);
    setIsSpinning(true); // NEW: Immediate spin (removed setTimeout)
    setTimeout(() => {
      setIsSpinning(false);
      setTimeout(() => setCanClick(true), 200); // NEW: 200ms cooldown after animation
    }, 2000);
  };

  // Clear button for previous data cleaning

  const clearPreviousData = () => {
    try {
      localStorage.clear();
      setProjectName("");
      setProjectDescription("");
      alert("All previous data cleared");
      setProjectName(""); // Force to rerender the page. remove it if causes some problems
    } catch (error) {
      alert("Failed to clear data");
    }
  };

  // Saving project name and description to localStorage

  const handleStartBuilding = () => {
    if (!projectName.trim()) {
      alert("Project name is required");
      return;
    }

    try {
      localStorage.setItem("projectName", projectName);
      localStorage.setItem("projectDescription", projectDescription);
      navigate("/planning");
    } catch (error) {
      alert("Failed to save project data");
    }
  };

  // Checks if user is on home page or not ?

  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      {isHome && (
        <>
          {/* Logo Spins */}

          <div
            className={`polaris_logo ${isSpinning ? "spinning" : ""}`}
            onClick={handleLogoClick}
            style={{ cursor: canClick ? "pointer" : "not-allowed" }}
          >
            <img
              src={polarisLogo}
              className="polaris_image"
              alt="Polaris logo"
            />
          </div>

          {/* Heading */}
          <h1>Polaris</h1>
          <br />

          {/* toast notifier */}

          <div className="toast-container" id="toast-container"></div>

          {/* Project Name and description */}

          <div>
            <input
              type="text"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>

          <div>
            <textarea
              placeholder="Project Description"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              maxLength={500}
            />
          </div>

          {/* Build button */}

          <div>
            <button className="build-now" onClick={handleStartBuilding}>
              START BUILDING
            </button>
          </div>

          {/* Clear button */}

          {hasStoredData() && (
            <div>
              <button className="clear-now" onClick={clearPreviousData}>
                Clear Previous Data
              </button>
            </div>
          )}

          <p className="read-the-docs">
            Polaris helps you create your project faster
          </p>
        </>
      )}

      {/* Routing (visible to all pages except home page) */}

      {!isHome && (
        <nav>
          <Link to="/planning">Planning</Link>
          <Link to="/design">Design</Link>
          <Link to="/code">Code</Link>
          <Link to="/build">Build</Link>
          <Link to="/export">Export</Link>
        </nav>
      )}

      {/* Route used by all pages and components */}

      <Routes>
        <Route path="/" element={null} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/design" element={<Design />} />
        <Route path="/code" element={<Code />} />
        <Route path="/build" element={<Build />} />
        <Route path="/export" element={<Export />} />
      </Routes>
    </>
  );
}

// Main function that binds the AppContent function

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
