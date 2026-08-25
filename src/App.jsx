import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from './components/ProductShowcase';
import Routine from "./components/Routine"
import Radiance from "./components/Radiance";

function App() {
  return (
    <div className="relative font-sans">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Routine />
      <Radiance />
    </div>
  );
}

export default App
