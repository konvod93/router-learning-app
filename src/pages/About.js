
const About = () => {
  return (
    <div className="bg-green-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-green-800 mb-4">ℹ️ О нас</h2>
      <p className="text-gray-700 mb-4">
        Эта страница демонстрирует базовую навигацию в React Router.
      </p>
      <div className="bg-white p-4 rounded border-l-4 border-green-400">
        <h3 className="font-semibold text-green-700">Что такое React Router?</h3>
        <p className="text-sm text-gray-600 mt-2">
          React Router - это стандартная библиотека для маршрутизации в React приложениях,
          которая позволяет создавать Single Page Applications (SPA) с множественными страницами.
        </p>
      </div>
    </div>
  );
};

export default About