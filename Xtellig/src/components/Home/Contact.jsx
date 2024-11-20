import React from 'react';

function Contact() {
  return (
    // Main container for the contact section
    <div className="px-4 py-12 mt-32 bg-white">
      <div className="grid items-center max-w-5xl gap-16 mx-auto my-6 sm:grid-cols-2">
        {/* Left Section: Contact Information */}
        <div>
          {/* Heading */}
          <h1 className="text-3xl font-extrabold md:text-4xl">Let's Talk</h1>
          <p className="mt-6">
            Have some big idea or brand to develop and need help? Then reach out we'd love to hear about
            your project and provide help.
          </p>

          {/* Contact Email Section */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                {/* Email Icon */}
                <div
                  className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                  aria-label="Email Icon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058"
                    aria-hidden="true"
                  >
                    <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                  </svg>
                </div>
                <a href="mailto:info@example.com" className="text-[#007bff] ml-3">
                  <small className="block">Mail</small>
                  <strong>info@example.com</strong>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Socials</h2>
            <ul className="flex mt-4 space-x-4">
              {/* Example social media links */}
              {['Facebook', 'LinkedIn', 'Instagram'].map((platform, index) => (
                <li
                  key={index}
                  className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                >
                  <a href="#" aria-label={`Visit our ${platform}`} className="block">
                    {/* Replace this with platform-specific icons */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#007bff"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75z" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form className="ml-auto space-y-4">
          {/* Input Fields */}
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 bg-[#f8f9ff] outline-cyan-900"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 bg-[#f8f9ff] outline-cyan-900"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4 bg-[#f8f9ff] outline-cyan-900"
            required
          />
          <textarea
            placeholder="Message"
            rows="6"
            className="w-full rounded-md px-4 bg-[#f8f9ff] pt-3 outline-cyan-900"
            required
          />
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 mt-6 text-white transition-all rounded-xl bg-cyan-900 hover:bg-cyan-800"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
