import { useState } from 'react';
import Prog from '../assets/programming.png'
import './login.css'

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title">
                            Bem Vindo!
                        </span>
                        <span className="login-form-title">
                            <img src={Prog} alt="Programador"></img>
                        </span>

                        <div className='wrap_input'>
                           <input className={email !== "" ? 'has-val input' : 'input'} 
                                type="email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                           />
                           <span className='focus-input' data-placeholder='E-mail'></span>
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

                    </form>
                </div>
            </div> 
        </div> 
    )
}

export default Login;