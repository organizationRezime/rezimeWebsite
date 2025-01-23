import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>

      <div className="max-w-2xl w-full relative">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Rezime EdTech</h1>
            <div className="h-1 w-20 bg-amber-300 mx-auto rounded-full"></div>
          </div>

          {/* Error illustration */}
          <div className="relative">
            <div className="text-[180px] font-bold text-white opacity-10 select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
          </div>

          {/* Error message */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Oops! Something went wrong</h2>
            <p className="text-gray-300 max-w-md mx-auto">
              We can't seem to find the page you're looking for. Don't worry, even the best educators make mistakes sometimes!
            </p>
          </div>

          {/* Contact information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-md mx-auto border border-white/20">
            <h3 className="text-white font-semibold mb-2">Need Help?</h3>
            <p className="text-gray-300 mb-4">
              If you have any questions or need assistance, please email us at:
            </p>
            <a 
              href="mailto:query@rezime.in"
              className="text-amber-300 hover:text-amber-400 font-medium flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              query@rezime.in
            </a>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </button>
            <Link
              to="/"
              className="px-6 py-3 rounded-lg bg-white text-blue-900 hover:bg-white/90 transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}