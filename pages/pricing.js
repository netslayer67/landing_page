import Link from "next/link";
import React from "react";

function pricing() {
  const registerUrl = "http://localhost:3001/signup"; //"https://selfservicevercell.vercel.app/signup"; //
  return (
    <section id="pricing" className="pt-32 pb-10   ">
      <div className="container">
        {/* Start -- Whatsapp Business Is Lowest Cost Way To Manage Contacts */}
        <div className="flex flex-wrap ">
          <div className="mb-10 w-full px-4  text-center justify-center">
            <h4 className="text-base lg:text-2xl font-semibold dark:text-secondary text-primary md:text-2xl">
              Pricing & Proposal
            </h4>

            <div className=" flex mt-10 w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-full">
              <div className="mb-2 md:w-1/4 rounded-3xl shadow-xl shadow-slate-400 text-left">
                <dic>
                  <h3 className="mt-5 mr-4 border-2 bg-blue-300 text-secondary rounded-xl text-center mb-3 text-xl ml-4 font-semibold dark:text-secondary">
                    DAISI LITE
                  </h3>

                  <h2 className="mb-5 text-center border-2 border-primary rounded-xl mr-4 ml-4 mt-10 lg:text-lg dark:text-secondary font-bold text-dark">
                    FREE
                  </h2>
                  <ul
                    role="list"
                    className="marker:text-dark ml-4 dark:marker:text-white list-decimal pl-5 space-y-3 dark:text-secondary text-dark"
                  >
                    <li>Setup WA Business Number</li>
                    <li>Use WA Multi-device Logins</li>
                    <li>Onboard Client</li>
                    <li>Send Out Messages</li>
                  </ul>
                  <div className="text-center mt-8">
                    <Link href={registerUrl}>
                      <a className="border-2 easy-in-out rounded-full bg-blue-300 py-3 px-8 text-base font-semibold text-white transition duration-300 hover:opacity-80 hover:shadow-lg">
                        Register
                      </a>
                    </Link>
                  </div>
                  <h2 className="mb-5 text-center mr-6 ml-4 mt-10 lg:text-lg dark:text-secondary font-bold text-dark">
                    Why upgrade To Pro
                  </h2>
                  <ul
                    role="list"
                    className="marker:text-dark ml-4 dark:marker:text-white list-decimal pl-5 space-y-3 dark:text-secondary text-dark"
                  >
                    <li>More than 1000 contacts</li>
                    <li>Split Inbox</li>
                  </ul>
                </dic>
              </div>

              <div className="mb-2 md:w-1/4 rounded-3xl shadow-xl shadow-slate-400 text-left">
                <div>
                  <h3 className="mt-5 mb-3 border-2 bg-blue-500 mr-4 text-secondary rounded-xl text-center text-xl ml-4 font-semibold dark:text-secondary ">
                    DAISI PRO
                  </h3>

                  <h2 className="mb-5 text-center border-2 border-primary rounded-xl mr-4 ml-4 mt-10 lg:text-lg dark:text-secondary font-bold text-dark">
                    Rp. 1 Juta/month
                  </h2>
                  <ul
                    role="list"
                    className="marker:text-dark ml-4 dark:marker:text-white list-decimal pl-5 space-y-3 dark:text-secondary text-dark"
                  >
                    <li>Setup WA Business Number</li>
                    <li>Use WA Multi-device Logins</li>
                    <li>Onboard Client</li>
                    <li>Send Out Messages</li>
                  </ul>
                  <div className="text-center mt-8 ">
                    <Link href={registerUrl}>
                      <a className="border-2 easy-in-out rounded-full bg-blue-500 py-3 px-8 text-base font-semibold text-white transition duration-300 hover:opacity-80 hover:shadow-lg">
                        Register
                      </a>
                    </Link>
                  </div>
                  <h2 className="mb-5 text-center mr-6 ml-4 mt-10 lg:text-lg dark:text-secondary font-bold text-dark">
                    Why upgrade To PRO+?
                  </h2>
                  <ul
                    role="list"
                    className="marker:text-dark ml-4 dark:marker:text-white list-decimal pl-5 space-y-3 dark:text-secondary text-dark"
                  >
                    <li>More than 10.000 contacts</li>
                    <li>Track links (Pro Plus)</li>
                    <li>Engagement score (Pro Plus)</li>
                    <li>Use custom domain</li>
                    <li>Cluster multiple #&apos;s (Pro Plus)</li>
                  </ul>
                </div>
              </div>
              <div className="mb-2 md:w-1/4 rounded-3xl shadow-xl shadow-slate-400 text-left">
                <h3 className="mt-5 border-2 bg-blue-700  text-secondary mr-4 rounded-xl text-center mb-3 text-xl ml-4 font-semibold dark:text-secondary ">
                  DAISI PRO PLUS
                </h3>

                <h2 className="mb-5 text-center mr-4 border-2 border-primary rounded-xl ml-4 mt-10 lg:text-lg dark:text-secondary font-bold text-dark">
                  Rp. 5 Juta/month
                </h2>
                <ul
                  role="list"
                  className="marker:text-dark ml-4 dark:marker:text-white list-decimal pl-5 space-y-3 dark:text-secondary text-dark"
                >
                  <li>Setup WA Business Number</li>
                  <li>Use WA Multi-device Logins</li>
                  <li>Onboard Client</li>
                  <li>Send Out Messages</li>
                </ul>
                <div className="text-center mt-8">
                  <Link href={registerUrl}>
                    <a className="border-2 easy-in-out rounded-full bg-blue-700 py-3 px-8 text-base font-semibold text-white transition duration-300 hover:opacity-80 hover:shadow-lg">
                      Register
                    </a>
                  </Link>
                </div>
                <h2 className="mb-5 text-center mr-6 ml-4 mt-10 lg:text-lg dark:text-secondary font-bold text-dark">
                  Why upgrade To Enterprise?
                </h2>
                <ul
                  role="list"
                  className="marker:text-dark ml-4 dark:marker:text-white list-decimal pl-5 space-y-3 dark:text-secondary text-dark"
                >
                  <li>More than 100.000 contacts</li>
                  <li>Export profiles to own CRM</li>
                  <li>Call forwading to agent</li>
                  <li>Mobile Access to Chat (TBA)</li>
                </ul>
              </div>
              <div className="mb-2 md:w-1/4 rounded-3xl shadow-xl shadow-slate-400 text-left">
                <div>
                  <h3 className="mt-5 border-2 bg-blue-900 text-secondary rounded-xl text-center mb-3 text-xl ml-4 mr-4 font-semibold dark:text-secondary ">
                    DAISI ENTERPRISE
                  </h3>
                  <h2 className="mb-5 text-center mr-4 border-2 border-primary rounded-xl ml-4 mt-10 lg:text-lg dark:text-secondary font-bold text-dark">
                    Rp 25 juta/month
                  </h2>
                  <ul
                    role="list"
                    className="marker:text-dark ml-4 dark:marker:text-white list-decimal pl-5 space-y-3 dark:text-secondary text-dark"
                  >
                    <li>Setup WA Business Number</li>
                    <li>Use WA Multi-device Logins</li>
                    <li>Onboard Client</li>
                    <li>Send Out Messages</li>
                  </ul>{" "}
                </div>
                <div className="text-center mt-8">
                  <Link href={registerUrl}>
                    <a className="border-2 easy-in-out rounded-full bg-blue-900 py-3 px-8 text-base font-semibold text-white transition duration-300 hover:opacity-80 hover:shadow-lg">
                      Register
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End -- Whatsapp Business Is Lowest Cost Way To Manage Contacts */}
      </div>
    </section>
  );
}

export default pricing;
