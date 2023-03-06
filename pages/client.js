import React from "react";
import Image from "next/image";
import clientImage1 from "../public/img/client/galileo.png";
import clientImage2 from "../public/img/client/bfi.png";
import clientImage3 from "../public/img/client/Eastspring.png";
import clientImage4 from "../public/img/client/bca.png";
import clientImage5 from "../public/img/client/garuda.png";
import clientImage6 from "../public/img/client/hsbc.png";
import clientImage7 from "../public/img/client/ana.png";
import clientImage8 from "../public/img/client/singaporeairline.png";
import clientImage13 from "../public/img/client/travelport.png";
// import clientImage9 from "../public/img/client/goldenrama.png";
// import clientImage10 from "../public/img/client/smailing.png";
// import clientImage11 from "../public/img/client/bayubuana.png";
// import clientImage12 from "../public/img/client/dwidaya.png";

function client() {
  return (
    //  <!--  Client section start  -->
    <section id="client" className="mt-10 mb-2 ">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-10 text-center">
            {/* <h4 className="mb-2 sm:text-xl md:text-xl lg:text-2xl font-semibold text-primary dark:text-secondary">
              Companies That Trust Daisi
            </h4> */}
            <h2 className="mt-4 mb-4 block text-2xl md:text-3xl font-bold text-dark lg:text-8xl dark:text-white">
              Companies That Trust Daisi
            </h2>
            <p className="lg:text-5xl  text-dark md:text-lg dark:text-secondary">
              Engaging Customers Through Whatsapp Business
            </p>
          </div>
        </div>

        <div className="flex flex-wrap  border-2 shadow-sm shadow-slate-500 rounded-lg items-center justify-center">
          <a
            href=""
            className="mx-4 max-w-[250px] py-4   transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <Image src={clientImage4} alt="BCA" width="220%" height="180%" />
          </a>
          <a
            href=""
            className="mx-4 max-w-[250px] py-4  transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <Image
              src={clientImage13}
              alt="Travelport"
              width="600"
              height="72"
            />
          </a>
          <a
            href=""
            className="mx-4 max-w-[250px] py-4  transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <Image
              src={clientImage3}
              alt="Eastspring"
              width="561px"
              height="321px"
            />
          </a>

          {/* <a
            href=""
            className="mx-4 max-w-[250px] py-4  transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <Image
              src={clientImage1}
              alt="galileo"
              width="200%"
              height="180%"
            />
          </a> */}
          <a
            href=""
            className="mx-4 max-w-[250px] py-4  transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <Image
              src={clientImage2}
              alt="BFI Finance"
              width="200%"
              height="180%"
            />
          </a>
          <a
            href=""
            className="mx-4 max-w-[250px] py-4  transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <Image
              src={clientImage5}
              alt="Garuda Indonesia"
              width="220%"
              height="140%"
            />
          </a>
          <a
            href=""
            className="mx-4 max-w-[250px] py-4  transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <Image src={clientImage6} alt="HSBC" width="392px" height="220" />
          </a>
          <a
            href=""
            className="mx-4 max-w-[250px] py-4  transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <Image src={clientImage7} alt="Ana" width="210%" height="70%" />
          </a>
          <a
            href=""
            className="mx-4 max-w-[250px] py-4  transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <Image
              src={clientImage8}
              alt="Singapore Air Lines"
              width="323px"
              height="323px"
            />
          </a>
          {/* <a
            href=""
            className="mx-4 max-w-[250px] py-4  transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <Image
              src={clientImage9}
              alt="Golden Rama"
              width="200%"
              height="200%"
            />
          </a>
          <a
            href=""
            className="mx-4 max-w-[250px] py-4  transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <Image
              src={clientImage10}
              alt="Smailing"
              width="271px"
              height="271px"
            />
          </a>
          <a
            href=""
            className="mx-4 max-w-[250px] py-4  transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <Image
              src={clientImage11}
              alt="Bayu Buana"
              width="275px"
              height="183px"
            />
          </a>
          <a
            href=""
            className="mx-4 max-w-[250px] py-4  transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
          >
            <Image
              src={clientImage12}
              alt="Dwi daya"
              width="322px"
              height="323px"
            />
          </a> */}
        </div>
      </div>
    </section>
    // <!--  Client section end  -->
  );
}

export default client;
