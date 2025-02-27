"use client"

import Image from "next/image";
import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";

interface HeaderProps {
  setPagina: (pagina: string) => void;
}

export default function Header({ setPagina }: HeaderProps) {
  const mostrarHome = () => setPagina("home");
  const mostrarContato = () => setPagina("contato");
  const mostrarSobre = () => setPagina("sobre");
  const mostrarAtacado = () => setPagina("atacado");

  return (
    <div style={{ position: "fixed", top: 0 }} className="z-[3]">
      <nav className="bg-slate-100 flex justify-center items-center p-4 h-[80px] w-full fixed shadow-md">
        <div className="flex justify-between items-center  w-[80%]">
          <div className="w-[65px] h-[65px]">
            <div className="w-[65px] h-[65px] rounded-[50%] ml-[24px]">
              <Image
                src="/logotipo-zucche.png"
                alt="logotipo-zucche"
                width={65}
                height={65}
                loading="lazy"
              />
            </div>
          </div>
          <ul className="flex items-center justify-between hd:w-[35%] xl:w-[45%]">
            <li>
              <a href="#" onClick={mostrarHome}>
                <span className="tracking-[1px] text-[#333333]">Início</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={mostrarAtacado}>
                <span className="tracking-[1px] text-[#333333]">
                  Produtos por Atacado
                </span>
              </a>
            </li>
            <li>
              <a href="#" onClick={mostrarContato}>
                <span className="tracking-[1px] text-[#333333]">
                  Fale Conosco
                </span>
              </a>
            </li>
            <li>
              <a href="#" onClick={mostrarSobre}>
                <span className="tracking-[1px] text-[#333333]">
                  Quem Somos
                </span>
              </a>
            </li>
          </ul>
          <div className="flex hd:w-[8%] xl:w-[10%] justify-between mr-[16px]">
            <div className="w-[30px] h-[30px] rounded-[50%]">
              <BsWhatsapp className="w-[30px] h-[30px] text-[#333333]" />
            </div>
            <div className="w-[30px] h-[30px] rounded-[50%]">
              <BsFacebook className="w-[30px] h-[30px] text-[#333333]" />
            </div>
            <div className="w-[30px] h-[30px] rounded-[50%]">
              <BsInstagram className="w-[30px] h-[30px] text-[#333333]" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
