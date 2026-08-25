import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Radiance from "./components/Radiance";
import ProductShowcase from './components/ProductShowcase';
import Routine from "./components/Routine"
import Testimonial from "./components/Testimonial";


function App() {
  return (
    <div className="relative font-sans">
      <Navbar />
      <Hero />
      <Radiance />
      <ProductShowcase />
      <Routine />
      <Testimonial />
    </div>
  );
}

export default App
