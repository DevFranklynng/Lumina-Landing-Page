import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from './components/ProductShowcase';
import Routine from "./components/Routine"

function App() {
  return (
    <div className="relative font-sans">
      <Navbar />
      <Hero /
      {/* teammate's <Radiance /> goes here between Hero and Products, per the mock */}
      <ProductShowcase />
      <Routine />
    </div>
  );
}

export default App