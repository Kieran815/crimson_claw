import React from "react";
// import axios from "axios";
import Filter from "./Filter";
import ItemCard from "./ItemCard";
import ShoppingCart from "./ShoppingCart";

//  React Tutorial: Build an e-commerce site from scratch using React and Redux 51.00 min

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: [],
      filteredItems: [],
      cartItems: []
    };
  }
// fetch call to be replaced with etsy api
  // async componentWillMount() {
  //   await axios.get("https://openapi.etsy.com/v2/listings/active?limit=50&offset=50", {
  //     params: {
  //       key: "", //submit key here
  //       q: {
  //         // placeholder for query data if needed.
  //       }
  //     }
  //   })
  //     .then(res => {
  //       console.log(res);
  //     })


  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    this.setState({ storage: data, filteredItems: data });

    if(localStorage.getItem("cartItems")) {
      this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems'))})
    }
  }


  handleChangeSort = (e) => {
    this.setState({ sort: e.target.value });
    this.listItems();
  }

  listItems(){
    this.setState(state => {
      if(state.sort !== '') {
        state.storage.sort((a, b) => (state.sort==="lowest") ?
        (a.price < b.price ? 1 : -1)
        :
        (a.price > b.price ? 1 : -1))
      } else {
        state.storage.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      return {filteredItems: state.storage}
    })
  }

  addToCart = (event, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(item => {
        if(item.id === product.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if(!productAlreadyInCart) {
        cartItems.push({...product, count:1});
      }
      localStorage.setItem("cartItem", JSON.stringify(cartItems));
      return cartItems;
    })
  }

  handleRemoveFromCart = (e, item) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(element => element.id !== item.id);
      localStorage.setItem('cartItem', cartItems);
      return {cartItems}
    });
  }



  render() {
    return(
      <React.Fragment>
        <div className="container">
          <h2>Store</h2>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <Filter
                sort={this.state.sort}
                handleChangeSort={this.handleChangeSort}
                count={this.state.filteredItems.length}
              />
              <hr />
              <ItemCard
                storage={this.state.storage}
                addToCart={this.addToCart}
              />
            </div>
            <div className="cold-md-4">
              <ShoppingCart
                cartItems={this.state.cartItems}
                handleRemoveFromCart={this.handleRemoveFromCart}
              />
            </div>
          </div>

        </div>

      </React.Fragment>
    );
  }

}

export default Store;
