import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'utkarsh5604.srivastava@gmail.com',
      href: 'mailto:utkarsh5604.srivastava@gmail.com?subject=Hello%20Utkarsh&body=Hi%20Utkarsh,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7482072609',
      href: 'tel:+917482072609',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/utkarsh-shrivastawa-104110173/',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'GitHub Profile',
      href: 'https://github.com/utkarshshrivastawa',
      color: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Contact Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#089cf1] to-[#11efef] mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6">
              Let's connect and explore opportunities together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center space-x-6">
                  <div className={`bg-gradient-to-r ${item.color} p-4 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.label}</h3>
                    <p className="text-gray-600 group-hover:text-[#089cf1] transition-colors">{item.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-gradient-to-r from-[#089cf1] to-[#11efef] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600 text-lg">Noida, Uttar Pradesh, India</p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#089cf1] to-[#11efef] rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-xl mb-6">
                I'm always open to discussing new opportunities and innovative projects.
              </p>
              <a
                href="mailto:utkarsh5604.srivastava@gmail.com"
                className="bg-white text-[#089cf1] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 hover:scale-105"
              >
                <Mail size={20} />
                <span>Start a Conversation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;