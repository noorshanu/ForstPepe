import React from "react";

function Taxs() {
  return (
    <section className="bg-[#0f131c] pt-[10%] pb-[8%]  relative  "  >

<div className=" relative flex flex-col sm:flex-row justify-evenly items-center gap-8 pb-[4%] "  >
        

        <h1 className=" text-3xl sm:text-8xl font-bold text-white font-dream txt-s" data-aos="zoom-in-up"
        data-aos-duration="1500">
          Tokenomics
        </h1>

    
      </div>
 

      <div
      data-aos="zoom-in-up"
    data-aos-duration="1500"
      className=" container-wrapper bg-[#157494] border-4  border-[#d12f1c] rounded-3xl box-s2 py-4 px-4 relative z-20 flex flex-col sm:flex-row justify-between gap-4">
        <a
          href="#"
          className="block max-w-sm p-6  w-full sm:w-[250px]"
        >
          <img src="/images/g4.png" alt="" className=" mx-auto" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream ">
           LP Burning
          </h5>
          <p className="font-normal text-purple-300  text-center">LP LOCKED</p>
        </a>

        <a
          href="#"
          className="block max-w-sm p-6  w-full sm:w-[250px]"
        >
          <img src="/images/g3.png" alt="" className=" mx-auto" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream ">
            No Taxes
          </h5>
          <p className="font-normal text-purple-300 text-center">0% BUY / 0% SELL</p>
        </a>

        <a
          href="#"
          className="block max-w-sm p-6  w-full sm:w-[250px]"
        >
          <img src="/images/g2.png" alt="" className=" mx-auto" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream ">
            Contract
          </h5>
          <p className="font-normal text-purple-300 text-center">Mint REVOKED</p>
        </a>

        <a
          href="#"
          className="block max-w-sm p-6  w-full sm:w-[250px]"
        >
          <img src="/images/g5.png" alt="" className=" mx-auto" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream ">
         Fair Launch
          </h5>
          <p className="font-normal text-purple-300 text-center">NO PRE-SALES</p>
        </a>
      </div>

      <div className=" flex justify-center flex-col items-center">
        <div>
            <p className=" text-center text-white  mt-4">$SPEPE UTILITY TOKEN - SOLANA CHAIN </p>

            <h1 className=" text-xl sm:text-5xl font-bold font-dream  text-center text-white py-2">
            Total Supply 1.000.000.000
            </h1>
            <p className="text-center text-black font-bold mt-4 bg-[#157494] border-[#dd3333] border-2 py-2 rounded-xl">
            Contract Adress:coming Soon.....
            </p>
        </div>

      </div>
    </section>
  );
}

export default Taxs;
