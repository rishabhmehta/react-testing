import "./App.css"
import { Skills } from "./components/skills/skills"

function App() {
  return (
    <div className="App">
      <Skills skills={["HTML", "CSS", "JavaScript"]} />
    </div>
  )
}

export default App
