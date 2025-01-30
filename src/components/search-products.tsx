import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

interface Products {
  id: number;
  product: string;
  description: string;
  image: string;
}

export default function SearchProducts() {
  const [isVisible, setIsVisible] = useState(false);
  const [consulta, setConsulta] = useState("");
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (consulta.trim() === "") {
      alert("Digite algo para consultar.");
      setIsVisible(false);
      return;
    }

    if (!Array.isArray(allProducts)) {
      console.error("Produtos não estão em formato de array");
      return;
    }

    const regex = new RegExp(`\\b${consulta.trim()}\\b`, "i");

    const filtered = allProducts.filter(
      (product) => regex.test(product.product) || regex.test(product.description)
    );

    setFilteredProducts(filtered);
    setIsVisible(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:4000/products");

        if (Array.isArray(response.data)) {
          setAllProducts(response.data);
        } else {
          console.error("Dados recebidos não estão em formato de array");
          setAllProducts([]);
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        setAllProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full flex justify-center bg-slate-500">
      <div className="w-[80%] flex flex-col items-center bg-slate-400 p-4">
        <h2 className="text-lg font-semibold mb-4">Título</h2>
        <form action="" className="w-full flex justify-end mb-4">
          <input
            type="text"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            placeholder="Consulte o produto"
            className="w-[180px] text-black border p-2"
          />
          <button
            className="w-[120px] bg-[#0d9900] ml-[16px] p-2 text-white rounded"
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? "Consultando..." : "Consultar"}
          </button>
        </form>

        {isVisible && (
          <div className="w-full mt-4">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-red-600 font-semibold">
                Produto não encontrado. Tente outra consulta.
              </p>
            ) : (
              filteredProducts.map((item) => (
                <div key={item.id} className="border-b p-4 mb-4">
                  <p>
                    <span className="font-bold">Produto:</span> {item.product}
                  </p>
                  <p>
                    <span className="font-bold">Descrição:</span>
                    <br /> {item.description}
                  </p>
                  <Image
                    src={item.image}
                    alt={item.product}
                    width={250}
                    height={250}
                    className="w-[250px] mt-2"
                    loading="lazy"
                  />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
