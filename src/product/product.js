import React, {Component} from 'react';
import './product.css';
import DataService from '../services/data-service';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

let ds = new DataService();
let ns = new NotificationService();

class Product extends Component {

  constructor(props) {
    super(props);

    this.state = {onWishlist: ds.itemOnWishlist()};

    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.onWishlistChanged = this.onWishlistChanged.bind(this);
  }
 
  componentDidMount() {
    ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishlistChanged);
  }

  componentWillUnmount() {
    ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
  } 

  onWishlistChanged(newWishlist) {
    this.setState({onWishlist: ds.itemOnWishlist(this.props.product)});
  }

  onButtonClicked = () => {
    if (this.state.onWishlist) {
      ds.removeWishlistItem(this.props.product);
    } else{
      ds.addWishlistItem(this.props.product);
    }
  }

  render() {
    return(
    <div className="card">
      <img className="card-img-top" alt="product" imgUrl="{this.props.product.imgUrl}"></img>
      <div className="card-block">
        <h4 className="card-title">{this.props.product.title}</h4>
        <p className="card-text">Price: {this.props.product.price}$</p>
        <a href="#" onClick={() => this.onButtonClicked()} className="btn">{this.state.onWishlist ? "Remove from wishlist" : "Add to wishlist"}</a>
      </div>
    </div>
    );
  }
}

export default Product;