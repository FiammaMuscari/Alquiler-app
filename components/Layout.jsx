import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen ">
      <Head>
        <title>MdQ</title>
      </Head>
      <main className="flex-grow">
        <Navbar />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
