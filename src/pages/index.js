// pages/index.js or in another component
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Repeat the Card component for each card you want to display */}
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
          description="This is a fun chatbot made with the gpt api." 
          imageUrl="/Dolox.png"
          imageAlt="screen cap of dolox website"
          pageUrl="https://www.dolox.wtf/"
          githubUrl="https://github.com/Robertgreenwood27/myaisite"
        />
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
    </div>
  );
}
