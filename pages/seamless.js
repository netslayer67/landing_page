import React from "react";
import image8 from "../public/img/portfolio/imgpage.jpg";
import image9 from "../public/img/Personel.png"
import Image from "next/image";

function seamless() {
  return (
    <section id="seamless" className="h-screen relative">
      <div className="flex h-full w-full">
        <div className="h-full w-1/6 absolute bg-yellow-300" style={{ width: "12%" }} />
        <div className="flex w-full relative justify-around items-center h-full text-white">
          <Image
            src={image9}
            className=""
            alt="Second image"
            width="600%"
            height="800%"
          />
          <h2 className=" w-1/3">
            <span className="block text-xl md:text-xl font-bold text-black dark:text-secondary lg:text-6xl ">
              Make It Seamless
            </span>
            <span className="block text-xl md:text-xl text-black dark:text-secondary lg:text-3xl py-6">
              Native API integration with <br /> WhatsApp Web allows setup in <br />seconds
              with no additional software <br /> downloads or training required.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default seamless;
