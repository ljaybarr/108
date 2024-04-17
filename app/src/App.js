import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuantityPicker from './components/QuantityPicker';

function App() {
  return (
    <div className="App">
      <Navbar />

      <h1>Welcome to my super store!</h1>

      <QuantityPicker />

      <Footer />
    </div>
  );
}

export default App;
