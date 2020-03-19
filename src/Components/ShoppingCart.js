import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    const { cartItems } = this.props;
    return(
      <div className="alert alert-info">
        {cartItems.length === 0 ? "Cart is Empty" : <div>You have {cartItems.length} items in your Cart</div>}
        {cartItems.length > 0 &&
          <div>
          <ul>
            {cartItems.map(item =>
              <li key={item.id}>
                <b>{item.productName}</b> = {item.price}
                <button
                className="btn btn-danger" onClick={(e)=>this.props.handleRemoveFromCart(e, item)}>
                  X
                </button>

              </li>)}
          </ul>
          {cartItems.reduce((a,b) => {
            return a + b.price})
          }
          </div>
        }
      </div>
    );
  }
}

export default ShoppingCart;
