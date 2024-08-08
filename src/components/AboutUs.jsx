import CopyAddress from "./CopyAddress";

function AboutUs() {
  return (
    <section
      className="bg-[#157494] main-bg3 -mt-0 sm:pt-0 pt-3 sm:-mt-2 relative overflow-hidden"
      id="about"
    >
      <div className=" container-wrapper pt-[5%]">
        <div className="relative flex justify-between flex-col sm:flex-row items-center gap-4">
          <div
            className=" w-full sm:w-1/2 relative "
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src="/images/lambo.png" alt="" />
            <img
              src="images/logo.png"
              alt=""
              className=" absolute bottom-4 floating h-[100px] sm:h-[200px] right-0"
            />
          </div>

          <div
            className=" w-full sm:w-1/2 border-4 border-[#d12f1c] bg-[#1574948f] rounded-xl p-2 backdrop-blur-sm"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h1 className="  p-2 text-3xl sm:text-6xl font-bold font-snow text-sad text-black text-center mb-4">
              About us
            </h1>

            <p className=" text-lg text-white  py-2">
              Snow Pepe is here to storm the Solana meme world, bringing a
              blizzard of fun, profit, and an epic crypto winter pump! Inspired
              by the iconic Pepe the Frog, Snow Pepe heats up your portfolio and
              ignites the season with explosive gains. 
            </p>

            <p className=" text-lg text-white">
            Get ready for snowballing
              profits and an avalanche of excitement as we charge towards an
              unforgettable bull run. It's time to rev your engines and scream
              "Lambo!"—Snow Pepe is leading the charge in this winter's wild
              ride!
            </p>

            <div className=" m-4 mx-auto flex justify-center">
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/DzgQUFcDj71ZjDFqJzMY5kDzvEbRNHKNpyuCu27Puaxk?t=1723129415195"
                className=" mx-auto font-dream  text-base text-white bg-[#000000] hover:bg-[#1a4093]
              flex items-center gap-2 
              rounded-full py-2 px-6 border-2 border-[#d12f1c]  hover:text-[#fff] text-center font-bold
               uppercase"
              >
                <img src="images/dex.png" alt="" className=" w-auto h-[28px]" />{" "}
                Buy Now
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
