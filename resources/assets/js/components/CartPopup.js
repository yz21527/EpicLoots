import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closingCart } from '../actions/allActions';

class CartPopup extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	componentDidUpdate() {
		if (this.props.globalState.popupCartOpen == true) {
			console.log(this.props.globalState.popupCartOpen);
			const CartPopupElement = document.getElementById('cart-popup');
			document.addEventListener('click', event => {
				var clickedInside = CartPopupElement.contains(event.target);
				if (clickedInside) {
					console.log('You clicked inside');
				} else {
					this.props.closingCart();
					console.log('You clicked outside');
				}
			});
		}
	}

	render() {
		return (
			<section
				id="cart-popup"
				className={this.props.globalState.popupCartOpen == true ? 'active' : ''}
			>
				<div className="cart-title">
					<div className="title">My Cart</div>
				</div>
				<div className="cart-items">
					<div className="item-container">
						<div className="item">
							<img src="/img/products/alienware-51m.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>

					<div className="item-container">
						<div className="item">
							<img src="/img/products/alienware-51m.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>

					<div className="item-container">
						<div className="item">
							<img src="/img/products/alienware-51m.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>

					<div className="item-container">
						<div className="item">
							<img src="/img/products/alienware-51m.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>

					<div className="item-container">
						<div className="item">
							<img src="/img/products/alienware-51m.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>

					<div className="item-container">
						<div className="item">
							<img src="/img/products/alienware-51m.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>

					<div className="item-container">
						<div className="item">
							<img src="/img/products/alienware-51m.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
				</div>
				<div className="product-total">
					<div className="inside-container">
						<div className="title">Total</div>
						<div className="number">X11</div>
					</div>
				</div>
				<div className="price-total">
					<div className="inside-container">
						<div className="title">Total</div>
						<div className="number">$3,000</div>
					</div>
				</div>
				<div className="checkout">
					<div className="title">Checkout</div>
					<span className="ti-shopping-cart" />
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return state;
};

export default connect(
	mapStateToProps,
	{ closingCart }
)(CartPopup);
