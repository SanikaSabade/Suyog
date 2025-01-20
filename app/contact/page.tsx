'use client'

import Footer from '@/components/Footer';
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <section className="bg-primarybg font-manrope">
      <div className="flex flex-col w-full mx-auto p-20">
        <div className="flex flex-col items-center text-center p-3">
          
          <h2 className="text-3xl font-bold text-primaryBlack p-3">Contact Us</h2>
          <p className="text-gray-600 p-2 text-sm">
            We're here to help and answer any questions you might have.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-8">
          <div className="flex-1 flex flex-col">
            <div className="flex flex-col space-y-4">
              <div className="group">
                <div className="flex items-start gap-3 p-4 bg-white/50 hover:bg-primaryYellow/10 rounded-lg transition-all">
                  <div className="bg-primaryYellow p-2 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-black mb-1">Visit Us</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Suyog Plastic, Moulding E-52/B-212 Tiny Industry,
                      NRB Road Chikalthana MIDC,
                      Aurangabad-431005
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-3 p-4 bg-white/50 hover:bg-primaryYellow/10 rounded-lg transition-all">
                  <div className="bg-primaryYellow p-2 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-black mb-1">Call Us</h3>
                    <p className="text-gray-600 text-sm">
                      (+91) 9970884564
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-3 p-4 bg-white/50 hover:bg-primaryYellow/10 rounded-lg transition-all">
                  <div className="bg-primaryYellow p-2 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-black mb-1">Email Us</h3>
                    <p className="text-gray-600 text-sm">
                      info@suyogplastic.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <h3 className="text-lg font-bold text-black mb-4">Send us a Message</h3>
                <form className="space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 bg-white/50 text-black font-semibold border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryYellow transition-all text-sm"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 bg-white/50 text-black font-semibold border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryYellow transition-all text-sm"
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="How can we help you?"
                      rows={3}
                      className="w-full p-3 bg-white/50 text-black font-semibold border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryYellow transition-all resize-none text-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primaryYellow text-black font-bold p-3 rounded-lg hover:bg-primaryLight transition-all text-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative h-full w-full rounded-lg overflow-hidden">
              <div className="absolute inset-0">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.4658893321475!2d75.35426107585772!3d19.86253998151079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba289c4809619%3A0xa385f987b27504f9!2ssuyog%20plastic%20moulding!5e0!3m2!1sen!2sin!4v1737390656771!5m2!1sen!2sin" 
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactPage;