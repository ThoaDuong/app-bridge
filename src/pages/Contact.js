import React, { Component } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import Information from '../components/Information';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Title/>
                <Information/>
                <Subscribe/>
                <Footer/>
            </div>
        );
    }
}

export default Contact;