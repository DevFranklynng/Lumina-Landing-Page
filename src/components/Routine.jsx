import { useState } from "react";

function Routine(){
    return(
            <section className="bg-black flex flex-col items-center justify-center p-16">
                <p className="text-orange-500 font-serif">The Lumina Effect</p>
                <h2 className="text-5xl mt-2 max-w-lg text-center font-serif text-white">A Simple Routine for Lasting Radiance</h2>
                <p className="mt-5 max-w-lg text-center font-serif text-white">Carefully curated essentials designed to cleanse, replenish and
                protect your skin through every step of your daily ritual
                </p>
            

            <div className="max-w-5xl mx-auto relative flex flex-col items-center justify-center gap-6 md:gap-4 md:flex-row mt-9">
                <div className="relative z-20 w-full md:w-72 bg-orange-500 text-white p-8 rounded-2xl shadow-2xl transform md:-rotate-[-6deg] md:translate-y-4 hover:rotate-0 hover:scale-105">
                    <p className="font-serif text-4xl mb-4 opacity-90">01</p>
                    <h3 className="text-2xl font-bold mb-4 leading-tight font-serif mt-9">Cleanse & Refresh</h3>
                    <p className="text-sm leading-relaxed opacity-95 mt-9">Begin with a gentle cleanse to remove impurities while preserving
                    your skin's natural moisture balance
                    </p>
                </div>

                <div className="relative z-20 w-full md:w-72 bg-zinc-900 text-white p-8 rounded-2xl shadow-2xl">
                   <p className="font-serif text-4xl mb-4 opacity-90">02</p>
                    <h3 className="text-2xl font-bold mb-4 leading-tight font-serif mt-9">Treat & Brighten</h3>
                    <p className="text-sm leading-relaxed opacity-95 mt-9">Target dullness and uneven texture with active ingredients formulated to visibly enhance radiance</p>
                </div>

                <div className="relative z-20 w-full md:w-72 bg-zinc-900 text-white p-8 rounded-2xl shadow-2xl">
                    <p className="font-serif text-4xl mb-4 opacity-90">03</p>
                    <h3 className="text-2xl font-bold mb-4 leading-tight font-serif mt-9">Hydrate & Protect</h3>
                    <p className="text-sm leading-relaxed opacity-95 mt-9">Lock in lasting hydration and support & healthy skin barrier for a smooth, luminous finish</p>
                </div>
            </div>
            </section>
    )
}
export default Routine;