"use client"
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/layout/header"), { ssr: false });
const FixedMenu = dynamic(() => import("../components/layout/fixed-nenu"), { ssr: false });
const FooterInfo = dynamic(() => import("../components/layout/footer"), { ssr: false });
const Principal = dynamic(() => import("./home/page"), { ssr: false });
const Contact = dynamic(() => import("./contact/page"), { ssr: false });
const About = dynamic(() => import("./about/page"), { ssr: false });
const Wholesale = dynamic(() => import("./wholesale/page"), { ssr: false });
import { useEffect, useState } from "react";

export default function Home() {
  const [pagina, setPagina] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 65);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white  overflow-hidden hd:h-[auto] xl:h-[auto]">
      {isVisible && <Header setPagina={setPagina} />}
      <FixedMenu setPagina={setPagina} />
      <main>
        {pagina === "home" && <Principal />}
        {pagina === "contato" && <Contact />}
        {pagina === "sobre" && <About />}
        {pagina === "atacado" && <Wholesale />}
      </main>
      <footer>
        <FooterInfo />
      </footer>
    </div>
  );
}
