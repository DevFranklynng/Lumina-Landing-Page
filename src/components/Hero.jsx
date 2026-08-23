import { ArrowRight, Sparkles } from "lucide-react";
import { images } from "../assets/images";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f97316] px-4 pt-4">

      {/* Outer glow */}
      <div className="pointer-events-none absolute -left-32 -top-40 h-[600px] w-[600px] rounded-full bg-orange-300/30 blur-[120px]" />

      <div className="mx-auto max-w-[1400px]">

        {/* Main orange panel */}
        <div className="relative min-h-[760px] overflow-hidden rounded-[26px] bg-[#f86617]">

          {/* Background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,197,91,0.45),transparent_35%)]" />

          <div className="relative z-10 min-h-[760px] px-7 pb-7 pt-28 sm:px-10">

            {/* Eyebrow */}
            <div className="absolute left-7 top-7 flex items-center gap-1.5 text-[8px] uppercase tracking-[0.2em] text-white/60 sm:left-10">
              <Sparkles size={9} />
              The Lumina Ritual
            </div>

            {/* Giant title */}
            <div className="relative">

              <h1 className="relative z-20 font-serif text-[clamp(6rem,16vw,14rem)] font-normal leading-[0.72] tracking-[-0.07em] text-white">
                Lumina
              </h1>

              {/* Product composition */}
              <div className="pointer-events-none absolute -top-8 left-1/2 z-10 h-[470px] w-[600px] -translate-x-1/2 sm:h-[520px] sm:w-[700px]">

                {/* Photography */}
                <img
                  src={images.hero}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-75 mix-blend-multiply"
                />

                {/* Product 1 */}
                <div className="absolute bottom-4 left-[24%] h-[270px] w-[120px] rounded-t-[45px] bg-gradient-to-r from-orange-200 via-orange-100 to-orange-300 opacity-90 shadow-[0_30px_50px_rgba(0,0,0,0.2)] sm:h-[320px] sm:w-[140px]">
                  <span className="absolute left-0 right-0 top-28 text-center font-serif text-[11px] tracking-widest text-orange-800/70">
                    LUMINA
                  </span>
                </div>

                {/* Product 2 */}
                <div className="absolute bottom-0 left-[45%] h-[310px] w-[125px] rounded-t-[45px] bg-gradient-to-r from-orange-100 via-orange-200 to-orange-400 shadow-[0_30px_60px_rgba(0,0,0,0.25)] sm:h-[360px] sm:w-[145px]">
                  <span className="absolute left-0 right-0 top-32 text-center font-serif text-xs tracking-widest text-orange-900/70">
                    ✦
                  </span>

                  <span className="absolute left-0 right-0 top-40 text-center font-serif text-[11px] tracking-widest text-orange-900/70">
                    LUMINA
                  </span>
                </div>

                {/* Cream jar */}
                <div className="absolute bottom-0 left-[10%] h-[105px] w-[145px] rounded-[20px] bg-gradient-to-b from-white to-stone-200 shadow-[0_25px_45px_rgba(0,0,0,0.2)] sm:h-[125px] sm:w-[175px]">
                  <div className="absolute -top-4 left-2 right-2 h-7 rounded-full bg-white shadow-md" />

                  <p className="absolute left-0 right-0 top-12 text-center font-serif text-[11px] text-stone-500">
                    LUMINA
                  </p>
                </div>

              </div>

            </div>

            {/* Description */}
            <div className="absolute bottom-28 right-7 z-30 max-w-[190px] sm:right-12 sm:max-w-[220px]">

              <p className="text-[9px] leading-[1.7] text-white/70 sm:text-[10px]">
                We team up with dermatologists to create our formulas,
                making your skin feel great and show real results for all
                skin types.
              </p>

              <button className="group mt-4 flex items-center gap-2 rounded-md bg-lime-500 px-5 py-2 text-[9px] font-medium text-black transition hover:bg-lime-400">
                Shop Now

                <ArrowRight
                  size={11}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </div>

            {/* Customers */}
            <div className="absolute bottom-7 right-7 z-30 flex items-center gap-2 rounded-md border border-white/10 bg-orange-600/40 px-3 py-2 backdrop-blur-sm sm:right-12">

              <div className="flex -space-x-1.5">
                {[11, 12, 13, 14].map((id) => (
                  <img
                    key={id}
                    src={`https://i.pravatar.cc/80?img=${id}`}
                    alt=""
                    className="h-5 w-5 rounded-full border border-orange-500 object-cover"
                  />
                ))}
              </div>

              <div>
                <p className="text-[8px] font-medium text-white">
                  10K+ Happy Clients
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;