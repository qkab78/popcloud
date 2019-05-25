import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../redux/actions/user-actions';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname:"",
            lastname:"",
            email:"",
            client_name:"",
            password:"",
            confirmPassword:"",
            credit_card:{}
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
        this.props.registerUser(this.state, this.props.history)
    }
    componentDidMount() {
        console.log(this.props)
    }
    
    render() {
        return (
            <main>
                <div className="home">
                    <h1 className="title">Inscription</h1>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem dolore iusto. Rerum error dolores consequuntur eius? Blanditiis, voluptatem, minima non quasi, accusamus sequi harum fuga dicta optio numquam dolor.
                    </p>
                </div>
                <form onSubmit={this.handleSubmit} className="form">
                    <input onChange={this.handleChange} type="text" name="firstname" id="firstname" placeholder="Entrer votre prénom"/>
                    <input onChange={this.handleChange} type="text" name="lastname" id="lastname" placeholder="Entrer votre nom de famille"/>
                    <input onChange={this.handleChange} type="email" name="email" id="email" placeholder="Entrer votre email"/>
                    <input onChange={this.handleChange} type="text" name="client_name" id="client_name" placeholder="Entrer le nom de votre entreprise"/>
                    <input onChange={this.handleChange} type="password" name="password" id="password" placeholder="Entrer votre mot de passe"/>
                    <input onChange={this.handleChange} type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmer votre mot de passe"/>
                    <input type="submit" className="btn btn-submit" value="Inscription"/>
                </form>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(mapStateToProps, {registerUser})(withRouter(Signup))