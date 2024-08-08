import AboutUs from "./components/AboutUs";
import BorderSec from "./components/BorderSec";
import ChooseHero from "./components/ChooseHero";
import DexMark from "./components/DexMark";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToBuy from "./components/HowToBuy";
import Navbar from "./components/Navbar";
import Taxs from "./components/Taxs";

function App() {
  return (
    <>
      <div className=" relative overflow-x-hidden">
      <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❆
  </div>
  <div className="snowflake">
  ❄
  </div>
  <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❆
  </div>
  <div className="snowflake">
  ❄
  </div>
  <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❆
  </div>
  <div className="snowflake">
  ❄
  </div>

        <div className="hero-main  ">
        <Navbar />
        <Hero />
        </div>
     
        <BorderSec />
        <AboutUs />
        <BorderSec />
        <Taxs />
     
        <DexMark/>
      
        {/* <ChooseHero /> */}
      
        <div className="main-bg2 pt-4 pb-4">
        <HowToBuy />
      <div className=" my-4">
      <BorderSec />
      </div>
          <Faq />

         
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
