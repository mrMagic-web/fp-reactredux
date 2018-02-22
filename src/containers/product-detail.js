import React, {Component} from 'react';
import { connect } from 'react-redux';
//import { selectProduct } from '../actions/index';
//import { bindActionCreators } from 'redux';

const catSelected = 'foodtruck';

class ProductDetail extends Component {
    render() {
        if(!this.props.product){
            return (
                <div>
                    <h3>Please select products that best fit your business</h3>
                    <div>&nbsp;</div>
                </div>
            )
        };
        return (
            <div>
               
                <h3>Details:</h3>
                <div>{this.props.product.id}</div> 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        product: state.activeProduct,
        categories: state.categories
    }
}

export default connect(mapStateToProps)(ProductDetail);