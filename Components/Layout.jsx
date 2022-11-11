import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div className="w-full">
      <Head>
        <title>Badak Store</title>
      </Head>
      <header className="sticky top-0 ">
        <Navbar />
      </header>
      <main className="">{children}</main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
