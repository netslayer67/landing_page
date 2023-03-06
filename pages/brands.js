import React from 'react'
import Image from "next/image";
import Brands from '../public/img/Brands.png'

function brands() {
    return (
        <section id='brands' className=' mb-10 relative h-screen'>
            <div className='absolute'>
                <Image
                    src={Brands}
                    alt="Arrow image"
                    className=''
                />
            </div>
            <div className='absolute mt-10' style={{ marginLeft: "447px" }}>
                <h1 className='text-6xl text-center text-white font-bold'>
                    Other Brands Increasing <br /> Contacts & Sales <br /> With DAISI
                </h1>
            </div>

        </section>
    )
}

export default brands