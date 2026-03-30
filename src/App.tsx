
import './App.css'
import Banner from './components/Banner'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Header from './components/Header'
import TrustBadges from './components/TrustBadges'

function App() {

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Banner/>
        <Categories/>
        <TrustBadges />
      </main>
      {/* <Footer /> */}
      <Footer/>
    </div>
  )
}

export default App
