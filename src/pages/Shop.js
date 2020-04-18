import React, { Component } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import ShopProduct from '../components/ShopProduct';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import ProductItemSm from '../components/ProductItemSm';

class Shop extends Component {
    componentDidMount(){
        this.props.onFetchAllProducts();
    }
    render() {
        var { products } = this.props;
        return (
            <div>
                <Header/>
                <Title/>
                <ShopProduct>
                    { this.showProduct(products) }
                </ShopProduct>
                <Footer/>
            </div>
        );
    }
    showProduct = (products) => {
        var result = null;
        if(products.length > 0){
            result = products.map((product, index) => {
                return <ProductItemSm key={index} product={product} />
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
        onFetchAllProducts : () => {
            dispatch(actions.actFetchAllProductRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop);