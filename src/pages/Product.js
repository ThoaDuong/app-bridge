import React, { Component } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import Detail from '../components/Detail';
import Related from '../components/Related';
import ProductItem from '../components/ProductItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Product extends Component {
    componentDidMount(){
        this.props.onFetchAllProducts();
    }
    render() {
        var { products, match } = this.props;
        var index = this.findIndex(products, match.params.id);
        return (
            <div>
                <Header/>
                <Title/>
                <Detail product = { products[index] }/>
                <Related>
                    { this.showProduct(products) }
                </Related>
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
    findIndex = (products, id) => {
        var result = -1;
        if(products.length > 0 && id){
            for(var i=0; i<products.length; i++){
                if(products[i].id === id){
                    result = i;
                    break
                }
            }
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
export default connect(mapStateToProps, mapDispatchToProps) (Product);