import Image from "next/image";
import wa from "../public/img/portfolio/wa2-icon-.png";
import waBusiness from "../public/img/portfolio/WA_Bussines.png";
import imageGiveTheme from "../public/img/portfolio/givetheme.png";

import React from "react";

function givetheme() {
  return (
    <section id="givetheme" className="h-full relative">
      <div className="flex flex-col h-full w-full">
        <div className=" h-full absolute bg-yellow-300" style={{ width: "252px" }} />
        <div className="flex w-full relative justify-around items-center h-1/2 text-white py-10">
          <Image
            src={imageGiveTheme}
            className=""
            alt="Second image"
          // width="400%"
          // height="600%"
          />
          <div className="w-1/2">
            <h2>
              <span className="block text-xl md:text-xl dark:text-secondary text-black dark:text-secondary lg:text-5xl ">
                It&apos;s never too late to
              </span>
              <div className="py-1">
                <span className="block text-xl md:text-xl font-bold text-black dark:text-secondary lg:text-6xl ">
                  Make Your Best
                </span>
                <span className="block text-xl md:text-xl font-bold text-black dark:text-secondary lg:text-6xl ">
                  Impression
                </span>
              </div>
              <span className="block text-xl md:text-xl text-black dark:text-secondary lg:text-4xl ">
                Send answers, notifications, broadcasts and alerts on the most
                popular mobile messaging network in Indonesia
              </span>
            </h2>
          </div>
        </div>
        <div className="flex relative">
          <div className=" w-1/2 " />
          <div className="flex">
            <Image src={wa} alt="Whatsapp" height="80%" width="80%" />
            <Image src={waBusiness} alt="WhatsappBussines" height="50%" width="80%" />
            <div className="px-10 text-xl md:text-xl text-black dark:text-secondary lg:text-xl">
              <ul className="list-disc">
                <li>Unlimited messages</li>
                <li>No pre-approvals</li>
                <li>One price</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default givetheme;
