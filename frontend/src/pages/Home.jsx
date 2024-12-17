import FeaturedProjects from "../components/HomeComponent/FeaturedProducts";
import Founders from "../components/HomeComponent/Founders";
import Proof from "../components/HomeComponent/Proof";
import Services from "../components/HomeComponent/Services";
import Testimonials from "../components/HomeComponent/Testimonials";
import Companies from "../components/HomeComponent/Companies";
import Landing from "../components/HomeComponent/Landing";
import WhatWeDo from "../components/HomeComponent/WhatWeDo";
import FAQSection from "../components/HomeComponent/FAQ";
import FeaturedArticles from "../components/HomeComponent/FeaturedArticles";
import ContactUs from "../components/HomeComponent/ContactUs";

const Home = () => {
  return (
    <>
        <Landing/>
        <Companies/>
        <WhatWeDo/>
        <Services/>
        <Founders/>
        <Proof/>
        <FeaturedProjects/>
        <Testimonials/>
        <FAQSection/>
        <FeaturedArticles/>
        <ContactUs/>
    </>
  );
};

export default Home;
