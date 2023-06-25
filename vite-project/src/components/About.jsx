import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-20"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto f;ex flex-col
    justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 ">
          Hello! I'm Mokshith S, a passionate MERN stack developer with a strong
          focus on creating exceptional web applications. With my expertise in
          MongoDB, Express.js, React.js, and Node.js, I bring innovative and
          interactive digital experiences to life. I have a solid foundation in
          front-end development, utilizing HTML, CSS, and JavaScript to build
          intuitive user interfaces. My proficiency in React.js allows me to
          craft dynamic and responsive web applications that provide seamless
          user experiences. Backed by my skills in Express.js and Node.js, I
          excel in developing robust and scalable server-side applications and
          RESTful APIs. I leverage the power of MongoDB to efficiently handle
          data storage and retrieval, ensuring optimal performance and data
          integrity.
        </p>
        <br />
        <p className="text-xl">
          My curiosity and passion for learning drive me to stay updated with
          the latest trends and technologies in the MERN stack. I am always
          eager to tackle new challenges and find innovative solutions to
          complex problems. Beyond my technical skills, I am an effective
          communicator and a collaborative team player. I believe in the power
          of teamwork and open communication to create exceptional outcomes.
        </p>
        <br />
        <p className="text-xl">
          If you have a great idea and are interested in bringing it to life
          with an outstanding website, I would be thrilled to hear from you.
          Feel free to reach out to me for any web development needs or
          potential collaborations. Let's work together to create something
          amazing!
        </p>
      </div>
    </div>
  );
};

export default About;
