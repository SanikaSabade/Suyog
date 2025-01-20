'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Footer from '@/components/Footer';

const SuyogAbout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="flex flex-col min-h-screen bg-primarybg ">

<section className="p-20 bg-primaryYellow relative ">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-primaryBlack p-10 flex justify-center font-manrope">ABOUT US</h1>
        <div className="flex flex-col lg:flex-row w-full items-start">
          <div className="w-full lg:w-1/2 space-y-3 font-semibold p-10">
            <p className="text-black text-justify">
              Suyog Plastic Molding Company (SPM) has a core competency in manufacturing plastic components of a wide variety of sizes, materials, and applications.
            </p>
            <p className="text-black text-justify">
              At SPM, we manufacture and assemble precision plastic injection molded parts for leading domestic and international OEMs (Original Equipment Manufacturers) of different market segments. We offer innovative solutions for the conversion of wood and metallic parts into engineering plastic components.
            </p>
            <p className="text-black text-justify">
            We have successfully developed more than 100+ parts. We offer a full range of precision injection molding technologies 
            including insert molding parts and dual molding parts and wire harness parts  for auto companies.
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative h-[400px] flex items-end">
            <div className="absolute w-full h-full">
              <div className="absolute bottom-0 w-full h-full">
                <Image
                  src="/about1.png"
                  alt="Product Display"
                  fill
                  className="object-cover"
                  style={{
                    clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 30%, 30% 0)',
                  }}
                />
              </div>
              <div className="absolute bottom-0 -left-6 w-[55%] h-[55%] bg-white border-4 border-primaryYellow shadow-lg">
                <Image
                  src="/about2.png"
                  alt="Product Close-up"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="p-16 font-manrope">
        <div className="container w-full p-4 font-manrope">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square w-full">
                <Image
                  src="/about.png"
                  alt="Factory Floor"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex gap-1 relative w-full">
                <div className="absolute bottom-0 w-full h-0.5 "></div>
                {[
                  { id: 'mission', label: 'MISSION & VISION' },
                  { id: 'quality', label: 'QUALITY POLICY' },
                  { id: 'products', label: 'PRODUCTS AND SERVICES' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      relative p-4 text-sm font-bold transition-all duration-300 rounded-full
                      ${activeTab === tab.id ? 'bg-primaryYellow text-black translate-y-[-4px]' : 'bg-primarybg text-primaryBlack font-semibold hover:bg-primaryLight'}
                      after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                      ${activeTab === tab.id ? 'after:bg-primaryYellow' : 'after:bg-transparent'}
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className=" p-2">
            <div className={`transition-all duration-300 ${activeTab === 'mission' ? 'opacity-100 visible' : 'opacity-0 invisible absolute top-0 left-0'}`}>
                  <p className="text-2xl font-bold p-2 text-black">
                    Our Mission
                  </p>
                  <p className="text-md p-2 text-justify text-black">
                  Suyog plastics is an independent company engaged in the manufacturing and niche of a wide range of plastic products. 
                  Our continued policy has always been to progressively maintain a customer-focused approach with continuous improvements in our 
                  manufacturing processes, alongside an exceptional level of quality and service.
                  </p>
                  <p className="text-2xl font-bold p-3 text-black">
                    Our Vision
                  </p>
                  <p className="text-md p-2 text-justify text-black">
                  To be a trusted leader in delivering innovative plastic molding and welding solutions, striving for excellence in everything we do.
                  </p>
                </div>

                <div className={`transition-all duration-300 ${activeTab === 'quality' ? 'opacity-100 visible' : 'opacity-0 invisible absolute top-0 left-0'}`}>
                 
                <p className="text-md p-2 text-justify text-black">
                We, Suyog Plastic Moulding, provide a wide range of plastic molding and assembly solutions. Committed to innovation,
                 we aim to drive business growth and benefit society. Our focus is on enhancing customer satisfaction by understanding 
                 their needs and continually improving our Quality Management System to meet all applicable standards.
                  </p>
                  <h3 className="text-md text-black font-bold p-2">This will be achieved by -</h3>
                  <ul className=" p-1">
                    <li className="flex text-md items-start p-1 text-black">
                      <span className="p-1 text-black">•</span>
                      <span>Work in partnership with customers in a mutually beneficial manner</span>
                    </li>
                    <li className="flex  text-md items-start p-1 text-black">
                      <span className="p-1 text-black">•</span>
                      <span>Delivering products conforming to the specifications and schedules</span>
                    </li>
                    <li className="flex text-md items-start p-1 text-black">
                      <span className="p-1 text-black">•</span>
                      <span>Performance analysis and improvement through Quality Objectives and analysis of Risks & Opportunities</span>
                    </li>
                  </ul>
                </div>

                <div className={`transition-all duration-300 ${activeTab === 'products' ? 'opacity-100 visible' : 'opacity-0 invisible absolute top-0 left-0'}`}>
                  <p className="text-md text-black text-justify p-4">
                  Our product range includes manufacturing of filters, gears, strainers, washers, threaded plugs, 
                  shipping caps, backup-rings, bush, retainer, hose, lever, rings, cover caps, protection caps, mouth opener etc.
                  </p>
                  <p className="text-md text-black text-justify p-4">
                  We also offer a custom design service whereby our customers are engaged from the design stage all 
                  the way through to the manufacturing process, using our CAD and tooling development processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuyogAbout;