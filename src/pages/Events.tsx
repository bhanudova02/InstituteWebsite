import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Web Development Workshop',
      date: '2024-04-15',
      time: '10:00 AM - 2:00 PM',
      location: 'Main Campus Auditorium',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Learn modern web development techniques from industry experts',
      seats: 50,
    },
    {
      title: 'Data Science Seminar',
      date: '2024-04-20',
      time: '2:00 PM - 5:00 PM',
      location: 'Virtual Event',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Explore the latest trends in data science and analytics',
      seats: 100,
    },
    {
      title: 'Tech Career Fair',
      date: '2024-04-25',
      time: '9:00 AM - 4:00 PM',
      location: 'Convention Center',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Meet top employers and explore career opportunities',
      seats: 200,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Workshops</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our upcoming events to enhance your skills and network with industry professionals
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {event.title}
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    {event.seats} seats available
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <button className="w-full btn-primary">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;