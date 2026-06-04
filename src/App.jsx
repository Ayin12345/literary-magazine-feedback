import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';

import Navbar         from './components/Navbar';
import Footer         from './components/Footer';
import ScrollToTop    from './components/ScrollToTop';

import Home           from './pages/Home';
import Submissions    from './pages/Submissions';
import AboutUs        from './pages/AboutUs';
import Achievements   from './pages/Achievements';
import Artworks       from './pages/Artworks';
import PreviousIssues from './pages/PreviousIssues';
import GoFan          from './pages/GoFan';
import Deadlines      from './pages/Deadlines';
import NotFound       from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="site-main">
        <Routes>
          <Route path="/"                element={<Home />} />
          <Route path="/submissions"     element={<Submissions />} />
          <Route path="/about"           element={<AboutUs />} />
          <Route path="/achievements"    element={<Achievements />} />
          <Route path="/artworks"        element={<Artworks />} />
          <Route path="/previous-issues" element={<PreviousIssues />} />
          <Route path="/gofan"           element={<GoFan />} />
          <Route path="/deadlines"       element={<Deadlines />} />
          <Route path="*"               element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
