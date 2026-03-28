import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';


function App() {
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
