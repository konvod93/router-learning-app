import { useNavigate, useLocation } from "react-router-dom";

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

export default Contact