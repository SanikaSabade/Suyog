import React from 'react';
import { MapPin, Phone, Mail, Clock, CalendarOff } from 'lucide-react';
import Image from "next/image"; 


const Footer = () => {
  return (
    <footer className="bg-primaryDark text-gray-300 py-16">
      <div className=" px-4 font-manrope">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
            <Image
        src="/Suyog logo.jpg"
        alt="Suyog Plastic Logo"
        width={30} 
        height={30}
        className="bg-white rounded-full "
      /> 
              <span className="text-white text-xl font-manrope font-semibold">Suyog Plastics</span>
            </div>
            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                Suyog plastic, moulding E-52/B-212 Tiny industry,NRB Road Chikalthana MIDC Aurangabad-431005

                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm text-gray-300">(+91) 9970884564 </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@suyogplastic.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm text-gray-300">Mon-Sun: 9:00am - 7:00pm</span>

              </div>
              <div className="flex items-center gap-3">
                <CalendarOff className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm text-gray-300">Friday Holiday</span>

              </div>
            </div>
          </div>

          <div className="lg:col-span-1 font-manrope">
            <h3 className="text-white text-lg px-24 font-semibold mb-4">Team Members</h3>
            <ul className="space-y-3 font-semibold px-28">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mahesh Swami</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Akshay</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rama Devkhale </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Komal Swami</a></li>
            </ul>
          </div>

          {/* Industries Links */}
          <div className="lg:col-span-1 font-manrope">
            <h3 className="text-white text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Industrial Manufacturing</a></li>
             
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2024 Suyog Plastics. All rights reserved</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;