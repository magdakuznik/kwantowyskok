import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { KwantowySkokPage } from './pages/KwantowySkokPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Strona główna (index) - tymczasowe przekierowanie na /kwantowy-skok */}
        {/* Gdy powstanie docelowy projekt strony głównej, wystarczy zamienić poniższy komponent na np. <HomePage /> */}
        <Route path="/" element={<Navigate to="/kwantowy-skok" replace />} />

        {/* Podstrona warsztatu: magdakuznik.pl/kwantowy-skok */}
        <Route path="/kwantowy-skok" element={<KwantowySkokPage />} />

        {/* Przekierowanie dla pozostałych ścieżek */}
        <Route path="*" element={<Navigate to="/kwantowy-skok" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
