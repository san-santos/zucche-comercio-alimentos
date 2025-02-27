"use client"

import dynamic from "next/dynamic";
const AboutInfo = dynamic(() => import("../../components/about/about-info"), { ssr: false });
const AboutImg = dynamic(() => import("../../components/about/about-img"), { ssr: false });

export default function About() {
  return (
    <>
      <AboutInfo />
      <AboutImg />
    </>
  );
}
