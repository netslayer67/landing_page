import Image from "next/image";
import React from "react";
import portfolioImage1 from "../public/img/portfolio/image9.jpg";
import portfolioImage from "../public/img/portfolio/image10.jpg";

function meetthelaw() {
  return (
    <section id="meetthelaw" className="bg-primary relative">
      <div className="flex flex-col h-full w-full">
        <div className=" flex flex-col h-full absolute bg-yellow-300" />
        <div className="flex w-full relative items-center h-1/2 text-white overflow-hidden">
          <Image
            src={portfolioImage1}
            className=" w-full "
            alt="Second image"
            width="1550%"
            height="600%"
          />
        </div>
        <div className="relative">
          <Image
            src={portfolioImage}
            className="absolute bottom-0"
            alt="Second image"
            width="770%"
            height="400%"
          />
        </div>
        <div className="w-1/2 h-2/3 absolute bg-yellow-300 bottom-0 right-0 rounded-tl-3xl">
          <div className="px-10">
            <h1 className="md:text-sm lg:text-6xl font-bold mt-14 dark:text-black">Meet The Law</h1>
            <p className="py-5 md:text-sm lg:text-4xl mt-5 dark:text-black">
              Automatically store all WhatsApp chats in search able database
              while complying with Indonesian Privacy Law and GDPR requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default meetthelaw;
