import React from "react";
import Image from "next/image";
import Kado from "../public/img/kado.jpg";

function personal() {
  return (
    <>
      <section id="personal" className="h-screen static mt-9">
        <div className="flex items-center h-full">
          <div className="flex w-full justify-center items-center h-1/2 text-white py-48">
            <Image
              src={Kado}
              alt="Hero image"
              height={"590%"}
              width={"1200%"}
              className="absolute"
            />
          </div>
          <div
            className="w-100 absolute"
            style={{ marginLeft: "39%", marginTop: "8%", marginRight: "20%" }}
          >
            <h2 className="text-left tracking-wide font-bold text-7xl mt-10 ">
              Make It Personal
            </h2>
            <p className="text-left tracking-wide text-4xl font-medium">
              Schedule personal messages to <br /> increase sales productivity.
            </p>
          </div>
          <div
            className="h-full w-1/6 absolute bg-yellow-300"
            style={{ width: "12%", height: "109.8%" }}
          ></div>
        </div>
      </section>
    </>
  );
}

export default personal;
