export default function legal() {
  return (
    <section id="contact" className="border-0">
      <div className="pt-0 mb-0 pb-0 mt-10 flex dark:border-2 flex-wrap text-left bg-yellow-300">
        <div className="border-0 mb-0 w-full p-28 lg:w-1/3">
          <h3 className="mb-5 md:text-6xl text-5xl lg:text-7xl font-bold text-dark">
            Legal Stuff
          </h3>
        </div>
        <div className="border-0 p-28 mb-0 w-full lg:w-1/3">
          <div className="flex border-0  mb-0 w-full px-0 font-medium text-slate-300 ">
            <a
              href="/termsprivacy"
              target="_blank"
              rel="noreferrer"
              className="  text-base  text-dark transition duration-300 hover:opacity-80 hover:shadow-lg"
            >
              Privacy Policy
            </a>
          </div>
          <div className="flex mb-0 w-full px-0 font-medium text-slate-300 ">
            <a
              href="/termsaccept"
              target="_blank"
              rel="noreferrer"
              className="border-0  text-base  text-dark transition duration-300 hover:opacity-80 hover:shadow-lg"
            >
              Acceptable Use Policy
            </a>
          </div>
        </div>
        <div className=" border-0 p-28 mt-0 mb-0 w-full lg:w-1/3">
          <div className="flex border-0  mb-4 w-full   text-slate-300 ">
            <a
              href="mailto:legal@timkado.id"
              target="_blank"
              rel="noreferrer"
              className="sm:text-center md:text-center  text-base text-dark transition duration-300 hover:opacity-80 hover:shadow-lg"
            >
              legal@timkado.id
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
