import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectProduct, overProduct} from '../actions/index';
import { bindActionCreators } from 'redux';

const language = 'en';
const catSelected = 'restaurant';

class ProductList extends Component {
    

    renderList() {
        let category = this.props.categories.filter((cat) => cat.id === catSelected)
                                            .map((prod) => prod.productList);

        return this.props.products.map((product) => {
            return (
                <div 
                    key={product.id}
                    onClick={() => this.props.selectProduct(product)} 
                    className="product-single">
                    <h4>{product.name[language]}</h4>
                    <img className="product-image" src={"http://fastpack.dk/wp-content/uploads/products/thumbs/" + product.id + ".jpg" }/>
                </div>
            )
        })
        
    }
    
    render() {
        
        return (
            <section className="row product-list">
                {this.renderList()}
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
      products: state.products,  // will show as props in ProductList
      categories: state.categories
    }
}

function mapDispatchToProps(dispatch) { //anything returned by this function will end up as props on BookList container
    //when selectProduct is called the result will be passed to all of our reducers
    return bindActionCreators( {selectProduct, overProduct}, dispatch); // bindActionCreators function gets first object and dispatches it to reducers
}
// Promote ProductList from component to a container, it needs to know about new dispatch method, selectProduct. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);