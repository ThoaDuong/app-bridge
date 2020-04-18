import React, { Component } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Blog from '../components/Blog';
import Category from '../components/Category';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Title/>
                <Blog/>
                <Category/>
                <Subscribe/>
                <Footer/>
            </div>
        );
    }
}

export default About;