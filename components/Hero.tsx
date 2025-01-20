'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/Button"; 

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <section id="home">
      <div className="relative w-full font-manrope">
        <div className="relative h-[68vh] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slide 1 */}
            <div className="min-w-full h-full relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <Image
                  src="/image1.png"
                  alt="Plastic Products"
                  layout="fill"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative flex h-full justify-end items-center p-12">
                <div className="space-y-6">
                  <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">
                      Suyog Plastics
                    </h1>
                  </div>
                  <div className="text-lg text-center text-white">
                    <p>
                      Pioneering Excellence in Plastic Injection Molding,
                      Polyurethane Casting,
                    </p>
                    <p>and Epoxy Casting.</p>
                  </div>
                  <div className="flex justify-center">
                    <Button className="bg-primaryYellow hover:bg-primaryLight font-semibold text-black rounded-lg p-2 text-lg  transition-colors">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="min-w-full h-full relative">
              <div className="relative w-full h-full">
                <Image
                  src="/image2.png"
                  alt="Moulding Development"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-5xl mx-auto px-4 text-center text-white">
                  <h1 className="text-5xl font-bold">
                    ONE-STOP MOULDING DEVELOPMENT
                  </h1>
                  <p className="text-xl opacity-90 p-9">
                    When Creating A Product That Requires Molded Plastic Parts,
                    Suyog Plastics Will Be A Perfect Choice For You As A
                    One-Stop Solution.
                  </p>
                  <Button className="bg-primaryYellow hover:bg-primaryLight text-black p-2 rounded-lg text-lg font-semibold transition-colors">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="min-w-full h-full relative">
              <div className="absolute inset-0">
                <Image
                  src="/image3.png"
                  alt="Plastic Products"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0" />
              </div>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full p-16">
                  <div className="mx-auto flex flex-col space-y-6">
                    <h1 className="text-5xl font-bold text-white">
                      Suyog Plastics
                    </h1>
                    <div className="text-lg text-white">
                      <p>At Suyog Plastics, we take pride in our</p>
                      <p>products & services and follow the best</p>
                      <p>industrial practices of manufacturing.</p>
                    </div>
                    <Button className="bg-primaryYellow hover:bg-primaryLight text-black p-2 rounded-lg text-lg font-semibold transition-colors w-fit">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-primaryYellow" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
