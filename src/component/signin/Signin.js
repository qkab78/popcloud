import React, { Component } from 'react'

export default class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = e => {
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <main>
                <div className="home">
                    <h1 className="title">Connexion</h1>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem dolore iusto. Rerum error dolores consequuntur eius? Blanditiis, voluptatem, minima non quasi, accusamus sequi harum fuga dicta optio numquam dolor.
                    </p>
                </div>
                <form onSubmit={this.handleSubmit} className="form">
                    <input onChange={this.handleChange} type="email" name="email" id="email" placeholder="Entrer votre email"/>
                    <input onChange={this.handleChange} type="password" name="password" id="password" placeholder="Entrer votre mot de passe"/>
                    <input type="submit" className="btn btn-submit" value="Inscription"/>
                </form>
            </main>
        )
    }
}
