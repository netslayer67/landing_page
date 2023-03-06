//rfce
import React from "react";
import Image from "next/image";
import portfolioImage1 from "../public/img/portfolio/buildComunication.jpg";
// import portfolioImage2 from "../public/img/portfolio/daisi-logo.png";
// import portfolioImage3 from "../public/img/portfolio/linktracking.png";
// import portfolioImage4 from "../public/img/portfolio/bca.png";

function portfolio() {
  return (
    <section id="portfolio" className="relative">
      <div className="flex flex-col h-full w-full">
        <div className=" flex flex-col h-full absolute bg-yellow-300" style={{ width: "252px" }} />
        <div className="flex w-full relative justify-around items-center h-1/2 text-white py-10 overflow-hidden">
          <Image
            src={portfolioImage1}
            className=""
            alt="Second image"
          // width="400%"
          // height="600%"

          />
          <div className="w-1/2" />
        </div>
        <div className="flex absolute bottom-0 w-full py-14 bg-black" />
        <div className="w-1/2 h-3/5 absolute bg-yellow-300 bottom-0 right-0 rounded-tl-3xl">
          <div className="py-20 px-10">
            <h1 className="md:text-sm lg:text-4xl dark:text-black font-bold">
              Build Community
            </h1>
            <p className="py-5 md:text-sm dark:text-black lg:text-2xl">
              DAISI automatically creates mailing lists and WhatsApp communities
              from Social Media accounts, websites, or physical events using
              personal WhatsApp Business accounts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default portfolio;
