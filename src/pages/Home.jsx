import {
  About,
  Courses,
  Footer,
  Hero,
  Navbar,
  Partners,
  Service,
  Testimonials,
  Topics,
} from "../components/home";

import React from "react";

const Home = () => {
  return (
    <>
      <section className="home-bg w-full min-h-screen font-Jost">
        <Navbar />
        <Hero />
        <Partners />
        <Topics />
        <Courses />
        <About />
        <Testimonials />
        <Service />
        <Footer />
      </section>
    </>
  );
};

export default Home;
