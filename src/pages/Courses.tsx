import React from 'react';
import { Code, Database, Terminal, Monitor, BookOpen, Globe, Brain, Shield } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      icon: Code,
      title: 'Web Development',
      level: 'Beginner to Advanced',
      duration: '6 months',
      description: 'Master HTML, CSS, JavaScript, React, and Node.js',
      features: ['Real-world projects', 'Industry mentorship', 'Job placement assistance'],
    },
    {
      icon: Database,
      title: 'Data Science',
      level: 'Intermediate',
      duration: '8 months',
      description: 'Learn Python, SQL, Machine Learning, and Data Visualization',
      features: ['Hands-on exercises', 'Live projects', 'Certification'],
    },
    {
      icon: Monitor,
      title: 'Office Automation',
      level: 'Beginner',
      duration: '3 months',
      description: 'Master MS Office Suite and essential computer skills',
      features: ['Practical training', 'Mock tests', 'Course completion certificate'],
    },
    {
      icon: Terminal,
      title: 'Programming Fundamentals',
      level: 'Beginner',
      duration: '4 months',
      description: 'Learn C++, Java, and Python programming',
      features: ['Coding exercises', 'Project work', 'Interview preparation'],
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      level: 'Beginner to Intermediate',
      duration: '4 months',
      description: 'Master SEO, SEM, and Social Media Marketing',
      features: ['Live campaigns', 'Industry tools', 'Portfolio development'],
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      level: 'Advanced',
      duration: '8 months',
      description: 'Deep Learning, Neural Networks, and AI Applications',
      features: ['Advanced projects', 'Research papers', 'Industry collaboration'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive technology courses designed to help you succeed in your career
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <course.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {course.level}
                  </span>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {course.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <ul className="space-y-2">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Shield className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <button className="w-full btn-primary">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;