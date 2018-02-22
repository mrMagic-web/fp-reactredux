import React, { Component } from 'react';
import ProductList from '../containers/product-list';
import ProductDetail from '../containers/product-detail';

export default class App extends Component {
   
    render() {
        return (
            <main>
                <ProductDetail />
                <ProductList />
            </main>
        )
    }
}


