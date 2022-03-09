import React, {Component} from 'react';
import './home.css';
import programador from '../assets/programador.png'
import calendario from '../assets/calendario.png'
import checkList from '../assets/checkList.png'
import email from '../assets/email.png'
import cronometro from '../assets/cronometro.png'
import php from '../assets/php.png'
import java from '../assets/java.png'
import javascript from '../assets/javascript.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import css3 from '../assets/css3.png'
import csharp from '../assets/csharp.png'
import html5 from '../assets/html5.png'
import c from '../assets/c.png'

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
                    <img className="cabecalho-imagem" src={programador} alt="Logo da página" />
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
                            <img className="conteudo-principal-imagem" src={java} width="100px" height="100px" />
                            <img className="conteudo-principal-imagem" src={javascript} width="100px" height="100px" />
                            <img className="conteudo-principal-imagem" src={php} width="100px" height="100px" />
                        </div>
            
                        <div className="icones1">
                            <img className="conteudo-principal-imagem" src={python} width="100px" height="100px" />
                            <img className="conteudo-principal-imagem" src={html5} width="100px" height="100px" />
                            <img className="conteudo-principal-imagem" src={css3} width="100px" height="100px" />
                        </div>
                        <div className="icones2">
                            <img className="conteudo-principal-imagem" src={react} width="100px" height="100px" />
                            <img className="conteudo-principal-imagem" src={c} width="100px" height="100px" />
                            <img className="conteudo-principal-imagem" src={csharp} width="100px" height="100px" />
                        </div>
                    </section>
                </main>
            
                <footer className="rodape">
                    <img className="rodape-imagem-calendario" src={calendario} alt="Logo da página" />
                    <img className="rodape-imagem-checkList"  src={checkList} alt="Logo da página" />
                    <img className="rodape-imagem-cronometro"  src={cronometro} alt="Logo da página" />
                    <img className="rodape-imagem-email"  src={email} alt="Logo da página" />
                </footer>
            </body>
        </html>
    </div>
  );
}

export default Home