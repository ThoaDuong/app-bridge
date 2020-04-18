import React, { Component } from 'react';
import Header from './../components/Header';
import Slider from './../components/Slider';
import Category from './../components/Category';
import Gallery from './../components/Gallery';
import Subscribe from './../components/Subscribe';
import LastestProduct from './../components/LastestProduct';
import Footer from './../components/Footer';
import { connect } from 'react-redux';
import ProductItem from '../components/ProductItem';
import * as actions from './../actions/index';

class Home extends Component {

    componentDidMount(){
        this.props.onFetchAllProduct();
    }

    render() {
        var { products } = this.props;
        return (
            <div>
                <Header/>
                <Slider/>
                <Category/>
                <Gallery/>
                <Subscribe/>
                <LastestProduct>
                    { this.showProduct(products) }
                </LastestProduct>
                <Footer/>
            </div>
        );
    }
    showProduct = (products) => {
        var result = null;
        if(products.length > 0){
            result = products.map((product, index) => {
                if(index < 4){
                    return <ProductItem key={index} product={product} />
                }
                else{
                    return result;
                }
            })
        }
        return result;
    }
}
const mapStateToProps = (state) => {
    return{
        products : state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        onFetchAllProduct : () => {
            dispatch(actions.actFetchAllProductRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);