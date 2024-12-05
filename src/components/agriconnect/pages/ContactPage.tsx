import React, { useState } from 'react';

// ContactForm Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <div className="flex justify-center items-center py-20 bg-gray-50 min-h-screen bg-gradient-to-r from-green-300 to-green-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
      >
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Contact Us</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md mt-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md mt-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md mt-2"
            rows={4}
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

// ContactPage Component
const ContactPage = () => {
  return (
    <div>
      {/* Contact Form Section */}
      <section className="bg-gray-50 py-20 bg-gradient-to-r from-green-300 to-green-600">
        <ContactForm />
      </section>
      
      
      {/* Map Section */}
<section className="py-20 bg-gray-100 w-full bg-gradient-to-r from-green-300 to-green-600">
  <h3 className="text-4xl font-bold text-center text-white mb-6">Locate Us</h3>
  <div className="w-full">
    <iframe
    title='Bulawayo'
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bulawayo+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      width="100%"
      height="600"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 text-center">
        <p>© 2024 AgriConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
