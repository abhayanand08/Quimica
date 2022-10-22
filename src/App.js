import logo from './logo.svg';
import './App.css';
import { Navbar } from './components';
import { AboutUs, ContactUs, Events, Gallery, Home, Team } from './container';
import Header from './container/Header/Header';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header />
     <AboutUs />
     <Gallery />
     <Events />
     <Team />
     <ContactUs />
    </div>
  );
}

export default App;
