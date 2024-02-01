import './App.css'
import data from '/data'; 
function App() {
  return (
    <div>
      <img src={data.banner} alt="umang" />
      <p>{data.speakerIntro}</p>
      <a href={data.formLink} rel="noopener noreferrer">
        Register here
      </a>
    </div>
  )
}

export default App
