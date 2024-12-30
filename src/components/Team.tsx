import React from 'react';

const teamTestimonials = [
  {
    name: "CALLUM READMAN",
    text: "Kairo is a really good company to work for boss looks after you never need to worry about transport or wages staff good to work with aswell"
  },
  {
    name: "DEAN WOOD",
    text: "The best place I have ever worked and the boss is class but professional At the same time"
  },
  {
    name: "JON GORMAN",
    text: "Was a great team to work for and always had your back"
  },
  {
    name: "JACK WHISKEY",
    text: "Great company to work for, Ryan is very attentive to his staff and ensuring their welfare is to a high standard. & always ensuring the client is taken care of"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Join Our Team</h2>
          <p className="mt-4 text-xl text-gray-600">
            See what our team members have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-600 text-lg mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">- {testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="tel:07939119680"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Join Our Team Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;