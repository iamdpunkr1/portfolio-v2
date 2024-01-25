import Navbar from "./components/Navbar"
import './App.css'
import Hero from "./components/Hero"
import Projects from "./components/Projects"
function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Projects/>
    </div>
  )
}

export default App
