// Primeira coisa que deve ser feita é a importacao do React
import React, { Component } from "react";

class Forms extends Component{ //A classe Forms esta extendendo atributos do React

    state = {

        name: '',
        sobrenome: '',
        linguagem: 'Java'
    } 
    
    handleSumit = (b) =>{

        b.preventDefault()

        let {name} = this.state
        name = name
        console.log('Nome:', name)

        let {sobrenome} = this.state
        sobrenome = sobrenome

        console.log('Sobrenome:', sobrenome)
    }

    handleInputChange(property) {

        return x => {
          this.setState({
            [property]: x.target.value
          });
        };
      }

    changeSelect = (event)=>{
        this.setState({linguagem: event.target.value})
    }

    render(){

        return(
            <section>
                <form onSubmit={this.handleSumit}>
                    <label>
                        nome: {''}
                        <input onChange={this.handleInputChange('name')} type='text' placeholder='Nome'/>
                    </label>
                    <label>
                    {''} {''} {''}
                        sobrenome: {''}
                        <input onChange={this.handleInputChange('sobrenome')} type='text' placeholder='Sobrenome'/>
                    </label>
                    <br />
                    <br />
                    <label>
                        Linguagem Favorita
                        <select value={this.state.linguagem} onChange={this.changeSelect}>
                            <option>Java</option>
                            <option>JavaScript</option>
                            <option>Python</option>
                            <option>C++</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <button type = 'submit'>Enviar</button>
                </form>
            </section>
        )
    }
}

export default Forms