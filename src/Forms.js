// Primeira coisa que deve ser feita é a importacao do React
import React, { Component } from "react";

class Forms extends Component{ //A classe Forms esta extendendo atributos do React

    state = {

        name: '',
        sobrenome: '',
        email: '',
        tipo: 'backend',
        linguagem: 'HTML',
        profissao: 'Estudante',
        bio:''
    } 
    
    handleSumit = (b) =>{

        b.preventDefault()

        let {name} = this.state
        name = name

        let {sobrenome} = this.state
        sobrenome = sobrenome

        let {email} = this.state
                email = email

    }

    handleInputChange(property) {

        return x => {
          this.setState({
            [property]: x.target.value
          });
        };
      }

    changeSelect = (event)=>{
        this.setState({profissao: event.target.value})
    }

    changeRadio=(event)=>{
        this.setState({tipo: event.target.value})
    }

    changeCheckBox=(event)=>{
            this.setState({linguagem: event.target.checked})
        }

    changeBio=(event)=>{
                this.setState({bio: event.target.value})
            }

    render(){

        return(
            <section>
                <form onSubmit={this.handleSumit}>
                    <label>
                        Nome: <b/>
                        <input onChange={this.handleInputChange('name')} type='text' placeholder='Nome'/>
                    </label>

                    <label>
                    <b/> <b/>
                        Sobrenome: <b/>
                        <input onChange={this.handleInputChange('sobrenome')} type='text' placeholder='Sobrenome'/>
                    </label>
                     <br/><br/>

                    <label>
                        Email: <b/>
                        <input onChange={this.handleInputChange('email')} type='text' placeholder='Email'/>
                    </label>
                     <br/><br/>

                    <label>
                        Em qual area você deseja se aprofundar ?
                        <br/>
                        <input type='radio' checked={this.state.tipo=="backend"} onChange={this.changeRadio} value='backend' /> Back-end
                        <input type='radio' checked={this.state.tipo=="frontend"} onChange={this.changeRadio} value='frontend' /> Front-end
                        <input type='radio' checked={this.state.tipo=="fullstack"} onChange={this.changeRadio} value='fullstack' /> Fullstack
                    </label>
                    <br/><br/>

                    <label>
                        Selecione as tecnologias que deseja estudar:
                        <br/>
                        <input type='checkbox' checked={this.state.tipo.linguagem} onChange={this.changeCheckBox} /> HTML
                        <input type='checkbox' checked={this.state.tipo.linguagem} onChange={this.changeCheckBox} /> CSS
                        <input type='checkbox' checked={this.state.tipo.linguagem} onChange={this.changeCheckBox} /> JavaScript
                        <input type='checkbox' checked={this.state.tipo.linguagem} onChange={this.changeCheckBox} /> C#
                        <input type='checkbox' checked={this.state.tipo.linguagem} onChange={this.changeCheckBox} /> Java
                        <input type='checkbox' checked={this.state.tipo.linguagem} onChange={this.changeCheckBox} /> PHP
                        <input type='checkbox' checked={this.state.tipo.linguagem} onChange={this.changeCheckBox} /> Python

                    </label>
                     <br/><br/>

                    <label>
                        Profissão: <b/>
                        <select value={this.state.profissao} onChange={this.changeSelect}>
                            <option>Estudante</option>
                            <option>Junior</option>
                            <option>Pleno</option>
                            <option>Senior</option>
                        </select>
                    </label>
                    <br/><br/>

                    <label>
                        Fala sobre sua experiência na área:
                        <br/>
                        <textarea cols='100' value={this.state.bio} onChange={this.changeBio} />
                    </label>
                       <br/><br/>
                    <button type = 'submit'>Enviar</button>
                     <img class="rodape-imagem-calendario" src="assets/calendario.png" alt="Logo da página" width="100">
                </form>
            </section>
        )
    }
}

export default Forms