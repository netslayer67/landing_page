// import portfolioImage1 from "../public//founder/b.png";
import portfolioImage2 from "../public/img/founder/h.png";
import portfolioImage3 from "../public/img/founder/r.png";
import portfolioImage4 from "../public/img/mission/whatsapp.png";
import portfolioImage5 from "../public/img/mission/line.png";
import portfolioImage6 from "../public/img/mission/tele.png";
import portfolioImage7 from "../public/img/mission/fb.png";
import React from "react";
import Image from "next/image";

function about() {
  return (
    <section id="about" className="pt-36 ">
      <div className="container ">
        <div className="flex flex-wrap  ">
          <div className="mb-10 w-full px-4  text-center justify-center">
            <h1 className="text-base  lg:text-2xl font-semibold dark:text-secondary text-primary md:text-2xl">
              Who We Are
            </h1>
            <h2 className="mb-5 mt-4 text-2xl dark:text-secondary font-bold text-dark  lg:text-3xl">
              15+ years building digital applications in Indonesia
            </h2>
            <div className=" flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-full">
              <div className="mb-2 p-4 md:w-1/3">
                <div className="overflow-hidden rounded-md shadow-md shadow-slate-400">
                  {/* <Image
                    src={portfolioImage1}
                    alt="Brent Chinn"
                    width="200%"
                    height="200%"
                  /> */}
                </div>
                <h3 className="mt-5 mb-3 text-xl font-semibold dark:text-secondary text-dark">
                  Brent Chinn
                </h3>
                <p className="text-base font-medium text-dark dark:text-secondary">
                  Harvard College/Wharton MBA <br />
                  Former Online Trading Head <br />
                  PT Samuel Sekuritas Indonesia <br />
                  Ex-Microsoft, Ex-Cendant
                </p>
              </div>

              <div className="mb-12 p-4 md:w-1/3">
                <div className="overflow-hidden rounded-md shadow-md shadow-slate-400">
                  <Image
                    src={portfolioImage2}
                    alt="Heriyanto"
                    width="200%"
                    height="200%"
                  />
                </div>
                <h3 className="mt-5 mb-3 text-xl dark:text-secondary font-semibold text-dark">
                  Heriyanto
                </h3>
                <p className="text-base dark:text-secondary font-medium text-dark">
                  Institute Teknologi Bandung
                  <br /> CS Former Architect BCA Firecash
                  <br />
                  Former Architect BTPN Jenius
                </p>
              </div>

              <div className="mb-12 p-4  md:w-1/3">
                <div className="overflow-hidden rounded-md  shadow-md shadow-slate-400">
                  <Image
                    src={portfolioImage3}
                    alt="Raymond Setokusumo"
                    width="200%"
                    height="200%"
                  />
                </div>
                <h3 className="mt-5 mb-3 text-xl dark:text-secondary font-semibold text-dark">
                  Raymond Setokusumo
                </h3>
                <p className="text-base font-medium dark:text-secondary text-dark">
                  Babson College <br />
                  Founder Galileo Indonesia <br />
                  Serial Entrepreneur <br />
                </p>
              </div>
            </div>
            {/* xl:mx-auto xl:w-full */}
            <div className="flex w-full flex-wrap justify-center px-16 ">
              <p className="text-left text-base font-medium text-dark dark:text-secondary">
                PT Timkado Sejahtera Indonesia was founded in 2017 to provide
                digital vouchers for banks and insurance companies.
                <br />
                In 2018, Delapan Belas Pte Ltd was formed and partnered in 2019
                with Galileo Indonesia to provide a Whatsapp platform to support
                virtual events and increase travel agent productivity.
                <br /> Our target clients for the DAISI platform are e-commerce,
                fintech, travel, and insurance verticals.
              </p>
            </div>
          </div>
          {/* //batas nya  */}
          <div className="mb-4  mt-2 justify-center text-center w-full px-4 ">
            <h1 className="text-base font-semibold dark:text-secondary text-primary md:text-2xl">
              Our Mission
            </h1>
            <h2 className="mb-5 mt-4 sm:text-xl  md:text-xl dark:text-secondary font-bold text-dark lg:text-3xl">
              Bring Link & Contact Management To Messaging Apps
            </h2>
          </div>
          <div className="mb-10 w-full px-4 lg:w-1/2">
            <div className="flex w-full flex-wrap px-4 xl:mx-auto xl:w-full">
              <h2 className="mb-5  mt-4 lg:text-lg dark:text-secondary font-bold text-dark">
                Power of Links & Messaging
              </h2>
              <ul
                role="list"
                className="marker:text-dark dark:marker:text-white list-disc pl-5 space-y-3 dark:text-secondary text-dark"
              >
                <li>6x+ greater engagement than email or push notifications</li>
                <li>Increase Click To Open rates from 50% to 90%</li>
                <li>Increase conversion rate by up to 95%</li>
                <li>
                  Double customer lifecycle by making them 2x more likely to
                  engage
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full  lg:w-1/2  mb-10">
            <div className=" p-4 grid grid-cols-4 gap-4 justify-center text-center ">
              <div className="overflow-hidden p-4 max-w-max rounded-md shadow-md shadow-slate-400">
                <Image
                  src={portfolioImage4}
                  alt="Whatsapp"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="overflow-hidden p-4 max-w-max rounded-md shadow-md shadow-slate-400">
                <Image
                  src={portfolioImage5}
                  alt="Line"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="overflow-hidden p-4 rounded-md max-w-max shadow-md shadow-slate-400">
                <Image
                  src={portfolioImage6}
                  alt="Telegram"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="overflow-hidden p-4 rounded-md max-w-max  shadow-md shadow-slate-400">
                <Image
                  src={portfolioImage7}
                  alt="Facebook"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;

// <div className="w-full px-4 lg:w-1/2">
//   <h3 className="mb-4 text-2xl font-semibold dark:text-secondary text-dark lg:w-1/2 lg:pt-10">
//     Follow us on social media
//   </h3>
//   <p className="mb-6 text-base font-medium text-dark dark:text-secondary lg:text-lg">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
//     architecto dolores eos incidunt numquam iste doloribus aut similique!
//   </p>
//   <div className="flex items-center">
//     {/* <!-- you tube --> */}
//     <a
//       href="https://www.youtube.com/"
//       target="_blank"
//       rel="noreferrer"
//       className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
//     >
//       <svg
//         role="img"
//         className="fill-current"
//         width="20"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <title>YouTube</title>
//         <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//       </svg>
//     </a>

//     {/* <!-- facebook --> */}
//     <a
//       href="https://www.facebook.com/"
//       target="_blank"
//       rel="noreferrer"
//       className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
//     >
//       <svg
//         role="img"
//         className="fill-current"
//         width="20"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <title>Facebook</title>
//         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//       </svg>
//     </a>

//     {/* <!-- Instagram --> */}
//     <a
//       href="https://www.Instagram.com/"
//       target="_blank"
//       rel="noreferrer"
//       className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
//     >
//       <svg
//         role="img"
//         className="fill-current"
//         width="20"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <title>Instagram</title>
//         <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
//       </svg>
//     </a>

//     {/* <!-- Twitter --> */}
//     <a
//       href="https://www.Twitter.com/"
//       target="_blank"
//       rel="noreferrer"
//       className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
//     >
//       <svg
//         role="img"
//         className="fill-current"
//         width="20"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <title>Twitter</title>
//         <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//       </svg>
//     </a>

//     {/* <!-- Tiktok --> */}
//     <a
//       href="https://www.Twitter.com/"
//       target="_blank"
//       rel="noreferrer"
//       className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
//     >
//       <svg
//         role="img"
//         className="fill-current"
//         width="20"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <title>TikTok</title>
//         <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
//       </svg>
//     </a>
//   </div>
// </div>;