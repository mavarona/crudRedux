import React, { Component } from "react";

import { connect } from "react-redux";
import { addProduct } from "../actions/productsActions";

class NewProduct extends Component {
  state = {
    name: "",
    price: "",
    error: false
  };

  nameProduct = e => {
    this.setState({
      name: e.target.value
    });
  };

  priceProduct = e => {
    this.setState({
      price: parseInt(e.target.value, 10)
    });
  };

  newProduct = e => {
    e.preventDefault();
    const { name, price } = this.state;
    if (name === "" || price === "") {
      this.setState({
        error: true
      });
      return;
    }

    this.setState({
      error: false
    });

    const product = {
      name,
      price
    };

    this.props.addProduct(product);

    this.props.history.push("/");
  };

  render() {
    const { error } = this.state;
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center"> Add New Product </h2>
              <form onSubmit={this.newProduct}>
                <div className="form-group">
                  <label> Title </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Titulo"
                    onChange={this.nameProduct}
                  />
                </div>
                <div className="form-group">
                  <label> Price </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Precio"
                    onChange={this.priceProduct}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Add
                </button>
              </form>
              {error ? (
                <div className="font-weight-bold alert alert-danger text-center mt-4 ">
                  All fields are required
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    addProduct
  }
)(NewProduct);
