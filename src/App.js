import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import Footer from './components/Footer';



// Главный компонент приложения
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <div className="max-w-6xl mx-auto px-4 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="/contact" element={<Contact />} />

            {/* Перенаправление старых URL */}
            <Route
              path="/old-about"
              element={<Navigate to="/about" replace />}
            />

            {/* 404 страница - должна быть последней */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;