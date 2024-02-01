import './App.css'
import data from '/data'; 
function App() {
  return (
    <div>
      <img src="/src/assets/WhatsApp Image 2024-01-31 at 19.11.45-min.jpeg" alt="" />
      <p>{data.speakerIntro}</p>
      <a href={data.formLink} rel="noopener noreferrer">
        Register here
      </a>
    </div>
  )
}

export default App
