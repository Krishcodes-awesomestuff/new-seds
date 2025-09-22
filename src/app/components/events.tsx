import React from 'react';

export default function Events() {
  // Sample event data - replace with actual events
  const events = [
    {
      name: "Space Software Workshop",
      place: "REC Auditorium",
      date: "Sep 26, 2025",
      description: "Don’t miss this chance to explore powerful space & engineering software tools!"
    },
    {
      name: "Astronomy Night",
      place: "REC Terrace",
      date: "UPCOMING",
      description: "Stargazing event with telescopes and expert guidance on celestial observations."
    },
    {
      name: "Mars Mission Simulation",
      place: "Computer Lab",
      date: "UPCOMING",
      description: "Interactive simulation of Mars exploration missions and space habitat design."
    },
    {
      name: "Rocket Building Competition",
      place: "REC Ground",
      date: "UPCOMING",
      description: "Design and launch model rockets in this exciting engineering competition."
    },
    {
      name: "Guest Lecture: ISRO Scientist",
      place: "Main Hall",
      date: "UPCOMING",
      description: "Inspiring talk by ISRO scientist about current space missions and career opportunities."
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 font-arsenal mb-4">
            Events
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-2"></div>
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* First 3 events in top row */}
          {events.slice(0, 3).map((event, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-blue-500/20"
            >
              {/* Event Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-3 font-arsenal">
                  {event.name}
                </h3>
                
                {/* Place and Date */}
                <div className="flex justify-between items-center text-sm text-gray-300 mb-4">
                  <span className="flex items-center">
                    <span className="text-blue-400 font-medium">Place:</span>
                    <span className="ml-2">{event.place}</span>
                  </span>
                  <span className="flex items-center">
                    <span className="text-blue-400 font-medium">Date:</span>
                    <span className="ml-2">{event.date}</span>
                  </span>
                </div>
              </div>

              {/* Event Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {event.description}
              </p>

              {/* Register Button */}
              <div className="mt-4">
                <a
                  href="https://docs.google.com/forms/d/15ifCeYvSLBvUN4G6S1yON_MoiN6G5Ly54taYTYmheSc/edit?ts=68cd58f8#responses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                >
                  Learn More
                  <svg 
                    className="ml-2 -mr-1 w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 events centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.slice(3, 5).map((event, index) => (
            <div
              key={index + 3}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-blue-500/20"
            >
              {/* Event Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-3 font-arsenal">
                  {event.name}
                </h3>
                
                {/* Place and Date */}
                <div className="flex justify-between items-center text-sm text-gray-300 mb-4">
                  <span className="flex items-center">
                    <span className="text-blue-400 font-medium">Place:</span>
                    <span className="ml-2">{event.place}</span>
                  </span>
                  <span className="flex items-center">
                    <span className="text-blue-400 font-medium">Date:</span>
                    <span className="ml-2">{event.date}</span>
                  </span>
                </div>
              </div>

              {/* Event Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {event.description}
              </p>

              {/* Register Button */}
              <div className="mt-6">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
