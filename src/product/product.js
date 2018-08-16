import React, {Component} from 'react';
import './product.css';

class Product extends Component {
  render() {
    return(
    <div className="card">
      <img className="card-img-top" alt="product" imgUrl="{this.props.imgUrl}"></img>
      <div className="card-block">
        <h4 className="card-title">{this.props.title}</h4>
        <p className="card-text">Price: {this.props.price}$</p>
        <a href="#" className="btn">Add to wishlist</a>
      </div>
    </div>
    );
  }
}

export default Product;