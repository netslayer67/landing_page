import Head from "next/head";

export default function head() {
  return (
    <div className="container ">
      <Head>
        <meta name="title" content="Timkado" />
        <meta
          name="description"
          content="The leading chat commerce platform with full support for Whatsapp Business including unlimited free messaging"
        />
        <meta property="og:title" content="Timkado" />
        <meta
          property="og:url"
          content="https://landingpage-opal-nu.vercel.app/"
        />
        <meta
          property="og:description"
          content="The leading chat commerce platform with full support for Whatsapp Business including unlimited free messaging"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://landingpage-opal-nu.vercel.app/img/daisi-logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <link
          rel="shortcut icon"
          href="https://landingpage-opal-nu.vercel.app/img/daisiicon.ico"
          type="image/x-icon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;900&family=Smooch&display=swap"
          rel="stylesheet"
        />

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Smooch&display=swap"
          rel="stylesheet"
        ></link> */}
      </Head>
    </div>
  );
}
