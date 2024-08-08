import React from "react";
import Slider from "./Slider";

function HowToBuy() {
  return (
    <section className=" py-[2%]">
      <div className=" container-wrapper">
        <div className=" flex items-center justify-center gap-4">
          <div
            className=" bg-[#157494] border-4 border-[#9f1211] box-s2 rounded-3xl py-8 px-4 w-1/2 h-full"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className=" text-3xl sm:text-7xl font-bold font-snow py-1 text-center text-black text-sad">
              {" "}
              How To BUY   $PUPE
            </h1>
            <h2 className=" text-2xl sm:text-7xl font-bold font-snow py-2 text-center text-black">
            
            </h2>
          </div>

          {/* <div
            className="bg-[#157494] border-4 border-[#984322] box-s2 rounded-3xl p-2 h-full"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src="images/hero4.png" alt="" className=" h-[180px] sm:h-[220px]" />
          </div> */}
        </div>

        <div className=" flex items-center flex-col sm:flex-row justify-center gap-4 mt-2">
          <div
            className=" bg-[#157494] border-4 border-[#984322]  box-s2 rounded-3xl py-8 px-4 flex flex-col justify-center items-center gap-4"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img
              src="images/logo.png"
              alt=""
              className="h-[220px] img-hov cursor-pointer"
            />
            <a
              href="/"
              className=" bg-black border-2  border-[#984322] px-4 py-1 text-white  rounded-full text-2xl font-bold font-dream"
            >
              Buy $PUPE
            </a>
          </div>

          <div
            className="bg-[#157494] border-4 border-[#984322]  box-s2 rounded-3xl p-4 w-full sm:w-1/2 "
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;
