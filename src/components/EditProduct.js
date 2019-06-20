import React, { Component } from "react";

import { connect } from "react-redux";
import { showProduct, editProduct } from "../actions/productsActions";

class EditProduct extends Component {
  state = {
    name: "",
    price: "",
    error: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.showProduct(id);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { name, price } = nextProps.product;
    this.setState({
      name,
      price
    });
  }

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

  editProduct = e => {
    e.preventDefault();
    const { name, price } = this.state;
    if (name === "" || price === "") {
      this.setState({
        error: true
      });
      return;
    }

    this.setState({ error: false });

    const { id } = this.props.match.params;

    const product = {
      name,
      price,
      id
    };

    this.props.editProduct(product);

    this.props.history.push("/");
  };

  render() {
    const { error, name, price } = this.state;
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center"> Edit Product </h2>
              <form onSubmit={this.editProduct}>
                <div className="form-group">
                  <label> Title </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Titulo"
                    onChange={this.nameProduct}
                    defaultValue={name}
                  />
                </div>
                <div className="form-group">
                  <label> Price </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Precio"
                    onChange={this.priceProduct}
                    defaultValue={price}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Edit
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

const mapStateToProps = state => ({
  product: state.products.product
});

export default connect(
  mapStateToProps,
  { showProduct, editProduct }
)(EditProduct);
