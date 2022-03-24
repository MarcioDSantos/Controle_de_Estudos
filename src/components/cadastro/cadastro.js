import { useState } from 'react';
import Prog from '../assets/programming.png'
import './cadastro.css'

function Cadastro(){
    const [nome, setNome] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <div className="firstContent"> 
                            <span className="login-form-title">
                                Venha ser um Dev!
                            </span>
                            <span className="login-form-title">
                                <img src={Prog} alt="Programador"></img>
                            </span>
                        </div>

                        <div className="secondContent">
                            <span className="login-options">
                                Crie uma conta:
                            </span>
                            <span className="login-With-email">
                                ou utilize seu e-mail para registro:
                            </span>
                            <div className='wrap_input'>
                            <input className={nome !== "" ? 'has-val input' : 'input'} 
                                    type="Nome" 
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                            />
                            <span className='focus-input' data-placeholder='Nome'></span>
                            </div>
                        

                            <div className='wrap_input'>
                            <input className={password !== "" ? 'has-val input' : 'input'}  
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                            />
                            <span className='focus-input' data-placeholder='PassWord'></span>
                            </div>
                                
                            <div className='container-login-form-btn'>
                                <button className='login-form-btn'>Login</button>
                            </div>
                        

                            <div className='text-center'>
                                <span className='txt1'>Esqueceu a sua senha?</span>

                                <a className='txt2' href='#'>Recurperar senha</a>
                            </div>
                        </div>

                    </form>
                </div>
            </div> 
        </div> 
    )
}

export default Cadastro;