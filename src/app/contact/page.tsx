import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    // Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="h-6 w-6 text-green-600" />,
      title: 'Our Location',
      description: '123 Real Estate Ave, Suite 100, San Francisco, CA 94107',
      link: '#',
      linkText: 'View on map'
    },
    {
      icon: <FiPhone className="h-6 w-6 text-green-600" />,
      title: 'Phone Number',
      description: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      linkText: 'Call us'
    },
    {
      icon: <FiMail className="h-6 w-6 text-green-600" />,
      title: 'Email Address',
      description: 'info@monopolis.com',
      link: 'mailto:info@monopolis.com',
      linkText: 'Send email'
    },
    {
      icon: <FiClock className="h-6 w-6 text-green-600" />,
      title: 'Working Hours',
      description: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
      link: '#',
      linkText: 'Book appointment'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook className="h-5 w-5" />, url: '#', label: 'Facebook' },
    { icon: <FaTwitter className="h-5 w-5" />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram className="h-5 w-5" />, url: '#', label: 'Instagram' },
    { icon: <FaLinkedin className="h-5 w-5" />, url: '#', label: 'LinkedIn' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-gray-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4 whitespace-pre-line">{item.description}</p>
              <a 
                href={item.link} 
                className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
              >
                {item.linkText}
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded-lg text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <FiCheck className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-medium mb-1">Message Sent Successfully!</h3>
                    <p className="text-sm">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Property Inquiry">Property Inquiry</option>
                          <option value="Schedule a Viewing">Schedule a Viewing</option>
                          <option value="Career Opportunities">Career Opportunities</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                      >
                        <FiSend className="mr-2 h-5 w-5" />
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
              
              {/* Map */}
              <div className="bg-gray-100">
                <div className="h-full flex items-center justify-center p-8">
                  <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="h-full flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <FiMapPin className="h-12 w-12 mx-auto mb-3" />
                        <p>Map Location</p>
                        <p className="text-sm">123 Real Estate Ave, San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services and the real estate process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              question: 'How do I get started with buying a home?',
              answer: 'Getting started is easy! Simply contact us to schedule a free consultation. We\'ll discuss your needs, budget, and preferences to help you find your dream home.'
            },
            {
              question: 'What areas do you serve?',
              answer: 'We serve the entire San Francisco Bay Area, including San Francisco, Silicon Valley, Marin County, and the East Bay. Contact us to see if we cover your area of interest.'
            },
            {
              question: 'How much does it cost to use your services?',
              answer: 'For buyers, our services are typically free as we\'re compensated by the seller. For sellers, we offer competitive commission rates. Contact us for a personalized quote.'
            },
            {
              question: 'How long does the home buying process take?',
              answer: 'The timeline varies, but on average it takes 30-45 days from offer acceptance to closing. The entire process, from starting your search to moving in, typically takes 2-4 months.'
            },
            {
              question: 'Do you help with financing?',
              answer: 'Yes! We work with trusted mortgage brokers who can help you secure the best financing options. We can also help you understand different loan types and down payment assistance programs.'
            },
            {
              question: 'What makes Monopolis different from other real estate agencies?',
              answer: 'Our personalized approach, local expertise, and commitment to client satisfaction set us apart. We go above and beyond to ensure a smooth and successful real estate experience.'
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-medium text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">We're here to help! Contact us for more information.</p>
          <a 
            href="#contact-form" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-green-100">Get the latest real estate news and updates delivered to your inbox.</p>
            </div>
            <div className="md:w-1/2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-green-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-green-200 text-sm mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Social Media */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                className="text-gray-500 hover:text-green-600 transition-colors"
                aria-label={social.label}
              >
                <span className="sr-only">{social.label}</span>
                {React.cloneElement(social.icon, { className: 'h-6 w-6' })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
