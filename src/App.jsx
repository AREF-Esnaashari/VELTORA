import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استایل‌های ضروری AOS
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدت زمان انیمیشن (میلی‌ثانیه)
      once: true, // انیمیشن فقط یک‌بار هنگام اسکرول اجرا شود
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
