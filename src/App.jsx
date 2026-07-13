import "./App.css";

import logoFarminha from "./assets/images/logo-farminha.png";
import bannerFarminha01 from "./assets/images/bannerFarminha01.png";

import bandejaAgriao from "./assets/images/bandejaAgriao.png";
import bandejaRabanete from "./assets/images/bandejaRabanete.png";
import bandejaRucula from "./assets/images/bandejaRucula.png";
import bandejaBrocolis from "./assets/images/bandejaBrocolis.png";

import saladaMicroverdes from "./assets/images/saladaMicroverdes.png";
import pratoSofisticado from "./assets/images/pratoSofisticado.png";
import omeleteMicroverdes from "./assets/images/omeleteMicroverdes.png";
import sanduicheMicroverdes from "./assets/images/sanduicheMicroverdes.png";

function App() {
  return (
    <div className="site-container">
      <header className="header">
        <div className="logo">
          <img src={logoFarminha} alt="Logo Farminha Microverdes" />
        </div>

        <nav className="menu">
          <a href="#inicio">Início</a>
          <a href="#microverdes">Microverdes</a>
          <a href="#variedades">Variedades</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="banner" id="inicio">
          <img
            src={bannerFarminha01}
            alt="Banner Farminha Microverdes"
            className="banner-principal"
          />
        </section>

        <section className="secao secao-verde" id="microverdes">
          <h2>O que são microverdes?</h2>

          <p>
            Microverdes são brotinhos de hortaliças cultivados com cuidado e
            colhidos ainda bem jovens. Eles se destacam pela aparência delicada,
            pelo frescor e pelo sabor especial que levam às refeições.
          </p>

          <p>
            Pequenos no tamanho, mas cheios de personalidade, podem ser usados
            para finalizar saladas, sanduíches, omeletes e pratos especiais,
            deixando tudo mais bonito, fresco e saboroso.
          </p>
        </section>

        <section className="secao secao-clara" id="variedades">
          <span className="tag-secao">Nossas variedades</span>

          <h2>Microverdes cultivados na Farminha</h2>

          <p>
            No momento, nossa produção está focada em quatro variedades: agrião,
            brócolis, rabanete e rúcula. Cada uma tem um sabor especial e
            combina com diferentes preparos.
          </p>

          <div className="grid-entrega">
            <div className="card-entrega">
              <img src={bandejaAgriao} alt="Bandeja de microverde de agrião" />

              <h3>Agrião</h3>

              <p>
                Fresco e delicado, com toque levemente ardido. Combina com
                saladas, peixes, omeletes, sanduíches naturais, sopas, cremes e
                pratos leves.
              </p>
            </div>

            <div className="card-entrega">
              <img
                src={bandejaBrocolis}
                alt="Bandeja de microverde de brócolis"
              />

              <h3>Brócolis</h3>

              <p>
                Sabor suave e muito versátil. Combina com saladas, omeletes,
                sanduíches, bowls, sopas e refeições leves do dia a dia.
              </p>
            </div>

            <div className="card-entrega">
              <img
                src={bandejaRabanete}
                alt="Bandeja de microverde de rabanete"
              />

              <h3>Rabanete</h3>

              <p>
                Sabor levemente picante e presença marcante. Fica ótimo em
                sanduíches, saladas, ovos, carnes, pratos frios, entradas e
                finalizações.
              </p>
            </div>

            <div className="card-entrega">
              <img src={bandejaRucula} alt="Bandeja de microverde de rúcula" />

              <h3>Rúcula</h3>

              <p>
                Sabor marcante, fresco e levemente picante. Combina com massas,
                pizzas, sanduíches, saladas, carnes, ovos e finalizações
                especiais.
              </p>
            </div>
          </div>
        </section>

        <section className="secao-prato">
          <div className="secao-prato-texto">
            <span className="tag-secao">Da Farminha para o seu prato</span>

            <h2>Mais sabor, cor e frescor nas suas refeições</h2>

            <p>
              Os microverdes podem ser usados em saladas, omeletes, sanduíches e
              finalizações especiais. Eles deixam o prato mais bonito, fresco e
              cheio de personalidade.
            </p>

            <p>
              Como são entregues vivos, você pode colher na hora e usar apenas a
              quantidade que quiser.
            </p>

            <a
              href="https://wa.me/5531994173700"
              target="_blank"
              rel="noreferrer"
              className="btn btn-principal"
            >
              Quero encomendar pelo WhatsApp
            </a>
          </div>

          <div className="secao-prato-imagem">
            <img
              src={pratoSofisticado}
              alt="Prato sofisticado decorado com microverdes"
            />
          </div>
        </section>

        <section className="secao usos">
          <span className="tag-secao">Como usar</span>

          <h2>Use microverdes em diferentes preparos</h2>

          <p>
            Uma forma simples de transformar pratos do dia a dia em refeições
            mais bonitas, frescas e saborosas.
          </p>

          <div className="grid-usos">
            <div className="card-uso">
              <img src={sanduicheMicroverdes} alt="Sanduíche com microverdes" />

              <h3>Sanduíches</h3>

              <p>
                Perfeitos para dar crocância, frescor e um sabor especial aos
                sanduíches do dia a dia.
              </p>
            </div>

            <div className="card-uso">
              <img src={saladaMicroverdes} alt="Salada com microverdes" />

              <h3>Saladas</h3>

              <p>
                Mais frescor, cor e textura para saladas simples ou especiais.
                Uma forma prática de deixar o prato mais bonito e cheio de vida.
              </p>
            </div>

            <div className="card-uso">
              <img src={omeleteMicroverdes} alt="Omelete com microverdes" />

              <h3>Omeletes</h3>

              <p>
                Um toque delicado para transformar uma refeição simples em algo
                mais bonito, fresco e saboroso.
              </p>
            </div>

            <div className="card-uso">
              <img
                src={pratoSofisticado}
                alt="Prato sofisticado com microverdes"
              />

              <h3>Pratos especiais</h3>

              <p>
                Finalização elegante para pratos mais elaborados, trazendo cor,
                delicadeza e personalidade.
              </p>
            </div>
          </div>
        </section>

        <section className="contato" id="contato">
          <h2>Faça sua encomenda</h2>

          <p>
            Por enquanto, as encomendas são feitas diretamente pelo WhatsApp.
          </p>

          <a
            href="https://wa.me/5531994173700"
            target="_blank"
            rel="noreferrer"
            className="btn btn-principal"
          >
            Chamar no WhatsApp
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>Farminha Microverdes © 2026</p>

        <a
          href="https://www.instagram.com/farminhamicroverdes"
          target="_blank"
          rel="noreferrer"
          className="instagram-footer"
        >
          <svg
            className="instagram-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2C5.6 4 4 5.6 4 7.6v8.8c0 2 1.6 3.6 3.6 3.6h8.8c2 0 3.6-1.6 3.6-3.6V7.6c0-2-1.6-3.6-3.6-3.6H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
          </svg>

          <span>@farminhamicroverdes</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
