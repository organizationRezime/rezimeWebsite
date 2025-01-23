import React from 'react';
import { Target, AlertTriangle } from 'lucide-react';

const aboutContent = [
  {
    title: 'The Problem',
    description:
      'Many Polytechnic students lack exposure to coding culture, practical skills, and industry-aligned knowledge. This leads to limited opportunities and unpreparedness for the demands of the IT sector.',
    icon: AlertTriangle,
    bgColor: 'bg-red-50',
  },
  {
    title: 'Our Mission',
    description:
    'To promote a vibrant coding culture in Polytechnic colleges and help students discover the vast opportunities that coding offers in shaping their careers.',
    icon: Target,
    bgColor: 'bg-indigo-50',
  },
];

export default function ProblemAndMission() {
  return (
    <div className="py-12 bg-gradient-to-br from-blue-100 via-violet-200 to-purple-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Who We Are
          </p>
          <p className="mt-4 text-lg text-gray-500">
          We are Rezime Edtech. We are on a mission to transform the coding landscape for Polytechnic students in West Bengal by addressing real challenges and unlocking opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {aboutContent.map((item) => (
            <div
              key={item.title}
              className={`${item.bgColor} p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-white rounded-full shadow-md">
                  <item.icon className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
