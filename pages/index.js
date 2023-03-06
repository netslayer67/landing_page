import Head from "next/head";
import Script from "next/script";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./homepage";
import About from "./about";
import Portfolio from "./portfolio";
import Client from "./client";
import Contact from "./contact";
import Pricing from "./pricing";
import Terms from "./terms";
import Headweb from "./components/head";
import Proposition from "./proposition";
import Grow from "./grow";
import Legal from "./legal";
import Givetheme from "./givetheme";
import BacktoTop from "./components/BacktoTop";
import Personal from "./personal";
import Seamless from "./seamless";
import Meetthelaw from "./meetthelaw";
import Order from "./order";
import Brands from "./brands";
import ContactV2 from "./contactV2"
import ContactV3 from "./contactV3";

export default function Home() {
  return (
    <div className="container">
      <Headweb />
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
      <Script src=".\js\script.js"></Script>
      <NavBar />
      <HomePage />
      <Grow />
      <Givetheme />
      <About />
      <Portfolio />
      <Personal />
      <Seamless />
      <Meetthelaw />
      <Order />

      {/* <Pricing /> */}
      {/* <Client /> */}
      {/* <Terms /> */}
      {/* <Contact /> */}

      <Brands />

      {/* <ContactV2 /> */}

      <ContactV3 />

      {/* <Legal /> */}
      {/* <Footer /> */}
      <BacktoTop />
    </div>
  );
}
