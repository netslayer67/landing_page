import WAImage from "../public/img/mission/whatsapp.png";
import Image from "next/image";
export default function contact() {
  return (
    <section id="contact" className="border-0 ">
      <div className="flex dark:border-2 flex-wrap text-center  pt-40 mt-10 pb-0 bg-primary">
        <div className="mb-10 w-full px-4 md:w-1/3">
          <h3 className="mb-5 text-5xl md:text-5xl lg:text-8xl font-bold text-white">
            Get In Touch
          </h3>
          <div className="mb-5 flex items-center justify-center">
            {/* <!-- you tube --> */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-secondary hover:bg-secondary hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                width="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* <!-- facebook --> */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-secondary hover:bg-secondary hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                width="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* <!-- Instagram --> */}
            <a
              href="https://www.Instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-secondary hover:bg-secondary hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                width="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>

            {/* <!-- Twitter --> */}
            <a
              href="https://www.Twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-secondary hover:bg-secondary hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                width="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>

            {/* <!-- Tiktok --> */}
            <a
              href="https://www.Twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-secondary hover:bg-secondary hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                width="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>TikTok</title>
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
          {/* <ul className="text-slate-300">
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>
            </ul> */}
        </div>
        <div className="mb-10 w-full px-4 md:w-1/3">
          <div className="mb-12 w-full px-4 font-medium text-slate-300 ">
            <h2 className="mb-5 text-3xl md:text-4xl lg:4xl font-bold text-white uppercase">
              Timkado
            </h2>
            <h2 className="mb-2 lg:text-2xl text-xl font-bold">Hubungi kami</h2>
            <p>
              Jl. Batu Tulis Raya No.2A, RT.3/RW.2, Kb. Klp., Kecamatan Gambir,
              Kota Jakarta Pusat
            </p>
            <p>Daerah Khusus Ibukota Jakarta 10210</p>
          </div>
          {/* <h3 className="mb-5 text-xl font-semibold text-white">Tautan</h3>
            <ul className="text-slate-300">
              <li>
                <a
                  href="#home"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#client"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  Client
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  Contact Us
                </a>
              </li>
            </ul> */}
        </div>
        <div className="mb-10 w-full px-4 md:w-1/3">
          <div className="mb-5 flex items-center justify-center">
            {/* <!-- you tube bg-green-400 --> */}
            <a
              href="https://wa.me/6285780007018"
              target="_blank"
              rel="noreferrer"
              className="easy-in-out rounded-2xl bg-[#39F16D] py-2 px-8 text-base font-semibold text-white transition duration-300 hover:opacity-80 hover:shadow-lg"
            >
              Chat With Us
            </a>

            {/* <!-- facebook --> */}
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
          {/* <div className="text-center justify-center w-full border-2 flex px-4 xl:mx-auto xl:w-full">
              {/* //className="mb-12 align- w-full px-4 font-medium text-slate-300 border-2"> */}
          {/* <h2 className="mb-5 text-4xl font-bold text-white uppercase">
                Timkado
              </h2>
              <h2 className="mb-2 text-2xl font-bold">Hubungi kami</h2>
              <p>
                Jl. Batu Tulis Raya No.2A, RT.3/RW.2, Kb. Klp., Kecamatan
                Gambir, Kota Jakarta Pusat
              </p>
              <p>Daerah Khusus Ibukota Jakarta 10210</p> */}
          {/* <p>+6285780007018</p> */}

          {/* <div className="justify-center text-center border-2"> */}
          {/* <div className=" flex easy-in-out bg-green-400 rounded-lg py-3 px-8 text-base font-semibold text-white transition duration-300 hover:opacity-80 hover:shadow-lg">
                  Chat With Us
                </div>
                <div className="flex">
                  <Image
                    src={WAImage}
                    alt="Onboard & tag"
                    width="60%"
                    height="60%"
                  />
                </div> */}
          {/* </div> */}

          {/* <br />
              <p>sales@timkado.id</p> */}

          {/* <h3 className="mb-5 text-xl font-semibold text-white">Tautan</h3> */}
          {/* <ul className="text-slate-300">
              <li>
                <a
                  href="#home"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#client"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  Client
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  Contact Us
                </a>
              </li>
            </ul> */}
        </div>{" "}
        <div className="flex justify-center text-center mt-14 border-0 mb-20 w-full">
          <p className=" flex text-center text-sm font-medium text-slate-200">
            Copyright ??2022 -
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-blue-400"
            >
              Timkado Sejahtera Indonesia
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

/* <div className="w-full border-t border-slate-700 pt-10">
          <div className="mb-5 flex items-center justify-center">
            
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-secondary hover:bg-secondary hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                width="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

           
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-secondary hover:bg-secondary hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                width="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
         
            <a
              href="https://www.Instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-secondary hover:bg-secondary hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                width="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>

         
            <a
              href="https://www.Twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-secondary hover:bg-secondary hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                width="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>

        
            <a
              href="https://www.Twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-secondary hover:bg-secondary hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                width="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>TikTok</title>
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        
           </div> */
