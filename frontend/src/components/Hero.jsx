import React, { useState, useEffect } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    type: "fact",
    title: "Skills Gap Crisis",
    description: "85% of West Bengal Polytechnic students graduate without writing a single line of code, despite Computer Science being their major.",
    color: "from-blue-600 to-blue-900"
  },
  {
    type: "quote",
    quote: "The best way to predict the future is to code it. Technology is not just about writing lines, it's about creating solutions.",
    author: "Grace Hopper, Computer Science Pioneer",
    color: "from-purple-600 to-purple-900"
  },
  {
    type: "fact",
    title: "Polytechnic Reality Check",
    description: "Only 8% of West Bengal Polytechnic students secure technical roles in their first job, while 92% of tech companies require basic coding skills during recruitment.",
    color: "from-purple-500 via-pink-500 to-red-500"
  },
  {
    type: "quote",
    quote: "Learning to code is like learning a superpower that lets you transform ideas into reality with just a few keystrokes.",
    author: "Kent Beck, Extreme Programming Pioneer",
    color: "from-indigo-600 to-indigo-900"
  },
  {
    type: "quote",
    quote: "Code is poetry in motion. Every function is a stanza, every algorithm a beautiful narrative of problem-solving.",
    author: "Martin Fowler, Software Design Expert",
    color: "from-violet-600 to-violet-900"
  },
  {
    type: "fact",
    title: "Career Impact",
    description: "Polytechnic graduates with coding skills earn 3x more in their first job compared to those without programming knowledge in West Bengal.",
    color: "from-green-600 to-green-900"
  },
  {
    type: "fact",
    title: "Industry Gap",
    description: "While Bengal's IT sector is growing at 12% annually, only 5% of polytechnic graduates meet industry coding standards.",
    color: "from-fuchsia-600 to-fuchsia-900"
  },
  {
    type: "quote",
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    author: "Patrick McKenzie, Software Engineer",
    color: "from-rose-600 to-rose-900"
  }
];


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="flex flex-col items-center justify-center">
              {/* Navigation buttons */}
              <div className="w-full relative">
                <button 
                  onClick={prevSlide}
                  className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-20"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="text-white" size={20} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-20"
                  aria-label="Next slide"
                >
                  <ChevronRight className="text-white" size={20} />
                </button>

                {/* Content */}
                <div className="space-y-6 md:space-y-8 px-4 md:px-0">
                  <div className={`transform transition-opacity duration-500 ${
                    slides[currentSlide].type === "fact" ? "opacity-100" : "opacity-0 absolute"
                  }`}>
                    {slides[currentSlide].type === "fact" && (
                      <div className="text-center">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight font-extrabold text-white">
                          {slides[currentSlide].title}
                        </h1>
                        <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
                          {slides[currentSlide].description}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className={`transform transition-opacity duration-500 ${
                    slides[currentSlide].type === "quote" ? "opacity-100" : "opacity-0 absolute"
                  }`}>
                    {slides[currentSlide].type === "quote" && (
                      <div className="bg-white/10 p-4 md:p-8 rounded-lg max-w-3xl mx-auto backdrop-blur-sm">
                        <p className="text-white italic text-base md:text-2xl lg:text-3xl font-light leading-relaxed text-center">
                          "{slides[currentSlide].quote}"
                        </p>
                        <p className="text-gray-300 mt-3 md:mt-4 text-sm md:text-xl text-center">
                          - {slides[currentSlide].author}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mt-6 md:mt-8">
                    <Link 
                      to="/career-consultation" 
                      className="w-full md:w-auto px-4 md:px-8 py-2.5 md:py-3 text-sm md:text-base text-center rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition duration-300 hover:scale-105"
                    >
                      Free Career Consultant
                    </Link>
                    <a target='_blank'
                      href="https://forms.gle/KX16pa8iL7LDRs826" 
                      className="w-full md:w-auto px-4 md:px-8 py-2.5 md:py-3 text-sm md:text-base text-center rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300 hover:scale-105"
                    >
                      Invite Us to Your College Campus
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color} opacity-50 transition-colors duration-500`} />
      
      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bounce arrow - now visible on mobile */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown size={20} className="md:hidden" />
        <ArrowDown size={24} className="hidden md:block" />
      </div>
    </div>
  );
}
