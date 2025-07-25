import { useNavigate } from "react-router-dom";

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

export default NotFound