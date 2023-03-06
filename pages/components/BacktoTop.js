// import Head from "next/head";

export default function head() {
  return (
    <div className="container w-full">
      <a
        href="#home"
        id="to-top"
        className="fixed bottom-4 right-4 z-[9999] hidden h-14 w-14 items-center justify-center rounded-full
         bg-primary p-4 hover:animate-pulse"
      >
        <span className=" mt-2 block h-5 w-5 rotate-45 border-t-4 border-l-4"></span>
      </a>
    </div>
  );
}
