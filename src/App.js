import React, { Fragment } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/products/new" component={NewProduct} />
              <Route exact path="/products/edit/:id" component={EditProduct} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
