import React from 'react';
import Navbar from '../components/Home/Navbar';
import Hero from '../components/Home/Hero';
import Footer from '../components/Home/Footer';
import Contact from '../components/Home/Contact';
import Features from '../components/Home/Features';
import Subscription from '../components/Home/Subscription';
import Team from '../components/Home/Team';
import UserList from '../components/Home/UserList';

const Home = () => {
  return (
    <>
      <div className="max-w-[1920px] mx-auto">
        <div className="bg-[#f8f9ff] text-black text-[15px]">
          <Navbar />
          <Hero />
          <UserList />
          <Features />
          <Subscription />
          <Team />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
