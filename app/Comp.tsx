"use client";
import { useState } from 'react';
import { Menu, X, Mail, Github, Twitter, Linkedin } from 'lucide-react';
import AIBlogPost from './AIBlogPost';

const Comp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = () => {
    if (email) {
      setSubscribeStatus('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setSubscribeStatus(''), 3000);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Contact', href: '#contact' },
    { name: 'About', href: '#about' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="text-3xl font-bold text-blue-600">
                Techoholics
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        {/* <section id="home" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Our Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover insightful articles, tutorials, and stories that inspire and educate
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Subscribe Now
            </a>
          </div>
        </section> */}

        {/* Featured Posts Section */}
        <section id="home" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Featured Articles
            </h2> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((post) => (
                <div
                  key={post}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      Blog Post Title {post}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
          <AIBlogPost/>
        </section>

        {/* Newsletter Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Mail className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest articles and updates delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={handleSubscribe}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
            {subscribeStatus && (
              <p className="mt-4 text-green-600 font-semibold">{subscribeStatus}</p>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="about" className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-300">
                We are passionate about sharing knowledge and stories that matter. Our blog covers a wide range of topics to inspire and educate our readers.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Techoholics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Comp
