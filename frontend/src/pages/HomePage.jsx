import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import Services from '../components/Services';
import MentorCompanies from '../components/MentorCompanies';
import BlogSection from '../components/BlogSection';
import Hiring from '../components/Hiring';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import WhoWeAre from '../components/WhoWeAre';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Rezime Edtech - Empowering Future Coders</title>
        <meta
          name="description"
          content="Rezime Edtech - Your path to mastering coding. Explore expert mentorship, online coding courses, and hands-on workshops to build your coding skills and start your journey to a successful tech career. Join us in spreading the coding culture among diploma students in West Bengal."
        />
        <meta
          name="keywords"
          content="Rezime Edtech, coding mentorship, coding courses, programming, web development, software engineering, tech career, online workshops, spreading coding culture in West Bengal, diploma students"
        />
        <meta property="og:title" content="Home | Rezime Edtech - Empowering Future Coders" />
        <meta
          property="og:description"
          content="Unlock your coding potential with Rezime Edtech! Join our expert-led coding courses, mentorship programs, and workshops to take your tech career to new heights. Together, let's spread the coding culture among diploma students in West Bengal."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rezime.in/" />
        <meta property="og:image" content="https://rezime.in/LogoModern.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Rezime Edtech - Empowering Future Coders" />
        <meta
          name="twitter:description"
          content="Rezime Edtech is your destination for coding mastery with expert mentorship, online courses, and hands-on workshops. Together, let's spread the coding culture among diploma students in West Bengal."
        />
        <meta name="twitter:image" content="https://rezime.in/LogoModern.png" />
      </Helmet>

      <Hero />
      <WhoWeAre/>
      <Services />
      <MentorCompanies />
      <CallToAction />
      <Testimonials />
      {/* <BlogSection /> */}
      <Hiring />
    </>
  );
}

export default HomePage;
