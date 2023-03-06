import clientImage4 from "../public/img/proposition.png";
import React from "react";
import Image from "next/image";

function proposition() {
  return (
    <section id="proposition" className="pt-36 pb-2  ">
      <div className="container">
        <div className="w-full px-4  ">
          <div className="mx-auto text-center">
            <h4 className="mb-2 sm:text-xl  md:text-xl font-semibold text-primary dark:text-secondary  lg:text-2xl">
              DAISI Value Proposition
            </h4>
            <h2 className="mb-5 mt-4 sm:text-xl  md:text-xl font-bold text-dark dark:text-secondary  lg:text-3xl">
              Automatically Collect, Tag, & Score Your Whatsapp Contacts
            </h2>
            <div className="flex flex-wrap  border-2 shadow-md shadow-slate-500 rounded-lg items-center justify-center">
              <a href="" className="mx-4 max-w-[1000px] py-4 lg:mx-6 xl:mx-8">
                <Image
                  src={clientImage4}
                  alt="Daisi value proposition"
                  width={1272}
                  height={558}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default proposition;
