import { memo, useMemo } from "react";
import { Images } from "../../assets";
import { Button } from "../../components/ui/button";
import AboutMe from "../home/components/about-me";
import Team from "../home/components/team";
import Dropdown from "../home/components/dropdown";

const About = memo(function About() {
  const imageSrc = useMemo(() => {
    return Images.about.hero, Images.about.owner;
  }, []);

  return (
    <div>
      <div className="sm:flex sm:flex-row flex-col w-full p-4 justify-between items-center gap-x-8">
        <div className="md:w-1/2 w-full">
          <h1 className="text-colors-darkGray font-bold text-3xl mb-4">
            About
          </h1>
          <p>
            At Madina Electronic, we are dedicated to providing top-quality
            electronics and innovative home appliances that simplify your life.
            Whether you're looking for cutting-edge smart devices, home
            entertainment solutions, or everyday essentials, we have a wide
            range of products to meet your needs.
          </p>
        </div>
        <div className="md:w-1/2 my-16 w-full ">
          <img src={imageSrc} alt="contact" className="h-[500px] w-full" />
        </div>
      </div>
      <div className="flex gap-x-4 px-4">
        <Button className="bg-colors-bgSecondary text-white font-semibold text-md rounded-xl py-6 hover:bg-colors-bgButtonHover">
          GET STARTED
        </Button>
        <Button className="bg-white py-6 border-2 border-colors-bgSecondary font-semibold  rounded-xl px-6 hover:bg-colors-bgSecondary text-colors-pink hover:text-white">
          READ MORE
        </Button>
      </div>

      <AboutMe />
      <Team />
      <Dropdown />
    </div>
  );
});

export default About;
