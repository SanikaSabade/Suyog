import React from 'react';
import Footer from '@/components/Footer';

const Epoxy = () => {
  return (
    <div className="min-h-screen font-manrope">
      <div className="bg-primarybg min-h-screen">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="h-full flex flex-col justify-center p-12">
            <h1 className="text-4xl font-bold text-center">
              <span className="text-primaryDark">Epoxy</span>
              <span className="text-yellow-400"> Casting</span>
            </h1>
          </div>
          
          <div className="space-y-10 font-medium text-black">
            <p className="text-lg">
              AR Polymer is specialized manufacturers of tailor-made epoxy resin moulded components and has been the supplier for epoxy bushing & Insulators meeting the most diverse needs of a global market.
            </p>
            
            <ul className="space-y-2 list-disc pl-6">
              <li className="text-lg">Automatic Pressure Gelation Machine is available for Epoxy Casting.</li>
              <li className="text-lg">Fully automatic Epoxy mixer available for mixing of raw materials (Capacity 50 kg).</li>
              <li className="text-lg">Automatic Gravity Casting Epoxy Machine is available for Epoxy components.</li>
              <li className="text-lg">Epoxy Casting by Pressure Gelation and Gravity Casting.</li>
            </ul>

            <p className="text-lg font-semibold">
              Having capacity of 15 Kgs.
            </p>

            <div className="mt-4">
              <h2 className="text-xl font-bold mb-3">Applications</h2>
              <ul className="space-y-2 list-disc pl-6">
                <li className="text-lg">Epoxy Insulators, Rings, Spacers used in Vacuum Circuit Breakers, Current Transformers and Voltage Transformers.</li>
                <li className="text-lg">Epoxy coated Vacuum Interrupters to be used in Vacuum Contactors.</li>
                <li className="text-lg">Epoxy Monoblock used in Current and Voltage Transformers.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Epoxy;