import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
        <p className="text-gray-600 mb-6">
          We're looking for developers of all experience levels! We believe in learning and growing together. If you're passionate about technology and want to be part of an exciting journey, we'd love to hear from you.
        </p>
        <p className="text-gray-600 mb-4">
          Send your CV to: <a href="mailto:hr@rezime.in" className="text-blue-600 hover:underline">hr@rezime.in</a>
        </p>
      </div>
    </div>
  );
};

const jobs = [
  {
    title: 'Frontend Developer',
    description: 'Join our team to build modern web applications using React and cutting-edge technologies.',
  },
  {
    title: 'Backend Developer',
    description: 'Build scalable server-side solutions using Node.js, GraphQL, and cloud technologies.',
  },
];

export default function ComingSoon() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 pt-36 py-12 px-4 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Coming Soon Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Rezime
          </h1>
          <div className="flex items-center justify-center gap-2 text-amber-300 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <p className="text-lg font-medium">This feature is under construction</p>
          </div>
          <p className="text-gray-200 text-lg">
            We're currently working hard to bring this page to life but are facing a temporary shortage of developers. 
            If you are a skilled frontend engineer looking to be part of an exciting project, we'd love to hear from you!
          </p>
        </div>

        {/* Hiring Section */}
        <div className="rounded-xl mb-8 bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-center text-white mb-2">
              We're Hiring!
            </h2>
            <p className="text-gray-200 text-center">
              Join our growing team and help shape the future of technology
            </p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">{job.title}</h3>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/careers"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-blue-900 hover:bg-white/90 transition-colors duration-300"
          >
            Go to Careers Page
          </Link>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}