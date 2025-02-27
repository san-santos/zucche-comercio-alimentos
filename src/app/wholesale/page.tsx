"use client"
import dynamic from "next/dynamic";
const Products = dynamic(() => import("../../components/products/product-carousel"), { ssr: false });
const ProductsInfo = dynamic(() => import("../../components/products/products-info"), { ssr: false });
const SearchProducts = dynamic(() => import("../../components/search -products/search-products"), { ssr: false });

export default function Wholesale() {
  return (
    <div className="mt-[80px]">
      <ProductsInfo />
      <SearchProducts />
      <Products />
    </div>
  );
}
