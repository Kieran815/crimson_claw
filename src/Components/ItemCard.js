import React, { Component } from "react";
import faker from "faker";

export default class ItemCard extends Component {
  render() {
    // const storage = this.props.storage;
    let itemImg = faker.image.avatar();

    const setStore = this.props.storage.map(item => (
      <div className="col-md-4" key={item.id}>
        <div className="thumbnail text-center">
          <a href={`#${item.email}`} onClick={(e) => this.props.addToCart(e, item)} >
            <img src={itemImg} alt={item.id} />
            <p>{faker.commerce.productName()}</p>
          </a>
          <div>
            <b>{item.id}</b>
            <button className="btn btn-default" onClick={(e) => this.props.addToCart(e, item)} >Add to Cart</button>
          </div>
        </div>
      </div>
    ));


    return (
      <div className="row">
        {setStore}
      </div>
    )
  }
}
