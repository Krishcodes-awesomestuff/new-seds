"use client";
import Image from "next/image";
import { Eye, Target } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main About Us Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image */}
          <div className="relative">
            <Image
              src="/about.jpg"
              alt="About SEDS"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </div>
          
          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4" style={{fontFamily: 'var(--font-arsenal)'}}>
                About Us
              </h2>
              <div className="w-24 h-1 bg-blue-500 mb-6"></div>
            </div>
            
            <div className="space-y-4 text-white text-lg leading-relaxed">
              <p>
                Students for the Exploration and Development of Space (SEDS) is an international student organization dedicated to promoting space as a career field and stimulating student interest in space science, engineering, and exploration.
              </p>
              <p>
                Our REC chapter brings together passionate students who share a common vision of advancing space technology and inspiring the next generation of space explorers. We organize workshops, seminars, and hands-on projects that bridge the gap between academic learning and real-world space applications.
              </p>
              <p>
                Through our initiatives, we aim to create a vibrant community of space enthusiasts who contribute to the growing space industry and help shape the future of space exploration.
              </p>
            </div>
          </div>
        </div>
        
        {/* Vision and Mission Section */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Eye className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-blue-500" style={{fontFamily: 'var(--font-arsenal)'}}>
                Our Vision
              </h3>
            </div>
            <p className="text-white text-lg leading-relaxed">
              To inspire and prepare the next generation of space professionals by fostering innovation, collaboration, and hands-on learning experiences that advance our understanding and exploration of space.
            </p>
          </div>
          
          {/* Mission */}
          <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-500/20 rounded-full">
                <Target className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-green-500" style={{fontFamily: 'var(--font-arsenal)'}}>
                Our Mission
              </h3>
            </div>
            <p className="text-white text-lg leading-relaxed">
              To provide students with opportunities to engage in space-related projects, research, and educational activities while building a strong network of future space industry leaders and innovators.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
