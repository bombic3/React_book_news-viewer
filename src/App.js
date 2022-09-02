import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>NEWS VEWER</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
      </>
  );
};

export default App;