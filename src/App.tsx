
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Banner/>
      </main>
      {/* <Footer /> */}
      <Footer/>
    </div>
  )
}

export default App
