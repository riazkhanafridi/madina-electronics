import { memo, useMemo } from "react";
import { Images } from "../../../../assets";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import CustomCarousel from "../../../../components/slider";

const OurHero = memo(function OurHero() {
  const imageSrc = useMemo(() => {
    return [
      { id: 1, src: Images.home.hero },
      { id: 2, src: Images.home.hero1 },
      { id: 3, src: Images.home.hero2 },
      { id: 4, src: Images.home.hero3 },
    ];
  }, []);

  return (
    <>
      <div className="flex w-full p-4 justify-between items-center gap-x-8 ">
        <div className="w-1/2">
          <h1 className="text-colors-darkGray font-bold text-3xl mb-4">
            welcome to Madina Electronics & Crockery
          </h1>
          <p>
            At Madina Electronic, we believe in providing exceptional customer
            service. Whether you have a question about a product, need support
            with your order, or simply want to learn more about our offerings,
            we are here to help. Our team is committed to ensuring that your
            shopping experience is smooth and satisfying. Reach out to us via
            phone, email, or by filling out the contact form below, and we’ll
            get back to you as soon as possible.
          </p>
          <div className="flex gap-x-4 px-4 mt-6">
            <Button className="bg-colors-bgSecondary text-white font-semibold text-md rounded-xl py-6 hover:bg-colors-bgButtonHover">
              GET STARTED
            </Button>
            <Button className="bg-white py-6 border-2 border-colors-bgSecondary font-semibold  rounded-xl px-6 hover:bg-colors-bgSecondary text-colors-pink hover:text-white">
              READ MORE
            </Button>
          </div>
        </div>
        <div className="w-1/2 h-full ">
          <CustomCarousel>
            {imageSrc.map((image) => (
              <div key={image.id} className="slide">
                <img
                  src={image.src}
                  alt={`Slide ${image.id}`}
                  className="h-full w-full"
                />
              </div>
            ))}
          </CustomCarousel>
        </div>
      </div>
    </>
  );
});

export default OurHero;
