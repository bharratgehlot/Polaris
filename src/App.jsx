import { useState } from 'react'
import polarisLogo from './assets/polaris_logo.png'
import polarisLogo2 from './assets/polaris_logo.png'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href=" " target="_blank">
          <img src={polarisLogo} className="polaris_logo" alt="Polaris logo" />
        </a>
      </div>

 {/*
<div className='logo_holder'>
        <a> 
          <img src={polarisLogo2} alt="Polaris logo" />
        </a>
      </div>
 */}
 
 <h1>Polaris</h1>

         <div>
        <button>
          START BUILDING NOW
        </button>
      </div>

      <p className="read-the-docs">
        Polaris helps you create your project faster
      </p>
    </>
  )
}

export default App
