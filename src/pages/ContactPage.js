import React, {Component} from 'react';
import {Prompt} from 'react-router-dom';

import '../styles/ContactPage.css';

class ContactPage extends Component{

    state={
        nameValue:"",
        emailValue:"",
        messageValue:"",
        isNameEmpty:true,
        isEmailEmpty:true,
        isMessageEmpty:true,
    }

    handleName = e => {
        if(e.target.value.length > 0){
            this.setState({
                nameValue: e.target.value,
                isNameEmpty: false})
        }else this.setState({
            nameValue: e.target.value,
            isNameEmpty: true})
    }

    handleEmail = e => {
        if(e.target.value.length > 0){
            this.setState({
                emailValue: e.target.value,
                isEmailEmpty: false})
        }else this.setState({
            emailValue: e.target.value,
            isEmailEmpty: true})
    }

    handleMessage = e => {
        if(e.target.value.length > 0){
            this.setState({
                messageValue: e.target.value,
                isMessageEmpty: false})
        }else this.setState({
            messageValue: e.target.value,
            isMessageEmpty: true})
    }

    handleSubmit = e => {
        e.preventDefault();
        if(!this.state.isNameEmpty && !this.state.isEmailEmpty && !this.state.isMessageEmpty){
            this.setState({
            nameValue:"",
            emailValue:"",
            messageValue:"",
            isNameEmpty:true,
            isEmailEmpty:true,
            isMessageEmpty:true,
            });
        alert('Message sent!');
    }
    else alert('Fill the form!');
    }
    

    render(){
    return ( 
        <section className="contact">
            <form className="contact__form">
                <label className="contact__label"> Your name:
                    <input value={this.state.nameValue} onChange={this.handleName} className="contact__input" type="text" placeholder="name..."/>
                </label>
                <label className="contact__label"> Your email:
                    <input value={this.state.emailValue} onChange={this.handleEmail} className="contact__input" type="text" placeholder="email..."/>
                </label>
                <label className="contact__label"> Your message:
                    <textarea value={this.state.messageValue} onChange={this.handleMessage} className="contact__textArea" placeholder="message..."></textarea>
                </label>
                <button onClick={this.handleSubmit} className="contact__button">Send</button>
            </form>
            <Prompt
                when={!this.state.isNameEmpty || !this.state.isEmailEmpty || !this.state.isMessageEmpty}
                message="Are you sure you want to leave the form?"
            />
        </section>
     );
    }
}
 
export default ContactPage;