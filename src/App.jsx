import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from './components/ProductShowcase';
import Routine from "./components/Routine"
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="relative font-sans">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Routine />
      <Testimonial />
    </div>
  );
}

export default App
