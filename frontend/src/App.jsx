import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ConsultationPage from './pages/ConsultationPage';
import WorkshopPage from './pages/WorkshopsPage';
import ComingSoon from './components/ComingSoon';
import HomePage from './pages/HomePage';
import AppLayout from './layout/AppLayout';
import TermsAndConditions from './pages/TermsAndConditions';
import CertificateValidatePage from './pages/CertificateValidatePage';
import Careers from './pages/careers';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/career-consultation",
          element: <ConsultationPage />,
        },
        {
          path: "/workshops",
          element: <WorkshopPage />,
        },
        {
          path: "/courses",
          element: <ComingSoon />,
        },
        {
          path: "/doubt-support",
          element: <ComingSoon />,
        },
        {
          path: "/practice",
          element: <ComingSoon />,
        },
        {
          path: "/blog",
          element: <ComingSoon />,
        },
        {
          path: "/blog/:titile",
          element: <ComingSoon/>
        },
        {
          path: "terms-and-conditions",
          element: <TermsAndConditions/>
        },
        {
          path: '/certificate-validation',
          element: <CertificateValidatePage/>
        },
        {
          path: "/careers",
          element: <Careers />
        }
      ],
    },
  ]);

  return (
    <>
      {/* <ScrollToTop /> */}
      <RouterProvider router={router} />
    </>
  );
}
