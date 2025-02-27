"use client"

function Products1() {
  return (
    <div className="w-full h-[300px] flex justify-center bg-slate-200">
      <div className="w-[80%] h-full flex flex-col justify-center items-center bg-[#D9D9D9]">
        <h2 className="text-[#333333]" >Título Categorias</h2>
        <h2 className="text-[#333333]" >Imagens do portfólio de produtos </h2>
      </div>
    </div>
  );
}

function Products2() {
  return (
    <div className="w-full h-[300px] flex justify-center bg-slate-200">
      <div className="w-[80%] h-full flex flex-col justify-center items-center bg-[#D9D9D9]">
      <h2 className="text-[#333333]">Título Categorias</h2>
      <h2 className="text-[#333333]" >Imagens do portfólio de produtos </h2>
      </div>
    </div>
  );
}

function Products3() {
  return (
    <div className="w-full h-[300px] flex justify-center bg-slate-200">
      <div className="w-[80%] h-full flex flex-col justify-center items-center bg-[#D9D9D9]">
      <h2 className="text-[#333333]">Título Categorias</h2>
      <h2 className="text-[#333333]">Imagens do portfólio de produtos </h2>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <>
      <Products1 />
      <Products2 />
      <Products3 />
    </>
  );
}
