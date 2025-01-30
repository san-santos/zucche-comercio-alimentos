export default function Header({ setPagina }) {

  const mostrarHome = () => setPagina('home');
  const mostrarContato = () => setPagina('contato');
  const mostrarSobre = () => setPagina('sobre');
  const mostrarAtacado = () => setPagina('atacado');

  return (
    <>
      <nav className="bg-slate-400 flex justify-center items-center p-4 h-[80px] w-full fixed">
        <div className="flex justify-between items-center  w-[80%]">
          <div className="w-[65px] h-[65px]">
            <div className="w-[65px] h-[65px] rounded-[50%] bg-slate-500"></div>
          </div>
          <ul className="flex items-center justify-between w-[35%]">
            <li>
              <a href="#" onClick={mostrarHome}>
                <span className="tracking-[1px]">Início</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={mostrarAtacado}>
                <span className="tracking-[1px]">Produtos por Atacado</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={mostrarContato}>
                <span className="tracking-[1px]">Fale Conosco</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={mostrarSobre}>
                <span className="tracking-[1px]">Quem Somos</span>
              </a>
            </li>
          </ul>
          <div className="flex w-[8%] justify-between">
            <div className="w-[35px] h-[35px] bg-slate-500 rounded-[50%]"></div>
            <div className="w-[35px] h-[35px] bg-slate-500 rounded-[50%]"></div>
            <div className="w-[35px] h-[35px] bg-slate-500 rounded-[50%]"></div>
          </div>
        </div>
      </nav>
    </>
  );
}
