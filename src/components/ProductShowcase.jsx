import Container from './Container';
import SectionHeading from './SectionHeading';
import ProductCard from './ProductCard';
import { products } from './data/products';

const ProductShowcase = () => {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeading eyebrow="New Arrivals">
            Designed <em className="italic font-serif text-[#E2661F]">for</em> Radiance.
          </SectionHeading>
          <p className="max-w-xs text-sm text-[#6B6B6B]">
            Thoughtfully formulated skincare essentials designed to brighten, deeply hydrate, and restore your natural glow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductShowcase;