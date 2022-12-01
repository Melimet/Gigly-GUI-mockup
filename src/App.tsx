import './styles/App.css'
import Gigs from './components/Gigs'
import Navbar from './components/Navbar'
import Advertisement from './components/Advertisement'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Advertisement />
      <Gigs />
    </div>
  )
}

export default App
