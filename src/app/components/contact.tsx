import React from 'react';
import Image from 'next/image';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white">
      {/* Desktop Layout */}
      <div className="hidden md:flex min-h-screen">
        {/* Left Half - Logo and Information */}
        <div className="w-1/2 flex flex-col justify-center items-center p-12 border-r border-gray-800">
          <div className="text-center max-w-md">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="SEDS Logo"
                width={120}
                height={120}
                className="mx-auto mb-6 drop-shadow-lg"
              />
            </div>

            {/* SEDS Header */}
            <h1 className="text-4xl md:text-5xl font-bold font-arsenal mb-4 tracking-wide">
              SEDS
            </h1>

            {/* Abbreviation */}
            <div className="mb-6">
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed font-arsenal">
                Students for the Exploration
                <br />
                and Development of Space
              </p>
            </div>

            {/* Subtext */}
            <div className="space-y-3 text-sm text-gray-400 font-light">
              <p>Rajalakshmi Engineering College Chapter</p>
              <div className="flex justify-center space-x-2 text-xs">
                <span>•</span>
                <span>Space Exploration</span>
                <span>•</span>
                <span>Innovation</span>
                <span>•</span>
                <span>Education</span>
              </div>
            </div>

            {/* Minimal Space Elements */}
            <div className="absolute top-20 left-10 w-1 h-1 bg-blue-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-32 left-20 w-1 h-1 bg-white rounded-full opacity-40"></div>
            <div className="absolute top-1/3 left-1/4 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Right Half - Contact Information */}
        <div className="w-1/2 flex flex-col justify-center items-center p-12 relative">
          <div className="text-center max-w-md w-full">
            {/* Header */}
            <h2 className="text-3xl md:text-4xl font-bold font-arsenal mb-12 tracking-wide">
              Reach out to us:
            </h2>

            {/* Contact Links */}
            <div className="space-y-8">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/seds_rec/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-start space-x-6 p-4 rounded-lg border border-transparent hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/30"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-lg font-medium text-white group-hover:text-pink-400 transition-colors duration-300">
                    Instagram
                  </p>
                  <p className="text-sm text-gray-400">
                    @seds_rec
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/seds-rec/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-start space-x-6 p-4 rounded-lg border border-transparent hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/30"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                    LinkedIn
                  </p>
                  <p className="text-sm text-gray-400">
                    SEDS-REC Company Page
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:sedsrec@rajalakshmi.edu.in"
                className="group flex items-center justify-start space-x-6 p-4 rounded-lg border border-transparent hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/30"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors duration-300">
                    Email
                  </p>
                  <p className="text-sm text-gray-400">
                    sedsrec@rajalakshmi.edu.in
                  </p>
                </div>
              </a>
            </div>

            {/* Minimal geometric elements */}
            <div className="absolute top-16 right-16">
              <div className="w-8 h-0.5 bg-blue-500 rotate-45 opacity-60"></div>
            </div>
            <div className="absolute bottom-20 right-12">
              <div className="w-6 h-6 border border-gray-600 rotate-45 opacity-40"></div>
            </div>
            <div className="absolute top-1/3 right-1/4">
              <div className="w-3 h-3 border-l border-t border-purple-500 opacity-50"></div>
            </div>
          </div>

          {/* Swiss Design Grid Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="h-full w-px bg-gray-500 absolute left-1/4"></div>
            <div className="h-full w-px bg-gray-500 absolute right-1/4"></div>
            <div className="w-full h-px bg-gray-500 absolute top-1/4"></div>
            <div className="w-full h-px bg-gray-500 absolute bottom-1/4"></div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen bg-black text-white px-6 py-12">
        {/* Mobile Logo Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Image
              src="/logo.png"
              alt="SEDS Logo"
              width={100}
              height={100}
              className="mx-auto mb-4 drop-shadow-lg"
            />
          </div>
          <h1 className="text-3xl font-bold font-arsenal mb-3 tracking-wide">
            SEDS
          </h1>
          <p className="text-base text-gray-300 font-light font-arsenal mb-3">
            Students for the Exploration
            <br />
            and Development of Space
          </p>
          <p className="text-sm text-gray-400">Rajalakshmi Engineering College Chapter</p>
          <div className="flex justify-center space-x-2 text-xs text-gray-400 mt-2">
            <span>•</span>
            <span>Space Exploration</span>
            <span>•</span>
            <span>Innovation</span>
            <span>•</span>
            <span>Education</span>
          </div>
        </div>

        {/* Mobile Contact Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-arsenal mb-8 text-center tracking-wide">
            Reach out to us:
          </h2>

          {/* Mobile Contact Links */}
          <div className="space-y-4">
            {/* Instagram Mobile */}
            <a
              href="https://www.instagram.com/seds_rec/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 p-4 border border-gray-700 rounded-lg hover:bg-gray-900/50 transition-all duration-300 hover:border-pink-500/50"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-left">
                <p className="text-lg font-medium text-white group-hover:text-pink-400 transition-colors duration-300">
                  Instagram
                </p>
                <p className="text-sm text-gray-400">@seds_rec</p>
              </div>
            </a>

            {/* LinkedIn Mobile */}
            <a
              href="https://www.linkedin.com/company/seds-rec/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 p-4 border border-gray-700 rounded-lg hover:bg-gray-900/50 transition-all duration-300 hover:border-blue-500/50"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-left">
                <p className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                  LinkedIn
                </p>
                <p className="text-sm text-gray-400">SEDS-REC Company</p>
              </div>
            </a>

            {/* Email Mobile */}
            <a
              href="mailto:sedsrec@rajalakshmi.edu.in"
              className="group flex items-center space-x-4 p-4 border border-gray-700 rounded-lg hover:bg-gray-900/50 transition-all duration-300 hover:border-gray-500/50"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-left">
                <p className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors duration-300">
                  Email
                </p>
                <p className="text-sm text-gray-400">sedsrec@rajalakshmi.edu.in</p>
              </div>
            </a>
          </div>

          {/* Mobile Space Elements */}
          <div className="flex justify-center space-x-8 mt-8 opacity-30">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}