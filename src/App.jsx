import './App.css'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="flex bg-white h-screen w-full">
      <Sidebar />
      <header>
        <title>Honey Notes</title>
      </header>
      <main>
        
        <h1>Welcome tu your Notes!</h1>
      </main>
      <footer>
        <p>© 2026 HoneyNote. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
