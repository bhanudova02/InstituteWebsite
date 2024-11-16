import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Monitor, Terminal } from 'lucide-react';

const Home = () => {
  const courses = [
    {
      title: 'Web Development',
      icon: Code,
      description: 'Master modern web technologies and frameworks',
    },
    {
      title: 'Data Science',
      icon: Database,
      description: 'Learn data analysis and machine learning',
    },
    {
      title: 'Office Automation',
      icon: Monitor,
      description: 'Excel in essential office software skills',
    },
    {
      title: 'Programming',
      icon: Terminal,
      description: 'Build strong programming foundations',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering Careers Through Technology
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
            Join our institute to master the latest technologies and launch your career in the digital world
          </p>
          <Link
            to="/registration"
            className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
          >
            Start Your Journey Today
          </Link>
        </div>
      </div>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <div
                key={course.title}
                className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-200"
              >
                <course.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose TechEdu Institute?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <Monitor className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Experts</h3>
              <p className="text-gray-600">
                Learn from professionals with years of industry experience
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                <Terminal className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
              <p className="text-gray-600">
                Practice with real-world projects and assignments
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Job Assistance</h3>
              <p className="text-gray-600">
                Get placement support and career guidance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of successful students who have transformed their careers with us
          </p>
          <Link
            to="/registration"
            className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;