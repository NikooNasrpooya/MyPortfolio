'use client'
import About from "./component/About";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Portfolio from "./component/Portfolio";
import Skills from "./component/Skills";
import Main from "./component/Main";
import Contact from "./component/contact";



export default function Home() {
  return (
    <>
    <Navbar />
     <Main />
     <About />
    <Portfolio />
    <Skills />
    <Contact />
    <Footer />
    </>
  );
}

