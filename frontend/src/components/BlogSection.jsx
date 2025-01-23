import { Link } from 'react-router-dom'
import { Clock, Calendar, ChevronRight } from 'lucide-react'

const blogPosts = [
  {
    title: 'Growing IT Sector in West Bengal: Latest Trends 2024',
    description: 'Explore the expanding IT landscape in West Bengal, including new tech parks in Salt Lake Sector V and the emergence of AI/ML opportunities.',
    image: '/placeholder.svg?height=400&width=600',
    readTime: '8 min read',
    date: 'April 15, 2024',
    tags: ['Industry Trends', 'West Bengal', 'Technology'],
  },
  {
    title: 'Skills Gap: What West Bengal IT Companies Actually Want',
    description: 'Analysis of in-demand skills from major IT employers like TCS, Infosys, and Wipro, and why there"s a disconnect with current polytechnic curriculum.',
    image: '/placeholder.svg?height=400&width=600',
    readTime: '10 min read',
    date: 'April 12, 2024',
    tags: ['Skills', 'Employment', 'Education'],
  },
  {
    title: 'Bridging the Polytechnic-Industry Gap in West Bengal',
    description: 'Understanding the challenges faced by polytechnic students in placements and practical solutions to improve employment prospects.',
    image: '/placeholder.svg?height=400&width=600',
    readTime: '12 min read',
    date: 'April 10, 2024',
    tags: ['Education', 'Placements', 'Career Guide'],
  },
]

export default function BlogSection() {
  return (
    <div className="bg-gradient-to-br from-violet-200 via-blue-200 to-cyan-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-violet-600 font-semibold tracking-wide uppercase">
            Industry Insights
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600">
            Latest from the IT Sector
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Stay updated with the latest trends, opportunities, and challenges in West Bengal's IT landscape
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div 
              key={post.title} 
              className="flex flex-col rounded-xl bg-white/70 backdrop-blur-sm shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover" 
                  src={post.image} 
                  alt={post.title} 
                />
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-violet-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-base text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-100 text-violet-800 hover:bg-violet-200 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
                    className="inline-flex items-center text-violet-600 hover:text-violet-800 transition-colors duration-200"
                  >
                    Read More 
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  )
}