import React, { useEffect, useRef } from "react";
import { ShieldCheck, Award, Leaf, CheckCircle } from "lucide-react";


const Highlight = () => {
  const sectionRef = useRef(null);


  return (
    <section
      ref={sectionRef}
      className="py-40  min-h-screen flex flex-col items-center font-manrope justify-start bg-primarybg"
    >
      <div className="bg-blue-950">
        <div className="mx-auto px-6 py-10">
          <div className="grid grid-cols-2 gap-8">
            <h2 className="header-title text-3xl font-bold text-white">
              Pioneering Excellence in Plastic Injection Molding, Polyurethane
              Casting, and Epoxy Casting.
            </h2>
            <div className="flex items-center justify-start">
              <div className="flex gap-32">
                <div className="text-center counter">
                  <div className="text-primaryYellow text-6xl font-bold mb-3">100+</div>
                  <p className="text-gray-400 text-lg">Parts Developed</p>
                </div>

                <div className="text-center counter">
                  <div className="text-primaryYellow text-6xl font-bold mb-3">1000</div>
                  <p className="text-gray-400 text-lg">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Noteworthy Points Section */}
<div className="py-16 points-container">
  <div className="container mx-auto px-8 py-20">
    <h3 className="text-center text-3xl font-bold font-manrope text-slate-800 mb-16 underline underline-offset-8 decoration-primaryYellow">
      NOTEWORTHY POINTS
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-40 max-w-4xl mx-auto">
      <div className="flex flex-col items-center point">
        <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
          <ShieldCheck className="w-8 h-8 text-white" />
        </div>
        <span className="text-slate-800 text-lg font-manrope">SAFETY</span>
      </div>

      <div className="flex flex-col items-center point">
        <div className="w-16 h-16 bg-red-300 rounded-lg flex items-center justify-center mb-4">
          <Award className="w-8 h-8 text-white" />
        </div>
        <span className="text-slate-800 text-lg font-manrope">ISO</span>
      </div>

      <div className="flex flex-col items-center point">
        <div className="w-16 h-16 bg-green-300 rounded-lg flex items-center justify-center mb-4">
          <Leaf className="w-8 h-8 text-white" />
        </div>
        <span className="text-slate-800 text-lg font-manrope">ENVIRONMENT</span>
      </div>

      <div className="flex flex-col items-center point">
        <div className="w-16 h-16 bg-blue-300 rounded-lg flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <span className="text-slate-800 text-lg font-manrope">INTEGRITY</span>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default Highlight;
