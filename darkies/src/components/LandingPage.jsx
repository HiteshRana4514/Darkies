import { useState, useEffect } from 'react';
import { Star, Menu, X, Instagram, Facebook, Send, MessageSquare } from 'lucide-react';

export default function DarkiesLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'flavors', 'testimonials', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Flavors data
  const flavors = [
    {
      title: "Dark Chocolate",
      description: "Rich and intense flavors with 70% cocoa content.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Hazelnut Bites",
      description: "Crunchy hazelnuts coated in smooth milk chocolate.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Fudge Brownie",
      description: "Gooey chocolate fudge wrapped in decadent chocolate.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "White Chocolate Almond",
      description: "Creamy white chocolate with roasted almond pieces.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Spicy Cocoa",
      description: "A hint of chili that adds warmth to our signature chocolate.",
      image: "/api/placeholder/300/200"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Darkies chocolates are truly exceptional! The Hazelnut Bites are my absolute favorite. They make perfect gifts too!"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "I've tried many artisanal chocolates, but none compare to the richness and quality of Darkies. The Dark Chocolate is divine!"
    },
    {
      name: "Priya Sharma",
      rating: 4,
      text: "The Spicy Cocoa was such a delightful surprise. Perfect balance of heat and sweetness. Will definitely order again!"
    }
  ];

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-cream-50 text-gray-900'} min-h-screen font-sans transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} shadow-md backdrop-blur-sm`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-amber-800">
              <span className={`${isDarkMode ? 'text-amber-500' : 'text-amber-800'}`}>Darkies</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className={`${activeSection === 'home' ? 'text-amber-600 font-semibold' : isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-amber-500 transition-colors`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className={`${activeSection === 'about' ? 'text-amber-600 font-semibold' : isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-amber-500 transition-colors`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('flavors')} 
                className={`${activeSection === 'flavors' ? 'text-amber-600 font-semibold' : isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-amber-500 transition-colors`}
              >
                Flavors
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className={`${activeSection === 'testimonials' ? 'text-amber-600 font-semibold' : isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-amber-500 transition-colors`}
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`${activeSection === 'contact' ? 'text-amber-600 font-semibold' : isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-amber-500 transition-colors`}
              >
                Contact
              </button>
            </div>
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className={`p-2 rounded-full ${isDarkMode ? 'bg-amber-700' : 'bg-gray-200'}`}
              >
                <div className={`w-5 h-5 rounded-full transition-transform ${isDarkMode ? 'bg-gray-900 translate-x-2' : 'bg-white -translate-x-2'}`}></div>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className={isDarkMode ? 'text-white' : 'text-gray-800'} /> : <Menu className={isDarkMode ? 'text-white' : 'text-gray-800'} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-4`}>
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className={`${activeSection === 'home' ? 'text-amber-600 font-semibold' : 'text-gray-700'} text-left py-2 hover:text-amber-500`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className={`${activeSection === 'about' ? 'text-amber-600 font-semibold' : 'text-gray-700'} text-left py-2 hover:text-amber-500`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('flavors')} 
                className={`${activeSection === 'flavors' ? 'text-amber-600 font-semibold' : 'text-gray-700'} text-left py-2 hover:text-amber-500`}
              >
                Flavors
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className={`${activeSection === 'testimonials' ? 'text-amber-600 font-semibold' : 'text-gray-700'} text-left py-2 hover:text-amber-500`}
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`${activeSection === 'contact' ? 'text-amber-600 font-semibold' : 'text-gray-700'} text-left py-2 hover:text-amber-500`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-amber-900 to-amber-800"
        style={{
          backgroundImage: 'linear-gradient(rgba(146, 64, 14, 0.85), rgba(120, 53, 15, 0.9)), url("/api/placeholder/1200/800")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-100 mb-6 leading-tight">
              Indulge in the Taste of Love – Homemade Chocolates by Darkies
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-200">
              Crafted with passion. Packed with flavor.
            </p>
            <button 
              onClick={() => scrollToSection('flavors')} 
              className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-8 rounded-full text-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Flavors
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-amber-50'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src="/api/placeholder/600/400" 
                alt="Chocolate making process" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                Our Sweet Journey
              </h2>
              <p className={`mb-6 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Darkies was born from a lifelong passion for chocolate. Our founder, Elizabeth Dark, 
                began making chocolates in her home kitchen over 15 years ago, perfecting recipes 
                passed down through generations and experimenting with new flavors.
              </p>
              <p className={`mb-6 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                What started as gifts for friends and family quickly turned into a beloved local business. 
                Today, we continue to handcraft each chocolate with the same dedication to quality and flavor, 
                using only the finest ingredients sourced from ethical producers around the world.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Every Darkies chocolate tells a story of passion, craftsmanship, and the simple joy that 
                comes from creating something delicious to share with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flavors Section */}
      <section 
        id="flavors" 
        className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
      >
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-2 text-center ${isDarkMode ? 'text-amber-400' : 'text-amber-800'}`}>
            Our Chocolate Collection
          </h2>
          <p className={`text-center mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore our variety of handcrafted chocolates, each made with attention to detail and the perfect balance of flavors.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {flavors.map((flavor, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-800' : 'bg-amber-50'}`}
              >
                <img 
                  src={flavor.image} 
                  alt={flavor.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-amber-400' : 'text-amber-700'}`}>
                    {flavor.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {flavor.description}
                  </p>
                  <button className={`mt-4 px-4 py-2 rounded ${isDarkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-amber-700 hover:bg-amber-800'} text-white`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-amber-900' : 'bg-amber-800'} text-white`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Sweet Community</h2>
          <p className="mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for exclusive offers, new flavor announcements, and chocolate-making tips.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-lg sm:rounded-l-lg sm:rounded-r-none text-gray-800 focus:outline-none"
            />
            <button 
              type="submit" 
              className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-r-lg sm:rounded-l-none sm:rounded-r-lg flex items-center justify-center gap-2 transition-colors"
            >
              Subscribe <Send size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-amber-100'}`}
      >
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-2 text-center ${isDarkMode ? 'text-amber-400' : 'text-amber-800'}`}>
            What Our Customers Say
          </h2>
          <p className={`text-center mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            We love making our customers happy with every bite of our chocolates.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
              >
                <div className="flex text-amber-500 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={18} />
                  ))}
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  "{testimonial.text}"
                </p>
                <p className={`font-medium ${isDarkMode ? 'text-amber-400' : 'text-amber-700'}`}>
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
      >
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-2 text-center ${isDarkMode ? 'text-amber-400' : 'text-amber-800'}`}>
            Get in Touch
          </h2>
          <p className={`text-center mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Have questions or special requests? We'd love to hear from you!
          </p>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-200 text-gray-900'}`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-200 text-gray-900'}`}
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-200 text-gray-900'}`}
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Send Message <MessageSquare size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-10 ${isDarkMode ? 'bg-gray-950' : 'bg-amber-900'} text-white`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Darkies</h3>
              <p className="text-amber-200">Happiness in Every Bite</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-amber-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-amber-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-amber-300 transition-colors">
                <MessageSquare size={24} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-sm text-amber-200">
            <p>© {new Date().getFullYear()} Darkies Chocolate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}