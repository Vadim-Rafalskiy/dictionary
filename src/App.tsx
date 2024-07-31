import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import WordsPage from './pages/WordsPage';
import Navigation from './coponents/Navigation';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/words" element={<WordsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <Navigation />
      <App />
    </HashRouter>
  );
}
