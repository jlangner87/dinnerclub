import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <h1>App JS is rendering</h1>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
