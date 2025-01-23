import { useEffect, useState } from 'react'
import { 
  Code, Paintbrush, Wrench, PenTool, Headphones, GraduationCap, 
  Megaphone, Coffee, Cpu, BarChart3, Layers, Mail
} from 'lucide-react'

export default function Careers() {
  const [activeTab, setActiveTab] = useState('full-time')
  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    document.title = 'Careers at Rezime Edtech | We are Hiring'
  }, []);

  const jobs = {
    'full-time': [
      { title: 'React Developer', description: 'Build and maintain our core educational platforms using React.', icon: Code },
      { title: 'Frontend Developer', description: 'Create beautiful and intuitive user interfaces for our web applications.', icon: Paintbrush },
      { title: 'Backend Developer', description: 'Design and implement scalable backend systems to power our educational tools.', icon: Wrench },
      { title: 'Graphic Designer', description: 'Create visually appealing graphics and illustrations for our educational content.', icon: PenTool },
      { title: 'Customer Support Specialist', description: 'Provide excellent support to our users and help them make the most of our platform.', icon: Headphones },
      { title: 'Education Mentor', description: 'Guide and support students in their learning journey on our platform.', icon: GraduationCap },
    ],
    'internships': [
      { title: 'Frontend Development Intern', description: 'Learn and contribute to our frontend development projects.', icon: Code },
      { title: 'Backend Development Intern', description: 'Gain hands-on experience in backend development and system design.', icon: Wrench },
      { title: 'Marketing Intern', description: 'Assist in creating and implementing marketing strategies for our edtech products.', icon: Megaphone },
      { title: 'Graphic Design Intern', description: 'Create engaging visual content for our educational materials and marketing.', icon: PenTool },
      { title: 'Customer Support Intern', description: 'Learn the ropes of providing excellent customer service in the edtech industry.', icon: Headphones },
      { title: 'Java Development Intern', description: 'Work on Java-based projects and enhance your programming skills.', icon: Coffee },
      { title: 'C++ Development Intern', description: 'Dive into C++ programming and contribute to our performance-critical systems.', icon: Cpu },
      { title: 'Data Science Intern', description: 'Apply data analysis and machine learning techniques to improve our educational offerings.', icon: BarChart3 },
      { title: 'UI/UX Design Intern', description: 'Help create intuitive and engaging user experiences for our platforms.', icon: Layers },
    ]
  }

  const handleJobClick = (job) => {
    setSelectedJob(job)
    const element = document.getElementById('apply-section')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen pt-32 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-indigo-900 p-8">
      <main className="max-w-6xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">Join the Rezime Edtech Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're on a mission to revolutionize education through technology. Join us in shaping the future of learning.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-indigo-700 dark:text-indigo-400">Open Positions</h2>
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setActiveTab('full-time')}
              className={`px-6 py-2 rounded-l-full ${activeTab === 'full-time' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} transition duration-300`}
            >
              Full-time & Part-time
            </button>
            <button
              onClick={() => setActiveTab('internships')}
              className={`px-6 py-2 rounded-r-full ${activeTab === 'internships' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} transition duration-300`}
            >
              Internships
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs[activeTab].map((job, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleJobClick(job)}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4 text-indigo-600 dark:text-indigo-400">
                    {job.icon && <job.icon size={48} />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-400">{job.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">Our Philosophy: Learn and Grow Together</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            At Rezime Edtech, we believe in fostering a culture of continuous learning and growth. We welcome applicants from all backgrounds and experience levels. If you're passionate about education and technology, we encourage you to apply and join us on this exciting journey!
          </p>
        </section>

        <section id="apply-section" className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">Ready to Apply?</h2>
          {selectedJob ? (
            <>
              <p className="text-xl text-indigo-600 dark:text-indigo-400 mb-4">You're applying for: {selectedJob.title}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">{selectedJob.description}</p>
            </>
          ) : (
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Click on a job opening above to apply, or send your resume if you think you'd be a great fit for our team!
            </p>
          )}
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We're excited to hear from you! Send your resume to hr@rezime.in and tell us which position you're interested in. 
            Don't see a perfect fit? We're always open to talented individuals who can bring value to our team.
          </p>
          <a
            href={`mailto:hr@rezime.in${selectedJob ? `?subject=Application for ${selectedJob.title}` : ''}`}
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            <Mail className="mr-2" />
            Send Your Resume
          </a>
        </section>
      </main>
    </div>
  )
}