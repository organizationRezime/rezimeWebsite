import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Mail,
  MapPin,
  Globe,
  School,
  Briefcase,
  Target,
  Megaphone,
} from "lucide-react";
import { submitQuery } from "../services/api";

export default function ContactUs() {
  const formRef = useRef(null);
  const [submitQueryBtnLoading, setsubmitQueryBtnLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const scrollToForm = (preset = "") => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
    if (preset === "campus") {
      setFormData((prev) => ({
        ...prev,
        subject: "Campus Visit Request",
      }));
    } else if (preset === "sponsor") {
      setFormData((prev) => ({
        ...prev,
        subject: "Sponsorship Inquiry",
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await submitQuery(formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
      console.log(res);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Rezime Edtech | Coding Education & Tech Partnerships
        </title>
        <meta
          name="description"
          content="Connect with Rezime Edtech for campus visits, partnerships, and sponsorship opportunities. Join us in empowering polytechnic students with coding education across West Bengal."
        />
        <meta
          name="keywords"
          content="coding education, tech partnerships, campus visits, polytechnic colleges, West Bengal, coding awareness, tech sponsorship, Rezime Edtech"
        />

        {/* Open Graph / Social Media Meta Tags */}
        <meta
          property="og:title"
          content="Contact Rezime Edtech | Coding Education & Tech Partnerships"
        />
        <meta
          property="og:description"
          content="Connect with Rezime Edtech for campus visits, partnerships, and sponsorship opportunities. Join us in empowering polytechnic students with coding education."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rezime.in/contact" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Rezime Edtech | Tech Education Partnerships"
        />
        <meta
          name="twitter:description"
          content="Partner with Rezime Edtech for coding education initiatives and reach polytechnic students across West Bengal."
        />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rezime.in/contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="pt-16 bg-gray-50">
        {/* Rest of the component remains the same... */}
        {/* Hero Section */}
        <div className="bg-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-6">
              Contact Rezime Edtech
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Reach out to us for partnerships, campus invitations, or any
              inquiries about our coding awareness programs
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-gray-600">info@rezime.in</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-gray-600">
                    Kolkata, West Bengal, India
                  </span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-gray-600">www.rezime.in</span>
                </div>
              </div>
            </div>
            <div ref={formRef}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Send Us a Message
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Brand Awareness Opportunities Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Brand Awareness Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center">
                  <Megaphone className="w-6 h-6 mr-2" />
                  Spread Your Brand
                </h3>
                <p className="text-gray-600 mb-4">
                  Partner with Rezime Edtech to increase your brand visibility
                  among polytechnic students and the tech community in West
                  Bengal.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Logo placement on our website and marketing materials</li>
                  <li>Branded workshops and coding challenges</li>
                  <li>Sponsored content in our educational resources</li>
                  <li>Co-branded events and hackathons</li>
                  <li>Featured articles in our newsletter and blog</li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Reach Your Audience
                </h3>
                <p className="text-gray-600 mb-4">
                  Connect with a diverse and engaged audience of aspiring
                  developers and tech enthusiasts.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Direct access to polytechnic students across West Bengal
                  </li>
                  <li>Engagement with our community of 10,000+ learners</li>
                  <li>Participation in career fairs and networking events</li>
                  <li>
                    Opportunities for product demonstrations and workshops
                  </li>
                  <li>Talent acquisition and internship programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Invite Us Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Invite Us to Your Campus
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
              <div className="flex items-start mb-6">
                <School className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    For Polytechnic Colleges
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Align with our mission to empower polytechnic students and
                    contribute to our vision of creating a skilled tech
                    workforce. Our campus visits include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                    <li>Interactive coding awareness workshops</li>
                    <li>Career guidance sessions with industry experts</li>
                    <li>Hands-on coding demonstrations</li>
                    <li>Mentoring programs for aspiring developers</li>
                    <li>Opportunities for industry-academia collaborations</li>
                  </ul>
                  <button
                    onClick={() => scrollToForm("campus")}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                  >
                    Request Campus Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsorship Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Sponsorship Opportunities
            </h2>
            <div className="bg-indigo-50 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
              <div className="flex items-start mb-6">
                <Briefcase className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    For Brands and Companies
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Support our mission and vision by partnering with Rezime
                    Edtech. Your sponsorship helps us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                    <li>
                      Reach a wider audience of polytechnic students across West
                      Bengal
                    </li>
                    <li>
                      Provide more free coding workshops and career guidance
                      sessions
                    </li>
                    <li>
                      Develop cutting-edge learning resources for aspiring
                      developers
                    </li>
                    <li>
                      Create networking opportunities between students and
                      industry leaders
                    </li>
                    <li>
                      Foster innovation and entrepreneurship in the tech
                      community
                    </li>
                  </ul>
                  <button
                    onClick={() => scrollToForm("sponsor")}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                  >
                    Inquire About Sponsorship
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
