import React, {Component} from 'react';
import './product-condensed.css';
import DataService from '../services/data-service';

let ds = new DataService();

class ProductCondensed extends Component {

  constructor(props) {
    super(props);

    this.removeProduct = this.removeProduct.bind(this);
  }
 
  removeProduct = () => {
    ds.removeWishlistItem(this.props.product);
  }

  render() {
    return(
      <li className="listgroup-item">
        <a className="btn-danger" onClick={() => this.removeProduct()}>X</a>
        <p>{this.props.product.title} | {this.props.product.title}</p>
      </li>
    );
  }
}

export default ProductCondensed;