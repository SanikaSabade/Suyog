import Footer from '@/components/Footer';
import React from 'react';

const Casting = () => {
  const industryApplications = [
    { industry: 'Automotive', application: 'Bushes, Flexible Couplings, Grommets, Bearings, Hammers, Mountings Pads, Seals Conveyor Rollers, Dampers, Anti Vibrations Pads, Scraper Blades, Rods, Sheets' },
    { industry: 'Textile', application: 'Conveyor Rollers, Scrapper Blades, Couplings' },
    { industry: 'Wheel', application: 'Trolley Wheels, Castor Wheels, Escalator Wheels, Roller Skate Wheels, Conveyor Wheels' },
    { industry: 'Electrical', application: 'Electrical Insulation' },
    { industry: 'Mining', application: 'Conveyor Rollers, Screens, Scrapper Blades' },
    { industry: 'Rollers', application: 'Conveyor Rollers, Printing Rollers, Rollers for Steel and Aluminum Mills' },
    { industry: 'Abrasion Resistant Liners', application: 'Chute Liners, Pump Liners, Vibratory Mill Liners, Hopper Liners' },
    { industry: 'Oil and Gas', application: 'Bushing, Bearing, Hydro clones' }
  ];

  return (
    <div className="min-h-screen font-manrope">
      <div className="bg-primarybg min-h-screen">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="h-full flex flex-col justify-center p-12">
            <h1 className="text-4xl font-bold text-center">
              <span className="text-primaryDark">Polyurethane</span>
              <span className="text-yellow-400"> Casting</span>
            </h1>
          </div>
          
          <div className="space-y-6 text-black">
            <p className="text-lg text-pretty font-medium">
              AR Polymers is a sister concern of Suyog Plastics expert in Polyurethane casting and coating from last 20 years.
              we offer this Polyurethane casting as per requirement, tailor made/customised with highest efficiency and high quality.
              We have Automatic metering mixing and dispensing machine for polyurethane Casting.
              Ability to handle wide range of polyurethane items, from 40 shore A to 75 Shore D Hardness.
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 font-manrope ">
                Polyurethane Elastomers are widely used in various industries due to its versatility and durability
              </h2>
              
              <div className="overflow-x-auto font-manrope">
                <table className="w-full border-collapse bg-blue-50">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-3 text-left bg-blue-100">Industry</th>
                      <th className="border border-gray-300 p-3 text-left bg-blue-100">Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    {industryApplications.map((item, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-3">{item.industry}</td>
                        <td className="border border-gray-300 p-3">{item.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Casting;