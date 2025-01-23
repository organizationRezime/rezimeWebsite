import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "Rezime's free workshops were a turning point in my learning journey.",
    author: "Arjun Sen",
    company: "Polytechnic, Siliguri",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    quote: "Thanks to Rezime, I finally understood the basics of coding. The free consultancy and workshops were extremely helpful.",
    author: "Suman Roy",
    company: "Polytechnic, Kolkata",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    quote: "The free workshops gave me confidence in coding that I never had before. Rezime's support is amazing, and I can't wait for the full courses to launch soon.",
    author: "Raju Jana",
    company: "Polytechnic, Purba medinipur",
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Students Say
          </p>
        </div>
        <div className="mt-10">
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <blockquote className="mt-8">
                  <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                    <p>&ldquo;{testimonial.quote}&rdquo;</p>
                  </div>
                  <footer className="mt-8">
                    <div className="md:flex md:items-center md:justify-center">
                      {/* <div className="md:flex-shrink-0">
                        <img
                          className="mx-auto h-10 w-10 rounded-full"
                          src={testimonial.image}
                          alt=""
                        />
                      </div> */}
                      <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                        <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                        <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 0h3L9 20H6l5-20z" />
                        </svg>
                        <div className="text-base font-medium text-gray-500">{testimonial.company}</div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
