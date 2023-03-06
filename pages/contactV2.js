import Image from "next/image";
import WAImage from "../public/img/mission/whatsapp.png";
import DaisiImage from "../public/img/daisi-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from "react";

function ContactV2() {
    return (
        <section id="contact" className="mt-28 border-0 ">
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
                <div className="flex ">
                    <div className="w-full lg:w-2/4">
                        <div className="flex justif-center mt-80 ml-6">
                            <Image
                                src={DaisiImage}
                                className="rounded-md"
                                alt="Second image"
                                width="170%"
                                height="170%"
                            />
                            <div className="font-semibold text-center text-white lg:text-4xl w-full">
                                <h1>
                                    DAISI <br /> Digital Assistant
                                </h1>
                            </div>
                        </div>
                    </div>


                    <div className="flex lg:py-6 border-0 text-center w-full h-min-screen justify-center lg:justify-end lg:w-2/3">
                        <div className="h-full border-0">
                            <div className="h-full bg-yellow-300 border-0 rounded-tl-3xl inline-block float-right">
                                <h1 className="mt-0 p-8 m-24">
                                    <span className="dark:text-secondary font-bold text-dark lg:text-6xl ml-6">
                                        Contact Us
                                    </span>
                                    <div className="inline-block float-right mt-24 ml-5">
                                        <Image
                                            src={WAImage}
                                            className="rounded-md"
                                            alt="Second image"
                                            width="90%"
                                            height="90%"
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <h2 className="dark:text-secondary font-medium text-left text-black text-3xl mt-10">
                                            We&apos;d love to talk about <br /> all things WhatsApp.
                                        </h2>
                                    </div>
                                    <div className="flex items-center ml-5 mt-14">
                                        <FontAwesomeIcon icon={faArrowRight} className="text-black-900 w-16 h-16 mr-5" />
                                        <div className="mt-5 text-left">
                                            <p className="text-black-900 text-3xl font-semibold ml-2">Phone Number</p>
                                            <p className="text-black-900 mt-1 ml-1" style={{ fontSize: "23px" }}>+62-851-5603-7228</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center ml-5 mt-14">
                                        <FontAwesomeIcon icon={faArrowRight} className="text-black-900 w-16 h-16 mr-5" />
                                        <div className="mt-5 text-left">
                                            <p className="text-black-900 text-3xl font-semibold ml-2">Email Address</p>
                                            <p className="text-black-900 mt-1 ml-2" style={{ fontSize: "28px" }}>sales@timkado.id</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center ml-5 mt-14">
                                        <FontAwesomeIcon icon={faArrowRight} className="text-black-900 w-16 h-16 mr-5" />
                                        <div className="mt-5 text-left">
                                            <p className="text-black-900 text-3xl font-semibold ml-2">Website</p>
                                            <p className="text-black-900 mt-1 ml-2" style={{ fontSize: "28px" }}>www.timkado.id</p>
                                        </div>
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>
                {/* End -- hero section  */}
            </div>
        </section>
    );
}

export default ContactV2;
