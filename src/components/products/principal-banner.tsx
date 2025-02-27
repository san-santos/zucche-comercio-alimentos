"use client"

import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";
import getImages from "./images";

export default function Banner() {
  const [index, setIndex] = useState(0);

  const handleAdvance = () => {
    setIndex((prev) => ((prev - 1) + getImages().length)  % getImages().length);
  };

  const handleGoBack = () => {
    setIndex((prev) => ((prev + 1) + getImages().length) % getImages().length);
  };

  useEffect(() => {
    const photoBanner = setTimeout(() => {
      setIndex((prev) => (prev + 1) % getImages().length);
    }, 3000);

    return () => {
      clearTimeout(photoBanner);
    };
  });

  return (
    <div className="w-full h-[680px] flex justify-center hd:mb-[88px] xl:mb-[16px]">
      <div className="w-[80%] flex flex-col items-center justify-center relative">
        <div className="w-[98%] flex justify-center z-[1]">
          <div className="flex justify-between w-full">
            <button onClick={handleAdvance}>
              <BsArrowLeftCircleFill className="text-[35px] text-[#333333]" />
            </button>
            <div className="flex flex-col items-start">
              <h1 className="text-[#333333]">
                Call To Action - PRODUTOS E PROMOÇÕES
              </h1>
              <button className="w-[250px] bg-[#333333] p-2 text-white rounded">
                NOSSAS PROMOÇÕES
              </button>
            </div>
            <button onClick={handleGoBack}>
              <BsArrowRightCircleFill className="text-[35px] text-[#333333]" />
            </button>
          </div>
        </div>
        <Image
          className="absolute"
          src={getImages()[index]}
          alt="Banner image"
          width={1920}
          height={1080}
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
}
