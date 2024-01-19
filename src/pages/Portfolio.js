import React from "react";
import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Work,
  ContactMe,
  Footer,
} from "@/components/Index";

const Portfolio = () => {
  return (
    <div className="flex flex-col max-w-[1440px] h-fit mx-auto">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Portfolio;
