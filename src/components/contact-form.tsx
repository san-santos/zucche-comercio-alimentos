export default function ContactForm() {
  return (
    <section className="w-[100%] h-auto flex justify-center items-center bg-slate-600">
      <div className="container w-[80%] h-[450px] flex flex-col items-center justify-center bg-slate-400">
        <h2>Título e informações de contato</h2>
        <form className="flex flex-col">
          <label htmlFor="">Nome</label>
          <input type="text" className="mb-[12px]" />
          <label htmlFor="">E-mail</label>
          <input type="email" className="mb-[12px]"/>
          <label htmlFor="">WhatsApp</label>
          <input type="tel" className="mb-[12px]"/>
          <button className="bg-[#0d9900]">Enviar</button>
        </form>
      </div>
    </section>
  );
}
