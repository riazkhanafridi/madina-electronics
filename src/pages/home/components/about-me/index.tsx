import { memo, useMemo } from "react";
import { Images } from "../../../../assets";

const AboutMe = memo(function AboutMe() {
  const imageSrc = useMemo(() => {
    return Images.about.hero, Images.about.owner;
  }, []);

  return (
    <div>
      <div className="w-full sm:flex sm:flex-row flex-col justify-between items-center px-4">
        <div className="flex flex-col md:w-[70%] w-full   px-16">
          <h1 className="font-bold text-xl ">About Me</h1>
          <p className="text-lg text-gray-600">
            Welcome to Madina Electronics, your one-stop shop for all things
            electronics and cooking. Founded by Muhammad Gull, a passionate
            expert in both the tech and culinary fields, Madina Electronics
            offers a wide range of high-quality electronic products and kitchen
            appliances. With a commitment to providing the best service and the
            most reliable products, we strive to enhance your daily life with
            the latest innovations.
          </p>
        </div>
        <div className="md:w-[30%] w-full py-16">
          <img
            src={imageSrc}
            alt="contact"
            className="h-[300px] w-full rounded-full px-16"
          />
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
