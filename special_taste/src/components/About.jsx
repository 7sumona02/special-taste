import React from 'react';
import bread1 from '../assets/bread1.jpg';
import bread2 from '../assets/bread2.jpg';

const About = () => {
  return (
    <div className="flex flex-wrap justify-center px-32 py-20">
      <div className="max-w-md md:w-1/2">
        <h1 className="text-3xl font-semibold mb-4">
          WE CREATE DELICIOUS MEMORIES FOR YOU
        </h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa
          incidunt facilis molestias nesciunt ratione tempore, voluptatum iure
          neque labore deleniti maiores rerum quaerat unde, asperiores optio
          esse dolor necessitatibus odit quo quae numquam aliquam! Numquam hic
          eveniet architecto odit.
        </p>
      </div>
      <div className="w-full flex gap-5 px-20 md:w-1/2">
        <img
          src={bread1}
          alt="Bread 1"
          className="block w-48 h-48 object-cover"
        />
        <img
          src={bread2}
          alt="Bread 2"
          className="block w-48 h-48 object-cover"
        />
      </div>
    </div>
  );
};

export default About;
