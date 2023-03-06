import React from "react";
import Image from "next/image";
import Ticket from "../public/img/ticket.png";
import Ticket2 from "../public/img/ticket2.png";
import Chat from "../public/img/chat.png";
import Arrow from '../public/img/arrow.png';

function order() {
    return (
        <section id="order" className=" relative h-screen">
            <div className="bg-yellow-300 h-full w-1/6 absolute" />
            <div className="flex">
                <div className="w-1/3"></div>
                <div>
                    <h2 className="text-center text-6xl absolute font-extrabold tracking-wide mb-1 mt-10">
                        Get 3x More Orders With DAISI
                    </h2>
                    <div className="flex justify-between mr-8">
                        <div
                            className="text-6xl text-left flex-1 ml-7 mr-2"
                            style={{ marginTop: "11%" }}
                        >
                            <h3 className="font-semibold absolute mt-20">Website Form</h3>
                            <div className="mt-40 mb-10 ml-14 relative">
                                <Image
                                    src={Ticket}
                                    alt="Ticket image"
                                    height={"330%"}
                                    width={"250%"}
                                    className="absolute"
                                />
                            </div>
                        </div>

                        <div className="text-center text-6xl font-semibold mt-40 mr-18 flex-1 border-dashed border-4 border-black">
                            <h3 className="mt-10">Whatsapp Form</h3>
                            <div className="mt-5 ml-1 mb-5 mr-4 flex items-center">
                                <Image
                                    src={Ticket2}
                                    alt="Ticket image"
                                    height={"590%"}
                                    width={"590%"}
                                    className="absolute"
                                />
                                <div className='relative mx-5'>
                                    <Image
                                        src={Arrow}
                                        alt="Arrow image"
                                        height={"160%"}
                                        width={"160%"}
                                        className="absolute"
                                    />
                                    {/* <FontAwesomeIcon icon={faArrowRight} className='ml-10 text-blue-900 w-16 h-26 mr-10' /> */}
                                </div>
                                <Image
                                    src={Chat}
                                    alt="chat image"
                                    height={"599%"}
                                    width={"380%"}
                                    className="absolute"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default order;