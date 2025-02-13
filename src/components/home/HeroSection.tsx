import { Download } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="w-full min-h-svh pt-20 md:pt-0 ">
      <div className="container p-4 mx-auto h-svh items-center justify-between grid grid-cols-1 md:grid-cols-2 gap-4">
        <section
          className="text-center md:text-left"
          aria-labelledby="hero-heading"
        >
          <p className="text-gray-600 dark:text-gray-400 text-xl">
            Hello! I&apos;m
          </p>
          <h1 id="hero-heading" className="text-3xl font-bold text-primary">
            Ranok Raihan
          </h1>
          <p className="text-4xl mt-4">
            A passionate full stack web developer and designer
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            I love to create beautiful and functional websites and web
            applications. I am a self-taught developer and designer with a keen
            eye for detail and a passion for creating beautiful and functional
            websites and web applications.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <Button
              asChild
              variant="default"
              className="mt-4 flex gap-2"
              aria-label="Download Resume"
            >
              <a href="https://drive.usercontent.google.com/download?id=1lEx5YGciXzGNWiaD_YvzWYxMVZ1QyGDU&export=download&authuser=0&confirm=t&uuid=8eeac30a-dc41-44ed-bf3a-3fc8853bb09c&at=AIrpjvNWikqzwhXG1KXzqEY0uG3y:1739468895627">
                Download Resume <Download />
              </a>
            </Button>
          </div>
        </section>
        <div>
          <Image
            src="/assets/images/hero-image.png"
            width={500}
            height={500}
            alt="hero image"
            className="shadow-sm shadow-orange-500 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
