"use client"
import { Cog, Droplet, Zap } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from './Button';
import { useRouter } from 'next/navigation';

function Services() {
  const serviceCardsRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  return (
    <section id="services" className="py-10 min-h-screen flex flex-col items-center justify-start bg-primarybg">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-5xl text-primaryBlack p-20 text-center font-manrope">
          Our Services
        </h2>
        <div className="w-full">
          <div
            ref={serviceCardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center"
          >
            <div className="bg-white p-4 font-manrope rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[320px] flex flex-col items-center">
              <div className="relative h-[180px] w-full mb-6">
                <Image
                  src="/service1.png"
                  alt="Custom Molded and Injected Plastics"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="flex justify-center mb-4"><Cog className="w-12 h-12 text-primaryDark" /></div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                Custom Molded and Injected Plastics
              </h3>
              <p className="text-gray-600 text-center w-full leading-relaxed mb-6">
                We specialize in molding high-quality, custom-molded plastic parts
              </p>
              <div className="mt-auto">
              <Button
                onClick={() => router.push('/services1')}
                className="bg-primaryYellow  font-manrope text-black p-6 py-3  rounded-full hover:bg-primaryLight hover:text-black transition-colors duration-300 text-md font-semibold">
                Read More
              </Button>
            </div>
            </div>
            <div className="bg-white p-4 font-manrope rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[320px] flex flex-col items-center">
              <div className="relative h-[180px] w-full mb-6">
                <Image
                  src="/service2.png"
                  alt="Polyurethane Casting"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="flex justify-center mb-4"><Droplet className="w-12 h-12 text-primaryDark" /></div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                Polyurethane Casting
              </h3>
              <p className="text-gray-600 text-center w-full p-4 leading-relaxed mb-6">
                Expert polyurethane casting services for durable and flexible plastic components.
              </p>
              <div className="mt-auto">
              <Button 
                onClick={() => router.push('/services2')}
                className="bg-primaryYellow  font-manrope text-black p-6 py-3  rounded-full hover:bg-primaryLight hover:text-black transition-colors duration-300 text-md font-semibold">
                Read More
              </Button>
              </div>
            </div>
            <div className="bg-white p-4 font-manrope rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[320px] flex flex-col items-center">
              <div className="relative h-[180px] w-full mb-6">
                <Image
                  src="/service3.png"
                  alt="Epoxy Casting"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="flex justify-center mb-4"><Zap className="w-12 h-12 text-primaryDark" /></div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                Epoxy Casting
              </h3>
              <p className="text-gray-600 text-center p-4 w-full leading-relaxed mb-6">
                High-performance epoxy casting for strong and chemical-resistant plastic products.
              </p>
              <div className='mt-auto'>
              <Button
                onClick={() => router.push('/services3')}
                className="bg-primaryYellow  font-manrope text-black p-6 py-3  rounded-full hover:bg-primaryLight hover:text-black transition-colors duration-300 text-md font-semibold">
                Read More
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
