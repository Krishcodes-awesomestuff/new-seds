import React, { useState, useEffect } from 'react';

export default function Team() {
  const [stars, setStars] = useState<Array<{left: number, top: number, delay: number, duration: number}>>([]);

  useEffect(() => {
    // Generate star positions only on client side to avoid hydration mismatch
    const starData = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2
    }));
    setStars(starData);
  }, []);

  return (
    <section className="relative min-h-screen bg-black py-20 px-6">
      {/* Space-based Marquee */}
      <div className="absolute top-0 left-0 w-full z-20 overflow-hidden py-4">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text font-arsenal tracking-wider">
              ✦ BATCH 2025-2026 ✦ MEET OUR TEAM ✦ BATCH 2025-2026 ✦ MEET OUR TEAM ✦
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen pt-32">
        {/* Video Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <video
              className="w-full h-auto aspect-video object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/team.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Optional overlay for styling */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Floating Space Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Animated Stars - Only render after client-side hydration */}
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Custom CSS for Marquee */}
      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          background: linear-gradient(90deg, 
            rgba(0,0,0,0.8) 0%, 
            rgba(0,0,0,0.4) 20%, 
            rgba(0,0,0,0.4) 80%, 
            rgba(0,0,0,0.8) 100%);
          border-bottom: 1px solid rgba(59, 130, 246, 0.3);
          backdrop-filter: blur(10px);
        }
        
        .marquee-content {
          display: flex;
          animation: marquee 20s linear infinite;
          white-space: nowrap;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        /* Pause marquee on hover */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
