import React from 'react';
import { Award, Users, Clock, BookOpen } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Students Trained' },
    { icon: Clock, value: '10+', label: 'Years Experience' },
    { icon: Award, value: '100%', label: 'Placement Rate' },
    { icon: BookOpen, value: '20+', label: 'Expert Trainers' },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Director of Education',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Ph.D. in Computer Science with 15+ years of industry experience',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Technical Instructor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Former Senior Developer at Google with expertise in Web Technologies',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Career Counselor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Certified Career Coach with focus on Tech Industry Placement',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About TechEdu Institute
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Transforming careers through quality education and practical training in
            the latest technologies
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide world-class technology education that empowers individuals
                to excel in their careers and contribute to the digital
                transformation of society.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become the leading technology education institute, recognized
                globally for excellence in training and student success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;