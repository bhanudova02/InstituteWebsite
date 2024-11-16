import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="pt-20">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We're here to help! Reach out to us with any questions or concerns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-sky-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-600">Emergency: (555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-sky-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@dentalcare.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-sky-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">123 Dental Street</p>
                    <p className="text-gray-600">City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-sky-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-600">Saturday: 9AM - 2PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Google Maps integration placeholder</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="input-field"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button> 
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;