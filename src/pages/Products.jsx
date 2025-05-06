import React from 'react';

// Expanded product list with more details
const products = [
  { 
    id: 1, 
    name: "Pro Laptop XPS", 
    price: "$999", 
    category: "Computers",
    description: "Powerful laptop with 16GB RAM and 512GB SSD",
    image: "/image1.jpg"
  },
  { 
    id: 2, 
    name: "Ultra Smartphone Z12", 
    price: "$699", 
    category: "Phones",
    description: "Latest smartphone with 108MP camera and 5G capability",
    image: "/image2.jpg"
  },
  { 
    id: 3, 
    name: "Premium Noise-Cancelling Headphones", 
    price: "$199", 
    category: "Audio",
    description: "Wireless headphones with 20-hour battery life",
    image: "/image3.jpg"
  },
  { 
    id: 4, 
    name: "4K Smart TV", 
    price: "$849", 
    category: "Electronics",
    description: "55-inch 4K display with HDR and smart features",
    image: "/image4.jpg"
  },
  { 
    id: 5, 
    name: "Wireless Ergonomic Mouse", 
    price: "$59", 
    category: "Accessories",
    description: "Comfortable design with precision tracking",
    image: "/image1.jpg"
  },
  { 
    id: 6, 
    name: "Smart Watch Pro", 
    price: "$329", 
    category: "Wearables",
    description: "Fitness tracking, notifications, and 3-day battery life",
    image: "/image2.jpg"
  },
  { 
    id: 7, 
    name: "Gaming Console X-Series", 
    price: "$499", 
    category: "Gaming",
    description: "Next-gen gaming with 4K capabilities",
    image: "/image3.jpg"
  },
  { 
    id: 8, 
    name: "Portable Bluetooth Speaker", 
    price: "$89", 
    category: "Audio",
    description: "Waterproof speaker with 10-hour playback",
    image: "/image1.jpg"
  }
];

export default function Products() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h1>
        <p className="text-gray-600 mb-8">Discover our selection of high-quality tech products</p>
        
        {/* Category Filter - Could be made functional with state */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">All</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100 transition">Computers</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100 transition">Phones</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100 transition">Audio</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100 transition">Accessories</button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="relative h-48 bg-gray-200">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-indigo-600">{product.price}</span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md text-sm transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded-md bg-white text-gray-600 hover:bg-gray-100">Previous</button>
            <button className="px-3 py-1 rounded-md bg-indigo-600 text-white">1</button>
            <button className="px-3 py-1 rounded-md bg-white text-gray-600 hover:bg-gray-100">2</button>
            <button className="px-3 py-1 rounded-md bg-white text-gray-600 hover:bg-gray-100">3</button>
            <button className="px-3 py-1 rounded-md bg-white text-gray-600 hover:bg-gray-100">Next</button>
          </nav>
        </div>
      </div>
    </div>
  );
}