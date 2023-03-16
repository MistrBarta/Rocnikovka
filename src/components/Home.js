import React from 'react';
import Hero from './Hero/Hero';
import Content1 from './Home/Content1';
import Footer from './Footer/Footer';
import Content from './Content/Content';

function Home() {
    return (
      <div>
        <Hero />
        <Content1 />
        <Content />
        <Footer />
      </div>
    );
  }
  
  export default Home;