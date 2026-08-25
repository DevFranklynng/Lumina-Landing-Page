import testimonials from "./data/testimonial";
import Profile from "../assets/wealth1.png"

function Testimonials() {
  return (

        <>
            <section className="bg-[#FBF6F0] py-10 px-6 md:py-16 md:px-10">
                <div className="mx-auto max-w-7xl">
                    
                    <h4 className="text-sm text-[#E2661F]/60 mb-10"><span>✦{" "}</span>Loved by the lumina community</h4>


                    <h2 className="max-w-2xl mx-auto font-serif text-4xl leading-tight md:text-6xl text-[#1A1A1A] tracking-wide">
                        Real{" "} Rituals.{" "}
                        <span className="block">
                            <span className="italic text-[#E2661F]">Visible{" "}</span>Result.
                        </span>
                    </h2>

                    
                    <div className="relative mx-auto mt-16 max-w-xl text-[#FBF6F0]">

                        <div className="absolute inset-0 -rotate-12 rounded-[2rem] border-gray-900 bg-gray-900" />

                        <div className="absolute inset-0 rotate-6 rounded-[2rem] border border-green-600 bg-green-600" />

                        <div className="absolute inset-0 -rotate-6 rounded-[2rem] border border-purple-600 bg-purple-600" />



                        {testimonials.slice(0, 1).map((testimonial) => (
                            <article
                                key={testimonial.id}
                                className="relative z-10 rounded-[2rem] bg-[#E2661F] p-8 shadow-xl md:p-12 "
                            >
                                <span className="font-serif text-4xl leading-none md:text-6xl">
                                “
                                </span>

                                <p className="text-xl leading-relaxed md:text-xl text-justify">
                                {testimonial.quote}
                                </p>

                                <div className="mt-8 flex flex-row gap-3 items-start">
                                    <div className="size-12">
                                        <img src={Profile} alt="" className="rounded-full" />

                                    </div>

                                    <div className="flex flex-col items-start">
                                        <h3 className="font-medium">
                                            {testimonial.name}
                                        </h3>

                                        <p className="mt-1 text-sm">
                                            {testimonial.role}
                                        </p>

                                    </div>

                                    
                                </div>
                            </article>
                        ))}
                    
                    </div>

                </div>
            
            </section>

            <div className="bg-gray-900 py-10 px-6 md:py-16 md:px-10">
                <div className="overflow-hidden whitespace-nowrap">
                    
                    <span className="text-5xl text-[#E2661F]">Up TO 20% OFF{"  "}</span>
                    <span className="text-5xl">Up TO 20% OFF{"  "}</span>
                    <span className="text-5xl">Up TO 20% OFF{"  "}</span>
                    
                </div>

                <div className="overflow-hidden whitespace-nowrap">
                    
                    <span className="text-5xl text-[#E2661F]">Up TO 20% OFF{"  "}</span>
                    <span className="text-5xl">Up TO 20% OFF{"  "}</span>
                    <span className="text-5xl">Up TO 20% OFF{"  "}</span>
                    
                </div>
            </div>
        
        </>
  )
}

export default  Testimonials