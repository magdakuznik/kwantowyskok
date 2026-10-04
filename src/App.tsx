import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { KwantowySkokPage } from './pages/KwantowySkokPage';

function SecurityAndCanonicalGuard() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname.toLowerCase();
      // Ochrona przed fałszywymi subdomenami w domenie magdakuznik.pl (poza www)
      if (
        hostname.endsWith('.magdakuznik.pl') &&
        hostname !== 'www.magdakuznik.pl' &&
        hostname !== 'magdakuznik.pl'
      ) {
        window.location.replace(`https://magdakuznik.pl${window.location.pathname}`);
      }
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <SecurityAndCanonicalGuard />
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
