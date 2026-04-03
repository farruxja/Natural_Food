import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya vaqti
      once: false,// faqat 1 marta ishlaydi
    });
  }, []);

  return (
    <div className="App">
<Header/>
<ScrollToTop/>
<Outlet/>
<Footer/>
    </div>
  );
}

export default App;
