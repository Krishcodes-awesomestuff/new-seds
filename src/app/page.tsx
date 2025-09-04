"use client";
import Image from "next/image";
import { useState } from "react";
import AboutUs from "./components/aboutus";
import Events from "./components/events";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Video - Only for Hero Section */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/herovid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
      {/* Center Hero Text */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="text-center">
          <h1 className="text-white text-6xl md:text-8xl font-bold tracking-wider mb-4 drop-shadow-2xl" style={{fontFamily: 'var(--font-arsenal)'}}>
            SEDS - REC
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-light tracking-widest drop-shadow-lg" style={{fontFamily: 'var(--font-arsenal)'}}>
            Students for the Exploration and Development of Space
          </p>
        </div>
      </div>
      
      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="flex flex-col items-center cursor-pointer group">
          <span className="text-white/80 text-xs font-light mb-1 group-hover:text-white transition-colors duration-300" style={{fontFamily: 'var(--font-arsenal)'}}>
            SCROLL DOWN
          </span>
          <div className="w-4 h-6 border border-white/60 rounded-full relative group-hover:border-white transition-colors duration-300">
            <div className="w-0.5 h-2 bg-white/60 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2 group-hover:bg-white transition-colors duration-300 animate-pulse"></div>
          </div>
          <svg 
            className="w-4 h-4 text-white/60 mt-1 group-hover:text-white transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
      
      {/* Simple Overlay Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="SEDS Logo"
              width={60}
              height={60}
              className="h-26 w-auto drop-shadow-lg"
            />
          </div>
          
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="relative w-10 h-10 focus:outline-none group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"></div>
            <div className="relative flex flex-col justify-center items-center w-full h-full space-y-1">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Overlay Menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-700 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl"></div>
        
        {/* Menu Content */}
        <div className={`relative h-full flex transition-all duration-700 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Left Side - Logo */}
          <div className="flex-1 flex items-center justify-center border-r border-white/20">
            <div className="text-center">
              <Image
                src="/logo.png"
                alt="SEDS Logo"
                width={200}
                height={200}
                className="h-32 w-auto mx-auto drop-shadow-2xl"
              />
              
              <p className="text-white/70 text-sm mt-2">Students for the Exploration and Development of Space</p>
            </div>
          </div>
          
          {/* Right Side - Navigation */}
          <div className="flex-1 flex flex-col justify-center px-16 relative">
            
            {/* Navigation Links */}
            <div className="space-y-8">
              {[
                { href: "#about", label: "About" },
                { href: "#events", label: "Events" },
                { href: "#team", label: "Team" },
                { href: "#contact", label: "Contact" }
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className="block text-white text-4xl font-light tracking-wide hover:text-white/80 transition-all duration-300 transform hover:translate-x-4"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Social Links - Bottom Right */}
            <div className="absolute bottom-16 right-16">
              <div className="flex space-x-6">
                {/* Email */}
                <a
                  href="mailto:sedsrec@rajalakshmi.edu.in"
                  className="group relative"
                  aria-label="Email"
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </a>
                
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/seds_rec/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="Instagram"
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
                
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/seds-rec/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="LinkedIn"
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      {/* About Us Section */}
      <div id = "about">
      <AboutUs />
      </div>
      <div id = "events">
      {/* Events Section */}
      <Events />
      </div>
      <div id = "team">
      {/* Team Section */}
      <Team />
      </div>
      <div id = "contact">
      {/* Contact Section */}
      <Contact />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
