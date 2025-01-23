import React from 'react';

const sections = [
  {
    title: 'Our Mission',
    content: 'Rezime EdTech (branded as Rezime) is an MSME-registered company dedicated to spreading coding awareness among polytechnic students in West Bengal. Our mission is to empower students with essential coding skills for a better career future.'
  },
  {
    title: 'Services Overview',
    content: 'Rezime provides free career consultations and coding workshops both online and on-campus. For physical workshops, colleges must sponsor travel and meal allowances for our team. Our upcoming affordable courses are designed to make quality coding education accessible to all polytechnic students.'
  },
  {
    title: 'Eligibility & Registration',
    content: 'There are no age restrictions for participating in Rezime programs. Anyone interested in learning coding can join our workshops and courses. Students must register with accurate information for workshops and consultations.'
  },
  {
    title: 'Data Collection & Privacy',
    content: 'While we collect basic information during registration for workshops and consultations, Rezime EdTech respects your privacy. Your information will only be used for communication regarding our services and will not be used for unsolicited promotional activities.'
  },
  {
    title: 'College Partnerships',
    content: 'Colleges interested in hosting Rezime workshops must provide formal invitations and cover basic logistics (travel and meal allowances). We welcome partnerships that help us reach more students across West Bengal.'
  },
  {
    title: 'Certification Policy',
    content: 'Certificates are exclusively provided to students who complete Rezime internship programs. These certificates serve as formal documentation of their practical experience and can be used for their resumes.'
  },
  {
    title: 'Course Offerings',
    content: 'Our upcoming Rezime course offerings will be priced affordably to ensure accessibility. Students will have access to trusted, quality content designed specifically for polytechnic education needs.'
  }
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 pt-36 py-12 px-4 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Rezime
          </h1>
          <div className="text-amber-300 text-xl mb-6">
            Terms & Conditions
          </div>
          <p className="text-gray-200 text-lg mb-4">
            Last updated: October 23, 2024
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-6 py-3">
            <p className="text-amber-300 text-sm">
              An MSME Registered EdTech Company
            </p>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden hover:bg-white/[0.15] transition-all duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-200 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-200 mb-6">
            For workshop invitations, consultations, or any queries about Rezime services, reach out to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-blue-900 hover:bg-white/90 transition-colors duration-300"
            >
              Schedule Consultation
            </button>
            <button 
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors duration-300"
            >
              Partner With Us
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-300 text-sm">
          <p>
            By participating in Rezime workshops, consultations, or courses, you acknowledge that you have read and understood these terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
}