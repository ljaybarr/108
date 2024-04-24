import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Catalog />
      
      <Footer />
    </div>
  );
}

export default App;
