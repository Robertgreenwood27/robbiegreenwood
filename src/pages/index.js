// pages/index.js
import Head from 'next/head';
import Card from '../components/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="text-white min-h-screen">
      <Head>
        <meta name="description" content="Robbie Greenwood's web developer portfolio showcasing skills and projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16 text-center" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-4">Web Developer</h1>
          <p className="text-xl">
            Hi, I&apos;m Robbie Greenwood, a passionate web developer with expertise in creating stunning and functional websites. With a keen eye for design and a strong foundation in front-end development, I strive to deliver exceptional user experiences.
          </p>
        </section>

        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <img src="/html.png" alt="HTML logo" className="w-16 h-16 mb-2" />
              <span>HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/css.png" alt="CSS logo" className="w-16 h-16 mb-2" />
              <span>CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/js.png" alt="JavaScript logo" className="w-16 h-16 mb-2" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/react.png" alt="React logo" className="w-16 h-16 mb-2" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/next.png" alt="Next.js logo" className="w-16 h-16 mb-2" />
              <span>Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/tailwind.png" alt="Tailwind CSS logo" className="w-16 h-16 mb-2" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/sanity.png" alt="Sanity CMS logo" className="w-16 h-16 mb-2" />
              <span>Sanity CMS</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/photoshop.png" alt="Photoshop logo" className="w-16 h-16 mb-2" />
              <span>Photoshop</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/openai.png" alt="OpenAI logo" className="w-16 h-16 mb-2" />
              <span>OpenAI</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/midjourney.png" alt="Midjourney logo" className="w-16 h-16 mb-2" />
              <span>Midjourney</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/rive.png" alt="Rive logo" className="w-16 h-16 mb-2" />
              <span>Rive</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/mongo.png" alt="MongoDB logo" className="w-16 h-16 mb-2" />
              <span>MongoDB</span>
            </div>
          </div>
        </section>

        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card
              title="HeadStrong Hair and Nail Studio"
              description="This is a website for a hair and nail salon"
              imageUrl="/headstrong.png"
              imageAlt="screen cap of headstrong website"
              pageUrl="https://www.headstronghairandnailstudio.com/"
              githubUrl="https://github.com/Robertgreenwood27/headstrong"
            />
            <Card
              title="Dolox"
              description="This is a fun chatbot made with the GPT API."
              imageUrl="/dolox.png"
              imageAlt="screen cap of dolox website"
              pageUrl="https://www.dolox.wtf/"
              githubUrl="https://github.com/Robertgreenwood27/myaisite"
            />
          </div>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-8 text-center">Other Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="Mana-Arts"
              description="This is my freelance art website"
              imageUrl="/mana.png"
              imageAlt="screencap of mana-arts website"
              pageUrl="https://www.mana-arts.net/"
              githubUrl="https://github.com/Robertgreenwood27/mana-arts"
            />
            <Card
              title="Skrull"
              description="This is an experimental image gallery"
              imageUrl="/skrull.png"
              imageAlt="screencap of skrull"
              pageUrl="https://skrull.vercel.app/"
              githubUrl="https://github.com/Robertgreenwood27/skrull"
            />
            <Card
              title="Capstone project for Thinkful"
              description="This was the final for the Thinkful bootcamp"
              imageUrl="/capstone.png"
              imageAlt="screencap of the Thinkful capstone project"
              pageUrl="https://capstone-tawny-gamma.vercel.app/"
              githubUrl="https://github.com/Robertgreenwood27/capstone"
            />
          </div>
        </section>
        <section className="mt-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-8">Education</h2>
          <div className="flex justify-center">
            <img
              src="/cert.png"
              alt="Thinkful Front-end Web Development Bootcamp Certificate"
              className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
            />
          </div>
          <p className="mt-4 text-xl">
            Graduated from Thinkful Front-end Web Development Bootcamp
          </p>
        </section>
      </main>
    </div>
  );
}