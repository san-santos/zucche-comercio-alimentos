"use client";

import Header from "../components/header";
import FooterInfo from "../components/footer";
import Principal from "./content-home";
import Contact from "./contact";
import About from "./about-us";
import Wholesale from "./wholesale-products";

import { useState } from "react";

export default function Home() {
  const [pagina, setPagina] = useState("home");

  return (
    <div className="bg-white w-screen h-screen overflow-x-hidden">
      <Header setPagina={setPagina} />

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
