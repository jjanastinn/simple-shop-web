import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// components
import Product from '../product/product';
import Wishlist from '../wishlist/wishlist';

// services
import HttpService from '../services/http-service';
const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {products: []};
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);
    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts().then(data => {
      self.setState({products: data})
    })
  }

  productList = () => {
    const list = this.state.products.map((product) => 
      <div className="list" key={product._id}>
        <Product product={product}/>
      </div>
    );
    return (list);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-main">
          {this.productList()}
          <Wishlist />
        </div>
      </div>
    );
  }
}

export default App;
