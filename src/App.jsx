// Each componet have some message that describe functionalities of the page when user visits first time.

import Build from './components/Build'
import Code from './components/Code'
import Design from './components/Design'
import Export from './components/Export'
import Planning from './components/Planning'

import { useState } from 'react'
import polarisLogo from './assets/polaris_logo.png'
import polarisLogo2 from './assets/polaris_logo.png'

import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'

function AppContent() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (

    <>
      {isHome &&


        <>

          <div>
            <a>
              <img src={polarisLogo} className="polaris_logo" alt="Polaris logo" />
            </a>
          </div>


          {/*
          <div className='logo_holder'>
          <a> 
          <img src={polarisLogo2} alt="Polaris logo" />
         </a>
         </div> */ }


          <h1>Polaris</h1>

          <div>
            <Link to="/planning">
              <button className='build-now'>
                START BUILDING NOW
              </button>
            </Link>
          </div>

          <p className="read-the-docs">
            Polaris helps you create your project faster
          </p>




        </>

      }

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



  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}


export default App;
