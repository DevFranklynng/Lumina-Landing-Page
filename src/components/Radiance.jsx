import React from "react";
function Radiance(){
    const stats = [
    {
      value: "94%",
      label: "Reported visibly brighter, smoother skin after consistent use",
    },
    {
      value: "4.9",
      label: "average rating from thousands of skincare enthusiasts and lovers",
    },
    {
      value: "100%",
      label: "paraben-free, dermatologist-tested, gentle formulations",
    },
  ];

  const products = [
    {
      img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=600&auto=format&fit=crop",
      alt: "Orange slice skincare product",
    },
    {
      img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
      alt: "Dropper bottle serum",
    },
    {
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop",
      alt: "Cream pump bottle",
    },
  ];
    
       

  return (
    <div className="font-sans text-stone-900">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#FCF6EE] border-t-4 border-orange-400">
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-10 pb-12">

          {/* Small heading */}
          <p className="flex items-center gap-1 text-orange-500 text-[11px] font-medium mb-3">
            <span>✦</span>
            Trusted by Thousands
          </p>

          {/* Main heading + description */}
          <div className="grid md:grid-cols-3 gap-8 items-start">

            <h1 className="md:col-span-2 font-serif text-[38px] md:text-[48px] leading-[1.05] tracking-tight">
              Radiance Begins With{" "}
              <span className="italic text-orange-500">
                Intentional
              </span>{" "}
              Care.
            </h1>

            <p className="text-[10px] md:text-[11px] text-stone-600 leading-relaxed max-w-[170px] md:pt-2">
              Every Lumina formula is crafted to balance visible results with
              a gentle, luxurious skincare experience.
            </p>

          </div>

          {/* ================= STAT CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-9">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-sm px-4 py-4 h-[105px] flex flex-col justify-between shadow-sm"
              >
                <p className="text-[9px] leading-[1.35] text-stone-600 max-w-[180px]">
                  {stat.label}
                </p>

                <p className="font-serif text-[32px] leading-none">
                  {stat.value}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= NEW ARRIVALS ================= */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-11 pb-16">

          {/* Small heading */}
          <p className="flex items-center gap-1 text-orange-500 text-[11px] font-medium mb-3">
            <span>✦</span>
            New Arrivals
          </p>

          {/* Heading + description */}
          <div className="grid md:grid-cols-3 gap-8 items-start mb-7">

            <h2 className="md:col-span-2 font-serif text-[38px] md:text-[43px] leading-[1.05] tracking-tight">
              <span className="italic text-black-900">Designed</span>
              <span className="italic text-orange-500">
                for
              </span>
             <span className="italic text-black-900">Radiance</span> 
            </h2>

            <p className="text-[10px] md:text-[11px] text-stone-600 leading-relaxed max-w-[175px] md:pt-2">
              Thoughtfully formulated skincare essentials designed to brighten,
              deeply hydrate, and restore your natural glow.
            </p>

          </div>


          {/* ================= PRODUCT CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

            {products.map((product, index) => (
              <div
                key={product.alt}
                className="relative h-[300px] sm:h-[250px] md:h-[290px] rounded-xl overflow-hidden bg-stone-100"
              >

                <img
                  src={product.img}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                />

                {/* Heart button */}
                {index === 1 && (
                  <button
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm text-orange-500"
                    aria-label="Add to favourites"
                  >
                    ♡
                  </button>
                )}

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  
  )
}
    export default Radiance;