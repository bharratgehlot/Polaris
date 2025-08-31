import { useState, useEffect } from "react";
import Build from "./components/Build";
import Code from "./components/Code";
import Design from "./components/Design";
import Export from "./components/Export";
import Planning from "./components/Planning";
import polarisLogo from "./assets/polaris_logo_2.png";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

function AppContent() {
  // Variables for storing

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  // Checks previously stored data

  const hasStoredData = () => {
    return (
      localStorage.getItem("projectName") ||
      localStorage.getItem("projectDescription") ||
      localStorage.getItem("projectPlanningData") ||
      localStorage.getItem("projectDesignData") ||
      localStorage.getItem("projectCodeData") ||
      localStorage.getItem("projectBuildData")
    );
  };

  // Logo Spins

  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsSpinning(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogoClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 2000);
  };

  // Clear button for previous data cleaning

  const clearPreviousData = () => {
    localStorage.clear();
    setProjectName("");
    setProjectDescription("");
    alert("All previous data cleared");
  };

  // saving project name and description to localstorage

  const handleStartBuilding = (e) => {
    if (!projectName.trim()) {
      e.preventDefault();
      alert("Project name is required");
      return;
    }

    console.log("Project Name:", projectName);
    console.log("Project Description:", projectDescription);
    localStorage.setItem("projectName", projectName);
    localStorage.setItem("projectDescription", projectDescription);
    console.log("Data saved to localStorage");
  };

  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      {isHome && (
        <>
          <div
            className={`polaris_logo ${isSpinning ? "spinning" : ""}`}
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          >
            <img
              src={polarisLogo}
              className="polaris_image"
              alt="Polaris logo"
            />
          </div>

          <h1>Polaris</h1>
          <br></br>

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

          {hasStoredData() && (
            <div>
              <button
                className="build-now"
                onClick={clearPreviousData}
                style={{ backgroundColor: "#dc3545", marginBottom: "10px" }}
              >
                Clear Previous Data
              </button>
            </div>
          )}

          <div>
            <Link to="/planning">
              <button className="build-now" onClick={handleStartBuilding}>
                START BUILDING
              </button>
            </Link>
          </div>
          <p className="read-the-docs">
            Polaris helps you create your project faster
          </p>
        </>
      )}

      {!isHome && (
        <nav>
          <Link to="/planning">Planning</Link>
          <Link to="/design">Design</Link>
          <Link to="/code">Code</Link>
          <Link to="/build">Build</Link>
          <Link to="/export">Export</Link>
        </nav>
      )}
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

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
