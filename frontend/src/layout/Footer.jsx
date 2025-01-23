import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Rezime Edtech</h2>
            <p className="text-gray-400 mb-2">
              A government registered company under MSME
            </p>
            <p className="text-gray-400 mb-2">ISO Certified</p>
            <p className="text-gray-400">
              Recognized by AICTE
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://linkedin.com/company/rezimeEdtech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/rezimeEdtech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://medium.com/@rezimeedtech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Medium"
              >
                <BookOpen size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/certificate-validation" className="text-gray-400 hover:text-white transition-colors">
                  Validate Certificate
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://forms.gle/KX16pa8iL7LDRs826"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Invite Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <address className="text-gray-400 not-italic">
              <p>Bidhangarh,</p>
              <p>Santoshpur,</p>
              <p>Kolkata, West Bengal 700066, India</p>
            </address>
            <p className="mt-4">
              <a href="mailto:info@rezime.in" className="text-gray-400 hover:text-white transition-colors">
                info@rezime.in
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Rezime Edtech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
