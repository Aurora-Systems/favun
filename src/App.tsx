import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import { Navbar } from './components/NavigationBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from 'react-floating-whatsapp';

function App() {
  return (
    <div className="App container">
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Values />
      <Contact />
      <Footer />
      <FloatingWhatsApp
        phoneNumber='+263782065654'
        avatar='https://cdn.clipond.com/Favun/logo.png'
        accountName='Favun Advisory'
      />
    </div>
  );
}

export default App;
