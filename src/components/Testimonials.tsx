import React from 'react';

const testimonials = [
  {
    name: "Ryan Ripley",
    text: "Awesome company very reliable highly recommend"
  },
  {
    name: "Kay Shah",
    text: "Excellent security service provided, definitely would recommend"
  },
  {
    name: "Cherry Rain",
    text: "Great team looking out for the people, looking after the people, fair and square. The security you should hire, holding equilibrium and smiles"
  },
  {
    name: "Mark Sales",
    text: "Best company to work with"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;