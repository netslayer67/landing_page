import Image from "next/image";
import WAImage from "../public/img/mission/whatsapp.png";
import DaisiImage from "../public/img/daisi-logo.png";
import heroImage from "../public/img/women.jpg";
import React from "react";

function homepage() {
  return (
    <section id="home" className="mt-24 border-0 ">
      <link
        itemProp="thumbnailUrl"
        href="https://landingpage-opal-nu.vercel.app/img/daisi-logo.png"
      />
      <span
        itemProp="thumbnail"
        itemScope
        itemType="http://schema.org/ImageObject"
      >
        <link
          itemProp="url"
          href="https://landingpage-opal-nu.vercel.app/img/daisi-logo.png"
        />
      </span>
      <div className="container border-0 bg-primary ">
        <div className="flex flex-wrap border-red-700 border-1">
          <div className="w-full self-center border-1 border-red-700 py-4 px-4 lg:w-1/3">
            <div className="flex flex-wrap  border-0">
              <div className="self-start justify-center items-center text-center   border-0 lg:w-1/2">
                <Image
                  src={DaisiImage}
                  className="rounded-md"
                  alt="Second image"
                  width="90%"
                  height="90%"
                />

                <p className="mb-10 lg:text-xl font-bold leading-relaxed text-secondary ">
                  DAISI Digital Assistant For WhatsApp
                </p>
              </div>
              <div className="flex w-full self-start justify-center items-center text-center   lg:w-1/2 border-0">
                <div className="">
                  <Image
                    src={WAImage}
                    className="rounded-md"
                    alt="Second image"
                    width="90%"
                    height="90%"
                  />
                </div>
              </div>
            </div>

            <div className="h-full bg-yellow-300 border-0 rounded-tr-3xl ">
              <h1 className="mt-0 p-8 ">
                <span className="dark:text-black block text-2xl md:text-3xl  font-bold text-black lg:text-8xl">
                  Build Brand Better
                </span>
              </h1>
              <h1 className=" p-8">
                <span className="dark:text-black block md:text-xl  text-black lg:text-sm">
                  PT TIMKADO SEJAHTERA INDONESIA
                </span>
              </h1>
            </div>
          </div>

          <div className="flex lg:py-6  border-0  text-center  w-full h-min-screen justify-center lg:justify-end  lg:w-2/3">
            <Image
              src={heroImage}
              alt="Hero image"
              className="rounded-md dark:shadow-white"
            // width="1000px"
            // height="800px"
            />
            <div className="h-full  border-0 ">
              {/* <span className="dark:text-secondary mt-4 block text-xl md:text-xl  font-bold text-secondary lg:text-xl">
                Engage Customers On The App They Use The Most
              </span> */}
            </div>
          </div>
        </div>
        {/* End -- hero section  */}
      </div>
    </section>
  );
}

export default homepage;
