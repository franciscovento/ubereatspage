import './App.css';
import CardsSection from './components/CardsSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ListNames from './components/ListNames';
import MapSection from './components/MapSection';
import NavBar from './components/NavBar';

function App() {


  return (
    <div >
    <NavBar />
    <Hero />
    <CardsSection />
    <MapSection/>
    <ListNames />
    <Footer />
    </div>
  );
}

export default App;
