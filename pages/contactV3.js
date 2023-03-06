import Image from "next/image";
import DaisiIMG from '../public/img/daisi-icon.png'
import BGC from '../public/img/BGC.png'
import React from "react";
import Phone from "../public/img/Phone_.png"
import Kominfo from "../public/img/Klogo.png"
import { GoMail } from "react-icons/go"
import ind from "../public/img/Indonesia.png"


function ContactV3() {
    return (
        <section id="contact" className="mt-24 border-0 ">
            <div className='absolute'>
                <Image
                    src={BGC}
                    alt="Arrow image"
                    className=''
                />
            </div>
            <div className="flex justify-center mr-80">
                <div className="mt-28 flex justify-center">
                    <Image
                        src={DaisiIMG}
                        className="rounded-md"
                        alt="Second image"
                        width="140%"
                        height="140%"
                    />
                    <div className="ml-4">
                        <h1 className="text-7xl font-semibold text-white absolute tracking-widest">DAISI</h1> <br />
                    </div>
                    <div className="mt-20">
                        <p className="text-3xl font-semibold text-white absolute">Digital Assistant</p>
                    </div>
                </div>
            </div>
            <div className="ml-14 mt-28">
                <div>
                    <h1 className="absolute text-6xl font-semibold tracking-wider dark:text-black">
                        Contact Us
                    </h1>
                </div>
                <div>
                </div>

            </div>
            <div>
                <h1 className="text-left absolute text-4xl font-normal tracking-wide font-sans dark:text-black" style={{ marginLeft: "56px", marginTop: "87px" }}>
                    We&apos;d love to talk about <br /> all things WhatsApp.
                </h1>
            </div>

            <div className="absolute">
                <div className="text-6xl ml-14 flex" style={{ marginTop: "13rem" }}>
                    <div className="flex items-center">
                        <Image
                            src={Phone}
                            alt="Arrow image"
                            height={"70%"}
                            width={"70%"}
                            className="rounded-md"
                        />
                    </div>
                    <p className="text-2xl mt-4 ml-8 dark:text-black">+62-851-5603-7228</p>
                </div>

                <div className="text-6xl ml-14 flex" style={{ marginTop: "2rem" }}>
                    <div className="flex items-center text-7xl dark:text-black">
                        <GoMail />
                    </div>
                    <p className="text-3xl mt-4 ml-8 dark:text-black">sales@timkado.id</p>
                </div>
            </div>

            <div className="absolute " style={{ marginLeft: "56rem", marginTop: "14rem" }}>
                <div className="flex justify-center w-full">
                    <h1 className="tracking-widest dark:text-black" style={{ fontSize: "1.3rem" }}>PT.Timkado Sejahtera Indonesia</h1>
                </div>
            </div>
            <div className='absolute flex' style={{ marginLeft: "55rem", marginTop: "17rem" }}>
                <div className="mr-4">
                    <Image
                        src={Kominfo}
                        alt="Arrow image"
                        width={"130%"}
                        height={"70%"}
                    />
                </div>
                <div className="ml-24 text-center">
                    <Image
                        src={ind}
                        alt="Arrow image"
                        width={"130%"}
                        height={"70%"}
                    />
                    <p className="dark:text-black">Buatan Indonesia</p>
                </div>
            </div>



        </section>
    );
}

export default ContactV3;
