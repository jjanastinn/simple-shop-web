import React, {Component} from 'react';
import './product-condensed.css';

class ProductCondensed extends Component {
  render() {
    return(
      <li className="listgroup-item">
        <a className="btn-danger">X</a>
        <p>{this.props.product.title} | {this.props.product.title}</p>
      </li>
    );
  }
}

export default ProductCondensed;