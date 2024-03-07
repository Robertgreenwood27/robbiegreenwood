import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen text-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-8">
            About Me
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-4">Nature and Insect Enthusiast</h2>
                <p className="text-zinc-300 mb-4">
                  From a young age, I have been captivated by the wonders of nature, particularly the fascinating world of tarantulas and insects. Their beauty, diversity, and intricate behaviors have always piqued my curiosity, almost like a real-life Pokémon experience.
                </p>
                <p className="text-zinc-300">
                  I have a deep appreciation for both arachnids and plants, viewing them as living beings with their own unique personalities and presence. I am constantly amazed by how they interact with their environment and adapt to different conditions.
                </p>
              </section>
              <section>
                <h2 className="text-3xl font-bold mb-4">Family and Work</h2>
                <p className="text-zinc-300">
                  I am a devoted husband and father to two incredible children. Family is at the core of my life, and I take great pride in being a consistent provider, maintaining full-time employment since I was about 18.
                </p>
              </section>
              <section>
                <h2 className="text-3xl font-bold mb-4">Web Development Journey</h2>
                <p className="text-zinc-300 mb-4">
                  My journey into coding began with the guidance of my uncle-in-law, a seasoned software engineer. He introduced me to the world of programming, and I was instantly captivated by the magic of transforming ideas into tangible, interactive experiences on a screen.
                </p>
                <p className="text-zinc-300">
                  After years of self-study and recently graduating from the Thinkful Front-end Web Development Bootcamp, I feel confident in my skills and ready to embark on a new chapter in the web development world. I am proficient in HTML, CSS, JavaScript, React, and various front-end tools and frameworks.
                </p>
              </section>
              <section>
                <h2 className="text-3xl font-bold mb-4">Future Goals</h2>
                <p className="text-zinc-300 mb-4">
                  I am excited to explore new opportunities, both as an employed developer and through freelance work. My goal is to create websites that not only look stunning but also provide intuitive and engaging user experiences.
                </p>
                <p className="text-zinc-300">
                  One of my future dream projects is to create a comprehensive catalog of tarantula species, complete with community-driven information pages. This endeavor aims to continuously improve the available knowledge about these fascinating creatures and contribute to conservation efforts.
                </p>
              </section>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <img
                src="/Robbie.png"
                alt="Robbie Greenwood"
                className="w-full rounded-lg shadow-lg mb-8"
              />
              <h2 className="text-3xl font-bold mb-4">Robbie Greenwood</h2>
              <p className="text-xl text-zinc-300">Web Developer</p>
              <p className="text-zinc-300 mt-4">
                Feel free to explore my portfolio to see some of my recent projects. If you have any exciting collaborations or opportunities in mind, don&apos;t hesitate to reach out. Let&apos;s connect and create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;