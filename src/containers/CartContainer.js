import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartResult from './../components/CartResult';
import CartItem from './../components/CartItem';
import * as Message from './../constants/Message';
import { actDeleteProductInCart,actChangeMessage, actUpdateQuantityProductIncart } from './../actions/index';


class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showSubTotal(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        var { onDeleteProductInCart,onChangeMessage,onUpdateQuantityProductIncart } = this.props;
        var result = <tr>
            <td>
                {Message.MSG_CART_EMPTY}
            </td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={ index }
                        onDeleteProductInCart = { onDeleteProductInCart }
                        onChangeMessage = {onChangeMessage}
                        onUpdateQuantityProductIncart = {onUpdateQuantityProductIncart}
                    />
                )
            });
        }
        return result;
    }


    showSubTotal = (cart) => {
        var result = null;
        if(cart.length > 0) {
            result = <CartResult cart = { cart } />
        }
        return result;
    }

}


CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
    onUpdateQuantityProductIncart : PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onDeleteProductInCart : (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message))
        },
        onUpdateQuantityProductIncart : (product, quantity) => {
            dispatch(actUpdateQuantityProductIncart(product,quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
