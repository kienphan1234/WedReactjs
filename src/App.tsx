import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Phần nội dung thay đổi tùy theo URL */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* path="/collection/:type" giúp ta dùng 1 file cho nhiều loại Loa, Amply... */}
            <Route path="/collection/:type" element={<CollectionPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;