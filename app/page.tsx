import React from 'react';
import "./globals.css";

const LivroPub = () => {
  return (
    <div>
      <nav className="barra-fixa">
        <a href="index.html">
          <img src="/images/logo books ellipse.png" alt="" className="logo" />
        </a>
        <ul className="opcoes">
          <li className="li-busca">
            <form method="post">
              <section className="div-busca">
                <input type="text" id="id-busca" name="busca" placeholder="Dom Casmurro..." className="txt-busca" />
                <label htmlFor="id-busca" style={{ display: 'flex' }}>
                  
                </label>
              </section>
            </form>
          </li>
          <li className="link sub"><a href="#">Recomendados</a></li>
          <li className="link sub"><a href="#">Categorias</a></li>
          <li className="link login-grid">
            <button className="button-login shadow">
              <a href="../login/login.html" className="login">Login
                
              </a>
            </button>
          </li>
          <li className="icone-menu">
            <span className="material-symbols-outlined span-menu">menu</span>
          </li>
        </ul>
      </nav>

      <section className="secao-menu">
        <div className="menu-hamburguer">
          <ul className="opcoes-menu">
            <li className="opcao"><a href="#">Recomendados</a></li>
            <li className="opcao borda-menu"><a href="#">Categorias</a></li>
            <li className="opcao login-menu">
              <button className="button-login shadow">
                <a href="../login/login.html" className="login">Login
                  
                </a>
              </button>
            </li>
          </ul>
        </div>
      </section>

      <header>
        <section className="header">
          <h1>BIBLIOTECA DE LIVROS COM DOMÍNIO PÚBLICO</h1>
          <h2>Conheça nossa variedade de livros</h2>
          <a href="#">
            <button className="categoria">Ver Categorias</button>
          </a>
        </section>
      </header>

      <main>
        <section id="um">
          <h1 className="titulos">POPULARES</h1>
          <section className="div-carrossel">
            <button className="seta-dir control" aria-label="next image">
             
            </button>
            <button className="seta-esq control" aria-label="previous image">
              
            </button>
            <div className="carrossel-wrapper">
              <div className="carrossel">
                <a>
                  <img src="/images/20_mil_leguas.jpg" className="img current-img" />
                </a>
                <a>
                  <img src="/images/cortico.jpg" className="img" />
                </a>
                <a>
                  <img src="/images/ilha_tesouro.jpg" className="img" />
                </a>
                <a>
                  <img src="/images/divina_comedia.jpg" className="img" />
                </a>
                <a>
                  <img src="/images/dom_casmurro.jpg" className="img" />
                </a>
                <a>
                  <img src="/images/viagem_centro_terra.webp" className="img" />
                </a>
              </div>
            </div>
          </section>
        </section>

        <section id="dois">
          <h1 className="titulos">BRASILEIROS</h1>
          <div className="livros-br">
            <picture>
              <img src="/images/cortico.jpg" alt="" className="livro-brasil" />
              <p>Cortiço</p>
            </picture>
            <picture>
              <img src="/images/dom_casmurro.jpg" alt="" className="livro-brasil" />
              <p>Dom Casmurro</p>
            </picture>

            <picture>
              <img src="/images/O-Ateneu.jpg" alt="" className="livro-brasil" />
              <p>O Ateneu</p>
            </picture>

            <picture>
              <img src="/images/Policarpo_Quaresma.jpg" alt="" className="livro-brasil" />
              <p>Triste Fim de Policarpo Quaresma</p>
            </picture>

            <picture>
              <img src="/images/dom_casmurro.jpg" alt="" className="livro-brasil" />
              <p>Dom Casmurro</p>
            </picture>

            <picture>
              <img src="/images/cortico.jpg" alt="" className="livro-brasil" />
              <p>Cortiço</p>
            </picture>

            <picture>
              <img src="/images/O-Ateneu.jpg" alt="" className="livro-brasil" />
              <p>O Ateneu</p>
            </picture>

            <picture>
              <img src="/images/cortico.jpg" alt="" className="livro-brasil" />
              <p>Cortiço</p>
            </picture>

            <picture>
              <img src="/images/dom_casmurro.jpg" alt="" className="livro-brasil" />
              <p>Dom Casmurro</p>
            </picture>
          </div>
          <a href="#">
            <button className="ver-mais">Ver Mais</button>
          </a>

        </section>

        <section id="tres">
          <h1 className="titulos">Avaliações</h1>
          <div className="div-avaliacoes">
            <div id="comment-section" className="div-pessoa1" >
              <input type="text" id="user-name" placeholder="Seu nome" required/>
                <textarea id="comment-input" placeholder="Digite seu comentário aqui" required></textarea>
                <label htmlFor="rating"></label>
                <select id="rating" required>
                  <option value="5">★★★★★ (5)</option>
                  <option value="4">★★★★☆ (4)</option>
                  <option value="3">★★★☆☆ (3)</option>
                  <option value="2">★★☆☆☆ (2)</option>
                  <option value="1">★☆☆☆☆ (1)</option>
                  <option value="0">☆☆☆☆☆ (0)</option>
                </select>

                <button id="add-comment-btn" className="ver-mais">Adicionar Comentário</button>
            </div>
            <div id="comments-container">
            </div>
          </div>
          <div className="mapa">
            <h1 className="titulos">Presencial</h1>
            <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3958.917285616891!2d-34.874946198917165!3d-7.135563576362043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace810a2c5ee57%3A0xd1ba0df6e1ddffa7!2sBiblioteca%20Nilo%20Pe%C3%A7anha!5e0!3m2!1spt-BR!2sbr!4v1699574034097!5m2!1spt-BR!2sbr" width="600" height="450"  loading="lazy" ></iframe>
          </div>
        </section>
      </main>


      <footer>
        <section className="fim link">
          <a href="#">Sobre Nós</a>
          <a href="#">Termos de Uso</a>
          <p>Redes Sociais</p>
          <a href="#">Política de Privacidade</a>
          <a href="creditos.html">Créditos</a>
          <section className="redes">
          
          </section>

        </section>
        <section className="fim2">
          <br />
          <p>
            copyrigth 2023 - Disciplina de Linguagem de Marcação - IFPB - Todos os direitos reservados
          </p>
        </section>
      </footer>
      <script src="./carrossel.js"></script>
      <script src="./menu.js"></script>
      <script src="./main.js"></script>
    </div> 
  
);
  
};
export default LivroPub;
