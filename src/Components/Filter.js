import React from "react";

class Filter extends React.Component {
  render() {
    return(
      <div className="row">

        <div className="col-md-4">
          {this.props.count} Products Found.
        </div>

        <div className="col-md-4">
          <label>
            Order By:
            <select
              className="form-control"
              value={this.props.sort} onChange={this.props.handleChangeSort}
            >
              <option value="">Select</option>
              <option value="lowest">Lowest to Highest</option>
              <option value="highest">Highest to Lowest</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

export default Filter;
