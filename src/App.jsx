import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';

function App() {
  return (
    <div className="relative font-sans">
      <Navbar />
      <Hero />
      {/* teammate's <Radiance /> goes here between Hero and Products, per the mock */}
      <ProductShowcase />
    </div>
  );
}

export default App