import React from "react";
import axios from "axios";
import Filter from "./Filter";
import ItemCard from "./ItemCard";

//  React Tutorial: Build an e-commerce site from scratch using React and Redux 33.00 min

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: [],
      filteredItems: []
    };
    this.handleChangeSort = this.handleChangeSort.bind(this);
  }
// fetch call to be replaced with etsy api
  async componentWillMount() {
    await axios.get("https://openapi.etsy.com/v2/listings/active?limit=50&offset=50", {
      params: {
        key: "", //submit key here
        q: {
          // placeholder for query data if needed.
        }
      }
    })
      .then(res => {
        console.log(res);
      })

    // const response = await fetch("https://jsonplaceholder.typicode.com/users")
    // const data = await response.json();
    // this.setState({ storage: data });
    // console.log(this.state.storage);
  }


  handleChangeSort(e) {
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
        state.storage.sort((a, b) => (a.id < b.id ? 1 : -1));
      }
      return {filteredItems: state.storage}
    })
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
                size={this.state.size}
                sort={this.state.sort}
                handleChangeSize={this.handleChangeSize}
                handleChangeSort={this.handleChangeSort}
                count={this.state.filteredItems.length}
              />
              <hr />
              <ItemCard
                storage={this.state.storage}
              />
            </div>
            <div className="cold-md-4">
              `Shopping Cart`
            </div>
          </div>

        </div>

      </React.Fragment>
    );
  }

}

export default Store;
