import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Join Our Free Online Web Development Workshops</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Learn how to kickstart your career as a web developer! We’ll cover everything from the basics to the future of web development. Open to all students.
        </p>
        <p className="mt-2 text-lg leading-6 text-indigo-200">
          Don't miss this opportunity to build a strong foundation in web development and explore exciting career paths.
        </p>
        <Link
          to="/workshops"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Register for Free Workshops
        </Link>
      </div>
    </div>
  )
}
