'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from "lucide-react";
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import HeroCard from '@/components/HeroCard';
import Highlight from '@/components/Highlight';
import About from '@/components/About';
import Services from '@/components/Services';



const SuyogPlasticHomepage: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contactBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200); 
    };

    window.addEventListener('scroll', handleScroll);

 
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

  return (
    <div className="min-h-screen bg-gradient-to-b bg-white relative">
      <main>
        <Hero />
        <HeroCard/>
        <About/>
        <Highlight/>      
        <Services/>
        {/* Contact Section */}
        <section id="contact" className=" bg-primarybg font-manrope ">
          <div className="py-64">
            <h2 className="text-4xl font-bold mb-12 text-center text-primaryBlack">Get in Touch</h2>
            <div 
              ref={contactBoxRef}
              className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-primaryYellow text-black p-8">
                  <h3 className="text-2xl font-bold mb-4 underline underline-offset-4 decoration-gray-400">
                    Contact Information
                  </h3>
                  <p className="mb-4 font-bold">
                    We&apos;re here to help and answer any question you might have.
                  </p>
                  <div className="mb-4">
                    <p className="font-bold">Address:</p>
                    <p>Suyog plastic, moulding E-52/B-212 Tiny industry, NRB Road Chikalthana MIDC Aurangabad-431005</p>
                  </div>
                  <div className="mb-4">
                    <p className="font-bold">Phone:</p>
                    <p>(+91) 9970884564</p>
                  </div>
                  <div>
                    <p className="font-bold">Email:</p>
                    <p>info@suyogplastic.com</p>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-2 border border-gray-300 text-black font-semibold focus:border-primaryDark focus:outline-none rounded"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-2  text-black border font-semibold border-gray-300 focus:border-primaryDark focus:outline-none rounded"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full p-2 border text-black font-semibold border-gray-300 focus:border-primaryDark focus:outline-none rounded"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-primaryYellow text-black font-semibold py-2 rounded hover:bg-primaryLight hover:text-black transition duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {showScrollTop && (
  <Button
    onClick={scrollToTop}
    className="fixed bottom-32 right-8 z-50 bg-primaryYellow text-black p-2 rounded-full shadow-lg hover:bg-primaryLight hover:scale-105 transition-transform duration-300"
    aria-label="Scroll to top"
  >
    <ArrowUp size={30} className="text-black font-bold" />
  </Button>
)}

      
    </div>
  );
};

export default SuyogPlasticHomepage;