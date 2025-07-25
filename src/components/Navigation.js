import { useLocation } from "react-router-dom";

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

export default Navigation