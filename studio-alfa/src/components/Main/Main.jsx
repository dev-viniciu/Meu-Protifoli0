import './Main.css';

function Main() {
  return (
    <main className='main'>
    <div className="main-container"></div> 
      <section className='hero'>
        <h1>Criamos sites que funcionam</h1>
       <p>
  Layouts responsivos, rápidos e acessíveis para o seu <span className="quebrar">negócio</span> crescer na web.
</p>

        <div className="hero-buttons">
          <a href="#orcamento" className='btn-primary'>Peça um orçamento</a>
          <a href="#orcamento" className='btn-secondary'>Fale Conosco</a>
        </div>
      </section>
      
      <section className='servicos'>
        {/* Conteúdo dos serviços entrará aqui */}
      </section>
    </main>
  );
}

export default Main;
