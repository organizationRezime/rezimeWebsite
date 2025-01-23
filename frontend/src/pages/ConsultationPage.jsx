import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const ConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    topic: 'career-guidance',
    message: '',
    preferredTime: 'morning'
  });

  const [submitted, setSubmitted] = useState(false);

  const consultationTopics = [
    {
      id: 'career-guidance',
      title: 'Career Guidance',
      description: 'Get expert advice on career paths in tech and required skills',
      icon: '📖'
    },
    {
      id: 'skill-assessment',
      title: 'Skill Assessment',
      description: 'Evaluate your current coding skills and get a learning roadmap',
      icon: '✅'
    },
    {
      id: 'placement-prep',
      title: 'Placement Preparation',
      description: 'Learn how to prepare for technical interviews and placements',
      icon: '📅'
    },
    {
      id: 'learning-path',
      title: 'Learning Path',
      description: 'Get a personalized learning path based on your goals',
      icon: '💬'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    document.title = 'Free Consultation Session | Expert Guidance for Your Coding Journey | Rezime Edtech';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-[5rem] py-12 px-4 sm:px-6 lg:px-8">
      {/* SEO Helmet */}
      <Helmet>
        <title>Free Consultation Session | Expert Guidance for Your Coding Journey | Rezime Edtech</title>
        <meta
          name="description"
          content="Book your free consultation with Rezime Edtech and get personalized guidance for career planning, skill assessment, placement preparation, and learning paths tailored for diploma / polytechnic students and others in West Bengal."
        />
        <meta
          name="keywords"
          content="free consultation, career guidance, skill assessment, placement preparation, learning path, Rezime Edtech, West Bengal, diploma students"
        />
        <meta property="og:title" content="Free Consultation Session | Rezime Edtech" />
        <meta
          property="og:description"
          content="Join Rezime Edtech for a free consultation session and get personalized advice on career planning, skill improvement, and placement preparation from experienced mentors."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rezime.in/career-consultation" />
        <meta property="og:image" content="https://rezime.in/LogoModern.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Consultation Session | Rezime Edtech" />
        <meta
          name="twitter:description"
          content="Book your free consultation with Rezime Edtech for career planning, skill assessment, and placement preparation guidance."
        />
        <meta name="twitter:image" content="https://rezime.in/LogoModern.png" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Free Consultation Session</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get personalized guidance from our experts to kickstart your coding journey and boost your career prospects.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-8">
          <p className="text-xl font-semibold text-gray-700 max-w-3xl mx-auto">
            We don't promote our products. Instead, we provide genuine guidance. 
            We strictly avoid promoting our products during free services. We are 
            on a mission to revolutionize the coding culture. We're not here to earn money, 
            but to make a real impact.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits and Topics */}
          <div className="space-y-8">
            {/* Why Choose Us Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Our Consultation?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span className="text-gray-700">Personalized guidance from industry experts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span className="text-gray-700">Custom learning path based on your goals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span className="text-gray-700">Interview preparation tips and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span className="text-gray-700">Industry insights and placement guidance</span>
                </li>
              </ul>
            </div>

            {/* Consultation Topics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {consultationTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span className="text-indigo-600 text-3xl mb-3">{topic.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                  <p className="text-gray-600 text-sm">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Schedule Your Free Consultation</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800">
                Thank you! We'll contact you shortly to confirm your consultation.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone Field */}
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* College Field */}
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">
                    College/Institution
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.college}
                    onChange={handleInputChange}
                    placeholder="Enter your college name"
                  />
                </div>

                {/* Year Field */}
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Year
                  </label>
                  <select
                    id="year"
                    name="year"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.year}
                    onChange={handleInputChange}
                  >
                    <option value="">Select your year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="passed">Passed Out</option>
                  </select>
                </div>

                {/* Topic Field */}
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                    Consultation Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.topic}
                    onChange={handleInputChange}
                  >
                    {consultationTopics.map((topic) => (
                      <option key={topic.id} value={topic.id}>
                        {topic.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Time Field */}
                <div className="col-span-2 md:col-span-2">
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                  >
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 7 PM)</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your goals and any specific questions you have..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Schedule Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;