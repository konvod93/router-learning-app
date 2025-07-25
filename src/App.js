import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';



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