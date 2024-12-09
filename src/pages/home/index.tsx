import { memo } from "react";

import SellingProducts from "./components/selling-products";
import OurHero from "./components/hero";
import ContactForm from "./components/contact-form";
import AboutMe from "./components/about-me";
import ClientPage from "./components/client";
import OurCategories from "./components/our-categories";
import Team from "./components/team";
import Dropdown from "./components/dropdown";
import PageBanner from "./components/banner";
import { Images } from "../../assets";

const Home = memo(function Home() {
  return (
    <>
      <OurHero />;
      <PageBanner
      bannerImages={Images.banner}
      title="Shop Front"
    />
      <SellingProducts />
      <div className="mt-6 text-colors-darkGray mx-16">
        <AboutMe />
      </div>
      <ClientPage />
      <OurCategories />
      <Team />
      <Dropdown />
      <ContactForm />
    </>
  );
});

export default Home;
