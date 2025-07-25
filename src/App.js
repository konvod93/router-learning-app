import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Contact from './pages/Contact';

// Главный компонент навигации
const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-50';
  };

  return (
    <nav className="bg-white shadow-lg mb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-blue-800">
            🚀 React Router Demo
          </Link>
          
          <div className="flex space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/')}`}
            >
              Главная
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/about')}`}
            >
              О нас
            </Link>
            <Link
              to="/users"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/users')}`}
            >
              Пользователи
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/contact')}`}
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

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
            <Route path="/old-about" element={<Navigate to="/about" replace />} />
            
            {/* 404 страница - должна быть последней */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Информационная панель */}
        <div className="bg-gray-800 text-white p-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-lg font-semibold mb-3">📚 Что мы изучили:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-blue-300">Основы маршрутизации:</h4>
                <ul className="mt-1 space-y-1 text-gray-300">
                  <li>• BrowserRouter</li>
                  <li>• Routes и Route</li>
                  <li>• Link компонент</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-green-300">Продвинутые возможности:</h4>
                <ul className="mt-1 space-y-1 text-gray-300">
                  <li>• useParams hook</li>
                  <li>• Программная навигация</li>
                  <li>• Navigate компонент</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-purple-300">Хуки маршрутизации:</h4>
                <ul className="mt-1 space-y-1 text-gray-300">
                  <li>• useNavigate</li>
                  <li>• useLocation</li>
                  <li>• useParams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;