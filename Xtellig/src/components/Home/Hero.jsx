import React from 'react'

const Hero = () => {
  return (
    <div className="relative">
      <div className="px-4 sm:px-10">
        <div className="relative z-10 max-w-4xl mx-auto mt-16 text-center">
          <h1 className="md:text-6xl text-4xl font-extrabold mb-6 md:!leading-[75px]">
            Transform Your Brand with Custom Landing Pages
          </h1>
          <p className="text-base">
            Unlock the power of personalized landing pages that seamlessly integrate with Typeform. 
            Create impactful first impressions, gather insights, and boost conversions with ease. 
            Elevate your online presence and drive success with our intuitive platform.
          </p>
          <div className="mt-10">
            <button className="px-6 py-3 text-white transition-all rounded-xl bg-cyan-900 hover:bg-cyan-800">
              Get started today
            </button>
          </div>
        </div>
        <hr className="my-12 border-gray-300" />
      </div>
      {/* Background Image with Accessibility */}
      <img 
        src="https://wallpapercave.com/wp/4H722rT.jpg" 
        alt="Beautiful background image to enhance the hero section" 
        className="absolute inset-0 object-cover w-full h-full" 
      />
    </div>
  )
}

export default Hero
