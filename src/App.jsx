import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NotFound from './pages/NotFound';
import ComingSoon from './pages/ComingSoon';
import ProductsPage from './pages/ProductsPage';
import { ProviderContext } from './Componenets/Context/ContextProductApi';
import AboutPage from './pages/AboutPage';
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);
  return (
    <BrowserRouter>
      <ProviderContext>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Products" element={<ProductsPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/commingsoon" element={<ComingSoon />} />
        </Routes>
      </ProviderContext>
    </BrowserRouter>
  );
}
