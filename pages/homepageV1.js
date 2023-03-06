import Image from "next/image";
import clientImage1 from "../public/img/whatwedo/onboardtag.png";
import clientImage2 from "../public/img/whatwedo/custprofil.png";
import clientImage3 from "../public/img/whatwedo/wmn.jpg";
import clientImage4 from "../public/img/whatwedo/instagram.jpg";
import clientImage5 from "../public/img/whatwedo/fb.png";
import clientImage6 from "../public/img/whatwedo/tiktok.png";
import clientImage7 from "../public/img/whatwedo/youtube.png";
import clientImage8 from "../public/img/whatwedo/laptop.jpg";
import clientImage9 from "../public/img/whatwedo/daisi.png";
import clientImage10 from "../public/img/whatwedo/wabusiness.jpg";
import clientImage11 from "../public/img/whatwedo/phone.png";
import clientImage12 from "../public/img/whatwedo/mail.png";
import clientImage13 from "../public/img/whatwedo/hp.png";
import clientImage14 from "../public/img/whatwedo/social.png";
import clientImage15 from "../public/img/whatwedo/WaApi.png";
import clientImage16 from "../public/img/whatwedo/mailchimp.png";
import clientImage17 from "../public/img/whatwedo/daisi profil.png";
import clientImage18 from "../public/img/whatwedo/barcode.png";
import clientImage19 from "../public/img/whatwedo/WAhp.png";
import WAImage from "../public/img/mission/whatsapp.png";
import DaisiImage from "../public/img/daisi-logo.png";
import heroImage from "../public/img/heroImage.jpg";
import thirdImage from "../public/img/thirdImage.jpg";
import secondImage from "../public/img/secondImage.jpg";
import React from "react";

function homepage() {
  return (
    <section id="home" className="mt-28 border-0 ">
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
      <div className="container border-0 ">
        <div className="flex flex-wrap   border-0 ">
          <div className="w-full self-center border-0 py-4 px-4 lg:w-3/4">
            <h1 className="mt-0 ">
              <span className="dark:text-secondary block text-2xl md:text-3xl  font-bold text-dark lg:text-8xl">
                Introducing Daisi
              </span>
            </h1>

            <p className="mb-10 py-3 lg:text-5xl font-medium mr-4 leading-relaxed text-dark dark:text-secondary">
              The leading chat commerce platform with full support for Whatsapp
              Business including unlimited free messaging
            </p>
            <div className="flex">
              <a
                href=""
                className="easy-in-out rounded-full bg-primary py-2 px-8 text-base font-semibold text-white transition duration-300 hover:opacity-80 hover:shadow-lg"
              >
                Learn more
              </a>
              <a
                href="https://wa.me/6285780007018"
                target="_blank"
                rel="noreferrer"
                className="ml-3 flex h-11 w-11 items-center justify-center  border-slate-300 text-slate-300 hover:text-primary"
              >
                <div className="flex">
                  <Image
                    src={WAImage}
                    alt="Chat With Us"
                    width="90%"
                    height="90%"
                  />
                </div>
              </a>
            </div>
          </div>

          <div className="lg:py-6  border-0 flex w-full h-min-screen justify-center lg:justify-end  lg:w-1/4">
            <div className="h-full  border-0 ">
              <Image
                src={heroImage}
                alt="Hero image"
                className="rounded-md dark:shadow-primary"
                width="300%"
                height="450%"
              />
            </div>
          </div>
        </div>
        {/* End -- hero section  */}
      </div>
    </section>
  );
}

export default homepage;
