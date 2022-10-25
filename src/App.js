import logo from './logo.svg';
import './App.css';
import { Footer, Navbar } from './components';
import { AboutUs, ContactUs, Events, Gallery, Home, Team } from './container';
import Header from './container/Header/Header';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header />
     <AboutUs />
     <Events />
     <Gallery />
     <Team />
     <ContactUs />
     <Footer />
    </div>
  );
}

export default App;
