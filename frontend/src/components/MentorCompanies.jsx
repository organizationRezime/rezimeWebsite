import { useNavigate } from "react-router-dom";
// ?height=80&width=80
const companies = [
  { 
    name: 'Infosys',
    logo: 'infosys.png',
    location: 'Kolkata'
  },
  { 
    name: 'TCS',
    logo: 'tcs.png',
    location: 'Kolkata'
  },
  { 
    name: 'Wipro',
    logo: 'wipro.png',
    location: 'Salt Lake'
  },
  { 
    name: 'Tech Mahindra',
    logo: 'techmahindra.png',
    location: 'Salt Lake'
  },
]

export default function MentorCompanies() {
  const navigate = useNavigate();
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Mentors Are Industry Leaders
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get career guidance from trusted mentors at West Bengal's top IT companies
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {companies.map((company) => (
              <div
                key={company.name}
                className="col-span-1 flex justify-center items-center flex-col p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  className="h-20 w-20"
                  src={`/${company.logo}`}
                  alt={`${company.name} logo`}
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {company.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {company.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Our mentors bring years of industry experience to help guide your career path in technology
          </p>
          <button onClick={()=>{navigate("/career-consultation")}} className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300">
          Get Free Career Consultant
          </button>
        </div>
      </div>
    </div>
  );
}