import Image from "next/image";
import flowImage from "../public/img/flow.png";
import ecosystemImage from "../public/img/WA ecosystem.png";

import secondImage from "../public/img/secondImage.jpg";
import React from "react";

function grow() {
  return (
    <section id="grow" className="">
      <div className="container  ">
        {/* start --  Grow your customer   section  */}
        <div className="flex flex-wrap bg-yellow-300  border-r-8 border-white ">
          <div className="  self-start p-4 border-0 lg:w-1/6 h-full"></div>
          <div className=" p-0 lg:p-0 lg:ml-0 flex w-full self-center lg:w-5/6 border-0">
            <div className="bg-secondary items-center text-center">
              <h2>
                <span className="mt-6 block text-xl md:text-xl font-bold text-black lg:text-6xl ">
                  Introducing DAISI Digital Assistant
                </span>
              </h2>
              <Image
                src={flowImage}
                className="rounded-md"
                alt="Second image"
              // width="800%"
              // height="500%"
              />
              <Image
                src={ecosystemImage}
                className="rounded-md"
                alt="Second image"
              // width="800%"
              // height="500%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default grow;
