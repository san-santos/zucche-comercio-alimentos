"use client"
import dynamic from "next/dynamic";
const Banner = dynamic(() => import("../../components/products/principal-banner"), { ssr: false });
const FeaturedProducts = dynamic(() => import("../../components/products/featured-products"), { ssr: false });

export default function Principal(){
    
    return (
        <>
        <Banner/>         
        <FeaturedProducts/>
        </>
    )
}