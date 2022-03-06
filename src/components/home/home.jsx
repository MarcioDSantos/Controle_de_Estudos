import React, {Component} from 'react';
import './home.css';

function Home() {
  return (
    <div className='HomePage'>
        <html lang="pt-BR">
            <header className="HomeHeader">
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Um site que auxilia e fornec um RoadMap para seus estudos" />
                <title>Nome da Page - Organize seus estudos em programação</title>
                <link rel="stylesheet" type="text/css" href="home.css" />
            </header>
            <body>
                <header className="cabecalho">
                    <img className="cabecalho-imagem" src='assets/done' alt="Logo da página" />
                    <nav className="cabecalho-menu">
                        <a className="cabecalho-menu-item">Linguagens de Programação</a>
                        <a className="cabecalho-menu-item">Tutorial</a>
                        <a className="cabecalho-menu-item">Open Source</a>
                        <a className="cabecalho-menu-item">Comandos</a>
                    </nav>
                </header>
            
                <main className="conteudo">
                    <section className="conteudo-principal">
                        <div className="conteudo-principal-escrito">
                            <h1 className="conteudo-principal-escrito-titulo">Nome da Page</h1>
                            <h2 className="conteudo-principal-escrito-subtitulo">Estude de forma organizada</h2>
            
                        </div>
            
                        <section className="conteudo-principal-botoes">
                            <button className="conteudo-principal-escrito-botao-cadastro"><strong>Cadastre-se</strong></button>
                            <button className="conteudo-principal-escrito-botao-login"><strong>Login</strong></button>
                        </section>
            
                        <section className="conteudo-secundario">
                            <h3 className="conteudo-secundario-titulo">O que fazemos por você?</h3>
                            <p className="conteudo-secundario-paragrafo">1. Fornecemos a melhor trilha de estudos para cada linguagem de programação.</p>
                            <p className="conteudo-secundario-paragrafo">2. O site possui um sistema de organização para você não se perder nos estudos e turbinar seu progresso.</p>
                        </section>
                    </section >
            
                    <section className="painel-icones">
                        <div className="icones">
                            <img className="conteudo-principal-imagem" src="assets/java.png" width="100px" height="100px" />
                            <img className="conteudo-principal-imagem" src="assets/javascript.png" width="100px" height="100px" />
                            <img className="conteudo-principal-imagem" src="assets/php.png" width="100px" height="100px" />
                        </div>
            
                        <div className="icones1">
                            <img className="conteudo-principal-imagem" src="assets/python.png" width="100px" height="100px" />
                            <img className="conteudo-principal-imagem" src="assets/html5.png" width="100px" height="100px" />
                            <img className="conteudo-principal-imagem" src="assets/css3.png" width="100px" height="100px" />
                        </div>
                        <div className="icones2">
                            <img className="conteudo-principal-imagem" src="assets/react.png" width="100px" height="100px" />
                            <img className="conteudo-principal-imagem" src="assets/c.png" width="100px" height="100px" />
                            <img className="conteudo-principal-imagem" src="assets/csharp.png" width="100px" height="100px" />
                        </div>
                    </section>
                </main>
            
                <footer className="rodape">
                    <img className="rodape-imagem-calendario" src="assets/calendario.png" alt="Logo da página" />
                    <img className="rodape-imagem-checkList"  src="assets/checkList.png" alt="Logo da página" />
                    <img className="rodape-imagem-cronometro"  src="assets/cronometro.png" alt="Logo da página" />
                    <img className="rodape-imagem-email"  src="assets/email.png" alt="Logo da página" />
                </footer>
            </body>
        </html>
    </div>
  );
}

export default Home