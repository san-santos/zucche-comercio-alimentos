"use client"

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Images from "./images";
import "../../../styles/style.css";

export default function FeaturedProducts() {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="container-carousel  hd:!mb-[8px] hd:!mt-[24px] xl:!mb-[8px] xl:!mt-[8px]">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {Images().map((image, index) => (
            <motion.div key={index} className=" container-image">
              <Image
                src={image}
                alt={"image"}
                width={300}
                height={150}
                className=" image-carousel"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
