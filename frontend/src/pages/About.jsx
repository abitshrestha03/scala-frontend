import AboutUs from '../components/AboutComponent/AboutUs';
import WhoWeAre from '../components/AboutComponent/WhoWeAre';
import Experience from '../components/AboutComponent/Experience';
import Journey from '../components/AboutComponent/Journey';
import FAQSection from '../components/HomeComponent/FAQ';
import ContactUs from '../components/HomeComponent/ContactUs';
import TeamSection from '../components/AboutComponent/TeamSection';

const About = () => {
  return (
    <>
      <AboutUs />
      <WhoWeAre/>
      <Experience/>
      <Journey/>
      <TeamSection/>
      <FAQSection/>
      <ContactUs/>
    </>
  );
};

export default About;
