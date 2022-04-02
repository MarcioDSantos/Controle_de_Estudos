import { useState } from 'react';
import Prog from '../assets/programming.png'
import './cadastro.css'
import { FaBeer } from 'react-icons/fa'
import { render } from '@testing-library/react';
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineGooglePlus} from 'react-icons/ai'

function Cadastro(){
    const [nome, setNome] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirm, setConfirm] = useState("")

    return(
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <div className="firstContent"> 
                            <span className="login-form-title">
                                Venha ser um Dev com a gente!
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
                                ou utilize a rede para registro:
                            </span>
                            <div className="icons">
                                <BsFacebook/>
                                <AiOutlineGooglePlus/>
                            </div>
                            <div className='wrap_input'>
                            <input className={nome !== "" ? 'has-val input' : 'input'} 
                                    type="Nome" 
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                            />
                            <span className='focus-input' data-placeholder='Nome'></span>
                            </div>
                        
                            <div className='wrap_input'>
                            <input className={email !== "" ? 'has-val input' : 'input'} 
                                    type="E-mail" 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                            />
                            <span className='focus-input' data-placeholder='E-mail'></span>
                            </div>

                            <div className='wrap_input'>
                            <input className={password !== "" ? 'has-val input' : 'input'}  
                                    type="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                            />
                            <span className='focus-input' data-placeholder='PassWord'></span>
                            </div>

                            <div className='wrap_input'>
                            <input className={confirm !== "" ? 'has-val input' : 'input'}  
                                    type="Confirma password"
                                    value={confirm}
                                    onChange={e => setConfirm(e.target.value)}
                            />
                            <span className='focus-input' data-placeholder='Confirm password'></span>
                            </div>
                                
                            <div className='container-login-form-btn'>
                                <button className='login-form-btn'>Cadastrar</button>
                            </div>
                        

                            <div className='text-center'>
                                <span className='txt1'>Já é cadastrado?</span>

                                <a className='txt2' href='#'>Faça o Login</a>
                            </div>
                        </div>

                    </form>
                </div>
            </div> 
        </div> 
    )
}

export default Cadastro;