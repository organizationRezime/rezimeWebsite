import { Link } from 'react-router-dom'

const jobs = [
  {
    title: 'React Developer',
    description: 'Join our frontend team to build cutting-edge web applications using React and modern web technologies.',
  },
  {
    title: 'UI/UX Designer',
    description: 'Help shape the future of our products by creating intuitive and beautiful user interfaces and experiences.',
  },
  {
    title: 'Backend Engineer',
    description: 'Work on scalable backend systems using Node.js, GraphQL, and cloud technologies.',
  },
  {
    title: 'DevOps Engineer',
    description: 'Manage our infrastructure and streamline our deployment processes using Docker, Kubernetes, and AWS.',
  },
]

export default function Hiring() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-200 font-semibold tracking-wide uppercase animate-bounce">Join Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            We're looking for talented individuals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-indigo-200 lg:mx-auto">
            Help shape the future of technology by joining our team of passionate developers and designers.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {jobs.map((job) => (
              <div key={job.title} className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{job.description}</p>
                  <div className="mt-4">
                    <Link
                      to="/careers"
                      className="text-base font-medium text-indigo-600 hover:text-indigo-500 transition duration-300 ease-in-out"
                    >
                      Learn More <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/careers"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            View All Openings
          </Link>
        </div>
      </div>
    </div>
  )
}