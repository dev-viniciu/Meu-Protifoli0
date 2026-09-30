import { LayoutGrid, Smartphone, Rocket } from 'lucide-react';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <div className="main-container">
        <section className="hero">
          <h1>Criamos sites que funcionam</h1>
          <p>
            Layouts responsivos, rápidos e acessíveis para o seu{' '}
            <span className="quebrar">negócio</span> crescer na web.
          </p>
          <div className="hero-buttons">
            <a href="#orcamento" className="btn-primary">
              Peça um orçamento
            </a>
            <a href="#portfolio" className="btn-secondary">
              Ver portfólio
            </a>
          </div>
        </section>

        <section className="servicos">
          <h2>Nossos Serviços</h2>
          <div className="servicos-icones">
            <div className="servico-item">
              <LayoutGrid color="#0b4f8c" size={40} />
              <h3>Design de interface</h3>
              <p>Telas claras, pensadas para o usuário.</p>
            </div>
            <div className="servico-item">
              <Smartphone color="#0b4f8c" size={40} />
              <h3>Responsividade</h3>
              <p>O mesmo site em qualquer tela.</p>
            </div>
            <div className="servico-item">
              <Rocket color="#0b4f8c" size={40} />
              <h3>Performance</h3>
              <p>Páginas leves que carregam rápido.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
