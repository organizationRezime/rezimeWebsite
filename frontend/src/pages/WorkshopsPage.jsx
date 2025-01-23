import React, { useEffect, useState } from 'react'; 
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight, School } from 'lucide-react';

const pastWorkshops = [
  {
    title: "Introduction to Python Programming",
    date: "15 September 2024",
    college: "Online",
  },
  {
    title: "Web Development Fundamentals",
    date: "1 August 2024",
    college: "Online",
  },
  {
    title: "Data Structures Workshop",
    date: "10 July 2024",
    college: "Online",
  },
  {
    title: "Mobile App Development",
    date: "5 June 2024",
    college: "Online",
  }
];

const PastWorkshopSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === pastWorkshops.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    document.title = 'Free Coding Workshops | Rezime Edtech'
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? pastWorkshops.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="Previous workshop"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        
        <div className="overflow-hidden mx-8">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {pastWorkshops.map((workshop, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
                  <h4 className="text-xl font-semibold text-gray-900">{workshop.title}</h4>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5" />
                      <span className="ml-2">{workshop.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <School className="h-5 w-5" />
                      <span className="ml-2">{workshop.college}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="Next workshop"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {pastWorkshops.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to workshop ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function WorkshopPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-[7rem] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upcoming Workshop Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8 md:p-12 text-white">
            <div className="flex flex-col ">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Free Coding Workshop</h2>
                <p className="mt-2 text-blue-100 text-lg">
                  This workshop will help you start your career as a web developer and offers an open platform for you to ask any questions. We genuinely help students without promoting any of our products. 
                  This is a free workshop aimed at spreading awareness about coding in West Bengal's polytechnic colleges.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeJdr3XRL8_NzJLWyxvrmrGQTqJ7BTZKvBFy97B_nB32cQUAA/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 transition duration-300"
                >
                  Register Now
                </a>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-blue-200" />
                <span className="ml-3 text-lg">20 October 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-200" />
                <span className="ml-3 text-lg">10:00 AM IST</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-200" />
                <span className="ml-3 text-lg">Online (Google Meet)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Past Workshops */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Past Workshops</h3>
          <PastWorkshopSlider />
        </div>

        {/* College Collaboration Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-teal-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex flex-col">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Let's Spread Coding Awareness Together</h2>
                <p className="mt-2 text-green-100 text-lg">
                  Invite us to your campus, and your students will benefit from hands-on training and expert guidance on coding fundamentals, career advice, and much more.
                  Our workshops are designed to inspire students and give them practical skills they can use to kickstart their careers in the tech industry.
                </p>
              </div>
              <div className="mt-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://forms.gle/KX16pa8iL7LDRs826"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-700 bg-white hover:bg-teal-50 transition duration-300"
                >
                  Invite Us to Your College Campus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
