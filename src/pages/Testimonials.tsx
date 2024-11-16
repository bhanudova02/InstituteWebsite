import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'Software Developer at Google',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      content: 'The web development course completely transformed my career. The practical approach and industry-relevant curriculum helped me land my dream job.',
      course: 'Web Development',
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      role: 'Data Analyst at Amazon',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      content: 'Outstanding data science program! The instructors are highly knowledgeable and the hands-on projects gave me real-world experience.',
      course: 'Data Science',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Digital Marketing Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      content: 'The digital marketing course provided comprehensive knowledge and practical skills that I use daily in my current role.',
      course: 'Digital Marketing',
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Success Stories</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Hear from our alumni about their learning experience and career growth
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="text-sm text-gray-500">
                  Course: {testimonial.course}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;