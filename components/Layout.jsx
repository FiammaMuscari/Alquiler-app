import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButton from "./FloatingButton";
import ScrollToTopButton from "./ScrollToTopButton";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen ">
      <Head>
        <title>Hospedajes</title>
      </Head>
      <main className="flex-grow">
        <Navbar />
        {children}
      </main>
      <FloatingButton
        phoneNumber="2236156046"
        defaultMessage="Hola Karina, quisiera consultarte por un departamento..."
      />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
