import React, {Component} from 'react';
import './wishlist.css';

import ProductCondensed from '../product-condensed/product-condensed';

class Wishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {wishlist: []};
    this.createWishlist = this.createWishlist.bind(this);
  }

  createWishlist = () => {
    const list = this.state.wishlist.map((product) => 
      <ProductCondensed product={product} key={product._id}/>
    );

    return (list);
  }

  render() {
    return(
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Wishlist</h4>
          <ul className="list">
            {this.createWishlist()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Wishlist;