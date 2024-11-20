import React from 'react';

// Footer Component
function Footer() {
  return (
    <footer className="px-4 py-12 mt-32 bg-white sm:px-10">
      {/* Grid Layout for Footer Sections */}
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-14 max-lg:gap-8">
        {/* About Us Section */}
        <div className="lg:col-span-2">
          <h4 className="mb-6 text-xl font-semibold">About Us</h4>
          <p>
            Driven by innovation, we are dedicated to helping businesses craft memorable experiences.
            Our mission is to provide powerful, intuitive tools that bring your brand vision to life,
            one landing page at a time.
          </p>
          {/* Search Input */}
          <div className="bg-[#f8f9ff] flex px-4 py-3 rounded-md text-left mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="mr-3 rotate-90 fill-gray-500"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
            </svg>
            <input
              type="email"
              placeholder="Search..."
              className="w-full outline-none bg-transparent text-gray-600 text-[15px]"
              aria-label="Search"
            />
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="mb-6 text-xl font-semibold">Services</h4>
          <ul className="space-y-5">
            <li><a href="#" className="hover:text-blue-600">Web Development</a></li>
            <li><a href="#" className="hover:text-blue-600">Mobile App Development</a></li>
            <li><a href="#" className="hover:text-blue-600">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-blue-600">Digital Marketing</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="mb-6 text-xl font-semibold">Resources</h4>
          <ul className="space-y-5">
            <li><a href="#" className="hover:text-blue-600">Webinars</a></li>
            <li><a href="#" className="hover:text-blue-600">Ebooks</a></li>
            <li><a href="#" className="hover:text-blue-600">Templates</a></li>
            <li><a href="#" className="hover:text-blue-600">Tutorials</a></li>
          </ul>
        </div>

        {/* About Us Links Section */}
        <div>
          <h4 className="mb-6 text-xl font-semibold">About Us</h4>
          <ul className="space-y-5">
            <li><a href="#" className="hover:text-blue-600">Our Story</a></li>
            <li><a href="#" className="hover:text-blue-600">Mission and Values</a></li>
            <li><a href="#" className="hover:text-blue-600">Team</a></li>
            <li><a href="#" className="hover:text-blue-600">Testimonials</a></li>
          </ul>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="my-8" />

      {/* Footer Copyright */}
      <p className="text-center">
        Copyright © 2024
        <a href="https://readymadeui.com/" target="_blank" rel="noopener noreferrer" className="mx-1 hover:underline">
          Xtellig
        </a>
        All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
