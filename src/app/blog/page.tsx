import React from 'react';
import { FiCalendar, FiClock, FiTag, FiSearch, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: '2024 Real Estate Market Trends: What Buyers and Sellers Need to Know',
    excerpt: 'Discover the key trends shaping the 2024 real estate market and how they might impact your buying or selling decisions this year.',
    date: 'June 15, 2024',
    readTime: '6 min read',
    category: 'Market Trends',
    image: '/blog/trends-2024.jpg',
    slug: '2024-real-estate-trends'
  },
  {
    id: 2,
    title: 'First-Time Home Buyer Guide: Steps to Your Dream Home',
    excerpt: 'Everything you need to know about navigating the home buying process as a first-time buyer, from pre-approval to closing.',
    date: 'May 28, 2024',
    readTime: '8 min read',
    category: 'Home Buying',
    image: '/blog/first-time-buyer.jpg',
    slug: 'first-time-home-buyer-guide'
  },
  {
    id: 3,
    title: 'Luxury Real Estate: What Buyers Are Looking For in 2024',
    excerpt: 'Explore the most sought-after luxury home features and amenities that are trending in the high-end real estate market this year.',
    date: 'May 12, 2024',
    readTime: '7 min read',
    category: 'Luxury Homes',
    image: '/blog/luxury-homes.jpg',
    slug: 'luxury-real-estate-trends-2024'
  },
  {
    id: 4,
    title: 'The Complete Guide to Home Staging: Sell Faster and For More',
    excerpt: 'Professional home staging tips to help your property stand out in a competitive market and attract the best offers.',
    date: 'April 30, 2024',
    readTime: '9 min read',
    category: 'Home Selling',
    image: '/blog/home-staging.jpg',
    slug: 'complete-guide-home-staging'
  },
  {
    id: 5,
    title: 'Neighborhood Spotlight: The Best Places to Live in the City',
    excerpt: 'An in-depth look at the most desirable neighborhoods, including schools, amenities, and local attractions.',
    date: 'April 15, 2024',
    readTime: '10 min read',
    category: 'Neighborhoods',
    image: '/blog/neighborhood-spotlight.jpg',
    slug: 'best-neighborhoods-2024'
  },
  {
    id: 6,
    title: 'Investment Properties: How to Build Wealth Through Real Estate',
    excerpt: 'Strategies for identifying and investing in profitable rental properties to build long-term wealth.',
    date: 'March 28, 2024',
    readTime: '11 min read',
    category: 'Investing',
    image: '/blog/investment-properties.jpg',
    slug: 'building-wealth-real-estate-investment'
  }
];

// Popular tags
const popularTags = [
  'Market Trends', 'Home Buying', 'Selling Tips', 'Investment', 'Luxury Homes',
  'First-Time Buyers', 'Neighborhoods', 'Home Improvement', 'Financing', 'Real Estate Tech'
];

// Categories
const categories = [
  { name: 'All', count: 24 },
  { name: 'Market Trends', count: 8 },
  { name: 'Home Buying', count: 6 },
  { name: 'Selling Tips', count: 5 },
  { name: 'Investment', count: 3 },
  { name: 'Luxury Homes', count: 2 }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Monopolis Blog</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Expert insights, market trends, and helpful tips for buyers, sellers, and investors
          </p>
          
          {/* Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Search articles..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:flex gap-8">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            
            <div className="space-y-10">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0 md:w-1/3 bg-gray-200 h-48">
                      <div className="h-full flex items-center justify-center text-gray-400">
                        <span>Featured Image</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="flex items-center">
                          <FiCalendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <FiClock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        <Link href={`/blog/${post.slug}`} className="hover:text-green-600 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center">
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-green-600 hover:text-green-700 font-medium flex items-center"
                        >
                          Read more
                          <FiArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination */}
            <nav className="mt-12 flex justify-center" aria-label="Pagination">
              <div className="flex rounded-md shadow-sm">
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-green-600 text-white text-sm font-medium"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  3
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Next
                </a>
              </div>
            </nav>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 mt-12 lg:mt-0">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className={`flex justify-between items-center py-2 px-3 rounded-lg transition-colors ${
                        index === 0 ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${
                      index === 0 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-green-700 text-sm mb-4">
                Get the latest real estate news and insights delivered to your inbox.
              </p>
              <form className="space-y-3">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Real Estate Question?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of experts is here to help with all your real estate needs.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
