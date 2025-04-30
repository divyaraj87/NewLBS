import Header from "../components/Header";
import Hero from "../components/Hero";
import HelpOptions from "../components/HelpOptions";
import WhytoBetter from "../components/WhytoBetter";
import Services from "../components/Services";
import WhyBelong from "../components/WhyBelong";
import Testimonials from "../components/Testimonials";
import AppDownload from "../components/AppDownload";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import FooterImg from "../components/FooterImg";

const HomePage = () => {
  return (
      <div className="font-sans overflow-x-hidden">
            <Header />
      <main>
        <Hero />
        <HelpOptions />
       {/*  <Services />
        <WhyBelong /> */}
        <WhytoBetter />
        <Testimonials />
        <AppDownload />
        <Stats />  {/* --> Stats moved after AppDownload */}
      </main>
      {/* <Footer /> */}
      <FooterImg />
       
    </div>
  );
};

export default HomePage;
