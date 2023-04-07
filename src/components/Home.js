import React from 'react';
import Hero from './Hero/Hero';
import Content1 from './Home/Content1';
import Content from './Content/Content';

function Home() {
    return (
      <div>
        <Hero />
        <Content1 />
        <Content />
      </div>
    );
  }
  
  export default Home;