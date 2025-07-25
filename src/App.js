import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';
import About from './pages/About';

// Компонент главной страницы
const Home = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">🏠 Главная страница</h2>
      <p className="text-gray-700 mb-4">
        Добро пожаловать в демо React Router! Это главная страница нашего приложения.
      </p>
      <div className="space-y-2">
        <p>✨ Основные возможности навигации:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Переходы между страницами</li>
          <li>Динамические маршруты</li>
          <li>Программная навигация</li>
          <li>Защищенные маршруты</li>
        </ul>
      </div>
    </div>
  );
};

// Компонент страницы "О нас"
<About />

// Компонент списка пользователей
const Users = () => {
  const users = [
    { id: 1, name: 'Алексей Петров', role: 'Frontend Developer' },
    { id: 2, name: 'Мария Иванова', role: 'UI/UX Designer' },
    { id: 3, name: 'Дмитрий Сидоров', role: 'Backend Developer' }
  ];

  return (
    <div className="bg-purple-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-purple-800 mb-4">👥 Пользователи</h2>
      <p className="text-gray-700 mb-4">
        Список пользователей с динамическими ссылками. Кликните на любого пользователя для просмотра деталей.
      </p>
      <div className="grid gap-3">
        {users.map(user => (
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-purple-400"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.role}</p>
              </div>
              <span className="text-purple-600">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Компонент детальной информации о пользователе
const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const users = {
    '1': { name: 'Алексей Петров', role: 'Frontend Developer', email: 'alexey@example.com', projects: 15 },
    '2': { name: 'Мария Иванова', role: 'UI/UX Designer', email: 'maria@example.com', projects: 8 },
    '3': { name: 'Дмитрий Сидоров', role: 'Backend Developer', email: 'dmitry@example.com', projects: 12 }
  };

  const user = users[id];

  if (!user) {
    return (
      <div className="bg-red-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-red-800 mb-4">❌ Пользователь не найден</h2>
        <p className="text-gray-700 mb-4">
          Пользователь с ID {id} не существует.
        </p>
        <button
          onClick={() => navigate('/users')}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          ← Вернуться к списку
        </button>
      </div>
    );
  }

  return (
    <div className="bg-indigo-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">👤 Профиль пользователя</h2>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{user.name}</h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-600">Должность:</p>
            <p className="font-medium">{user.role}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Email:</p>
            <p className="font-medium">{user.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">ID пользователя:</p>
            <p className="font-medium">#{id}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Проектов:</p>
            <p className="font-medium">{user.projects}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate('/users')}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            ← Назад к списку
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            🏠 На главную
          </button>
        </div>
      </div>
    </div>
  );
};

// Компонент контактов с программной навигацией
const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Имитация отправки формы
    alert('Сообщение отправлено! Перенаправляем на главную...');
    navigate('/', { replace: true });
  };

  return (
    <div className="bg-orange-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-orange-800 mb-4">📞 Контакты</h2>
      
      <div className="bg-white p-6 rounded-lg shadow mb-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ваше имя:
            </label>
            <input
              type="text"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Введите ваше имя"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Сообщение:
            </label>
            <textarea
              required
              rows="4"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Введите ваше сообщение"
            />
          </div>
          
          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Отправить сообщение
          </button>
        </form>
      </div>

      <div className="bg-blue-100 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">🔧 Информация о маршруте:</h3>
        <p className="text-sm text-blue-700">
          <strong>Текущий путь:</strong> {location.pathname}
        </p>
        <p className="text-sm text-blue-700">
          <strong>Search параметры:</strong> {location.search || 'отсутствуют'}
        </p>
      </div>
    </div>
  );
};

// Компонент страницы 404
const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-red-50 p-6 rounded-lg text-center">
      <h2 className="text-6xl font-bold text-red-600 mb-4">404</h2>
      <h3 className="text-2xl font-bold text-red-800 mb-4">Страница не найдена</h3>
      <p className="text-gray-700 mb-6">
        К сожалению, запрашиваемая страница не существует.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => navigate('/')}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          🏠 На главную
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          ← Назад
        </button>
      </div>
    </div>
  );
};

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