import React from 'react';
import Image from 'next/image';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Left - Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-black p-4 rounded-lg mb-4">
              <Image
                src="/logo.png"
                alt="SEDS Logo"
                width={80}
                height={80}
                className=""
              />
            </div>
            <h3 className="text-xl font-bold font-arsenal mb-2 text-black">SEDS - REC</h3>
            <p className="text-gray-600 text-sm text-center md:text-left">
              Students for the Exploration and Development of Space
            </p>
          </div>

          {/* Center - Hot Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 font-arsenal text-black">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#hero" 
                  className="text-gray-600 hover:text-black transition-all duration-300 text-sm relative group"
                >
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-600 hover:text-black transition-all duration-300 text-sm relative group"
                >
                  About Us
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#events" 
                  className="text-gray-600 hover:text-black transition-all duration-300 text-sm relative group"
                >
                  Events
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  className="text-gray-600 hover:text-black transition-all duration-300 text-sm relative group"
                >
                  Team
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-black transition-all duration-300 text-sm relative group"
                >
                  Contact
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 font-arsenal text-black">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/seds_rec/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/seds-rec/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:sedsrec@rajalakshmi.edu.in"
                className="group"
              >
                <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-600 text-sm">
                © 2025 SEDS - REC Chapter. All rights reserved.
              </p>
            </div>

            {/* Built with love */}
            <div className="text-center md:text-right">
              <p className="text-gray-600 text-sm flex items-center justify-center md:justify-end space-x-1">
                <span>Built with</span>
                <span>☕</span>
                <span>and</span>
                <span className="text-blue-500">💙</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
