import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div className="">
      <Head>
        <title>Badak Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
