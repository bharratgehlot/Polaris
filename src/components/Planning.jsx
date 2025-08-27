import './Planning.css'

function Planning() {
  const frontendOptions = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'HTML, CSS, Javascript']
  const backendOptions = ['None','Node.js', 'Python', 'Java', 'C#', '.NET', 'PHP', 'Go']
  const databaseOptions = ['None','MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Firebase']
  const featuresOptions = ['User Authentication', 'Payment Integration', 'Real-time Chat', 'File Upload', 'Email Notifications', 'Search Functionality', 'Admin Dashboard', 'API Integration', 'Dark Mode', 'Mobile Responsive']


  return (
    <div className="planning-container">
      <h2 className="planning-title">Project Planning</h2>

      <div className="input-group">
        <label className="input-label">Frontend:</label>
        <select className="dropdown-select">
          <option value="">Select a frontend</option>
          {frontendOptions.map(option => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>


      <div className="input-group">
        <label className="input-label">Backend:</label>
        <select className="dropdown-select">
          <option value="">Select a backend</option>
          {backendOptions.map(option => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>


     <div className="input-group">
       <label className="input-label">Database:</label>
       <select className="dropdown-select">
         <option value="">Select a database</option>
         {databaseOptions.map(option => (
           <option key={option} value={option.toLowerCase()}>
             {option}
           </option>
         ))}
       </select>
     </div>



<div className="input-group">
  <label className="input-label">Number of pages:</label>
  <select className="dropdown-select">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10+">10+</option>
  </select>
</div>

<div className="input-group">
  <label className="input-label">Styling Libraries:</label>
  <select className="dropdown-select">
    <option value="">Select a library</option>
    <option value="tailwind">Tailwind CSS</option>
    <option value="bootstrap">Bootstrap</option>
    <option value="plain-css">Plain CSS</option>
    <option value="materialui">Material-UI</option>
    <option value="antd">Ant Design</option>
    <option value="chakra">Chakra UI</option>
    <option value="bulma">Bulma</option>
    <option value="semantic">Semantic UI</option>
    <option value="foundation">Foundation</option>
  </select>
</div>



<div className="input-group">
  <label className="input-label">Features needed:</label>
  <div className="options-scroll">
    {featuresOptions.map(option => (
      <div key={option} className="option-item">
        <input type="checkbox" id={`features-${option}`} />
        <label htmlFor={`features-${option}`}>{option}</label>
      </div>
    ))}
  </div>
</div>














    </div>
  )
}

export default Planning