import React from 'react';

const faqs = [
  { q: 'What printing services do you offer?', a: 'We offer business cards, flyers, t-shirt printing, banners, photo prints, and more.' },
  { q: 'How fast is your turnaround?', a: 'Most orders are completed within 2-3 business days. Rush options are available.' },
  { q: 'Can I get a custom design?', a: 'Absolutely! Our design team can help you create the perfect print materials.' },
  { q: 'Do you deliver?', a: 'Yes, we offer local delivery and shipping options.' },
];

const FAQ = () => (
  <section id="faq" className="py-20 bg-white px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6 text-left">
        {faqs.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-gray-400">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Q: {item.q}</h3>
            <p className="text-gray-700">A: {item.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ; 