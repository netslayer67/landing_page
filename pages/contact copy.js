import React from "react";

function contact() {
  return (
    <section id="contact" className="pt-36 pb-32 dark:bg-slate-800 ">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-2xl font-semibold dark:text-secondary text-primary">
              Contact
            </h4>
            <h2 className="mb-4 text-3xl dark:text-secondary font-bold text-dark sm:text-4xl lg:text-5xl">
              Hubungi kami
            </h2>
            <p className="text-base font-medium text-dark dark:text-secondary md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              cupiditate non animi.
            </p>
          </div>
        </div>
        <form>
          <div className="w-full lg:mx-auto lg:w-2/3">
            <div className="mb-8 w-full px-4">
              <label
                htmlFor="name"
                className="text-base font-bold text-primary dark:text-secondary"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="mb-8 w-full px-4">
              <label
                htmlFor="name"
                className="text-base font-bold text-primary dark:text-secondary"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="mb-8 w-full px-4">
              <label
                htmlFor="message"
                className="text-base font-bold text-primary dark:text-secondary"
              >
                Message
              </label>
              <textarea
                type="text"
                id="message"
                className="h-32 w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button className="w-full rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default contact;
