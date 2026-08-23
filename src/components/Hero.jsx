import Container from "./Container";
import Button from "./Button";
import TrustFeatures from "./TrustFeatures";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#F0842E] via-[#E2661F] to-[#C9520F] pt-28 pb-10 overflow-hidden">
      <div className="w-full px-6 md:px-10">
        <h1 className="relative z-0 font-serif italic text-white text-[clamp(4.5rem,22vw,22rem)] leading-[0.8] tracking-tight select-none whitespace-nowrap text-center">
          Lumina
        </h1>
      </div>
      <Container>
        <div className="mt-8 grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1640625696922-1fd63c0b97c9?fm=jpg&q=80&w=1400&auto=format&fit=crop"
            alt="Vitamin C skincare bottle with fresh oranges"
            className="w-full max-w-2xl mx-auto h-[220px] sm:h-[300px] object-cover rounded-2xl shadow-2xl"
          />

          <div className="flex flex-col gap-4">
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-white/90">
              <p className="text-sm leading-relaxed">
                We team up with dermatologists to create our formulas, making
                sure they feel great and show real results for all skin types.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="light" icon>
                Shop Now
              </Button>
              <div className="flex items-center gap-2 text-white">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="w-8 h-8 rounded-full border-2 border-white bg-[#F4A15C]"
                    />
                  ))}
                </div>
                <div className="text-xs leading-tight">
                  <p className="font-semibold">10K+</p>
                  <p className="text-white/70">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-10">
        <TrustFeatures />
      </div>
    </section>
  );
};

export default Hero;
