import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Pro Laptop XPS",
      price: "$999",
      image: "/api/placeholder/600/400",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Ultra Smartphone Z12",
      price: "$699",
      image: "/api/placeholder/600/400",
      tag: "New Arrival"
    },
    {
      id: 3,
      name: "Premium Headphones",
      price: "$199",
      image: "/api/placeholder/600/400",
      tag: "Hot Deal"
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Tech Enthusiast",
      content: "MyStore has the best selection of tech products I've found. Their customer service is outstanding!",
      rating: 5
    },
    {
      id: 2,
      name: "Mark Thompson",
      role: "Professional Photographer",
      content: "I rely on quality equipment for my work, and MyStore never disappoints. Fast shipping and reliable products.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Software Developer",
      content: "As someone who needs the latest tech, I appreciate how MyStore always stocks cutting-edge products.",
      rating: 4
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-indigo-700">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
        <div className="relative container mx-auto px-6 py-24 md:py-32 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
            Welcome to MyStore
          </h1>
          <p className="text-xl text-indigo-100 text-center max-w-2xl mb-10">
            Your one-stop destination for premium tech products, offering unbeatable quality, innovation, and customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg">
              Shop Now
            </Link>
            <Link to="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-700 font-semibold px-6 py-3 rounded-lg transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-indigo-100 rounded-full">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">We source only the highest quality products from trusted manufacturers and brands.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-indigo-100 rounded-full">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Get your products delivered quickly with our expedited shipping options.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-indigo-100 rounded-full">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated customer service team is always ready to assist you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
            <Link to="/products" className="text-indigo-600 hover:text-indigo-800 font-semibold">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                  <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                    {product.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-indigo-600">{product.price}</span>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-center mb-4">
                  {/* Star rating */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-indigo-600 font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-indigo-700">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-indigo-100 mb-8">Subscribe to our newsletter for the latest product updates, exclusive offers, and tech news.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button 
                type="submit" 
                className="bg-white text-indigo-700 hover:bg-indigo-100 font-semibold px-6 py-3 rounded-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-10 md:p-16 text-center shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Premium Tech?</h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Explore our collection of cutting-edge products designed to enhance your digital lifestyle.
            </p>
            <Link to="/products" className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-8 py-4 rounded-lg transition duration-300 shadow-lg">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}