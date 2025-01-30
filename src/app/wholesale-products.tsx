import Products from "../components/product-carousel";
import ProductsInfo from "../components/products-info";
import SearchProducts from "../components/search-products"

export default function Wholesale() {
  return (
    <div className="mt-[80px]">
      <ProductsInfo />
      <SearchProducts/>
      <Products />
    </div>
  );
}
