import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CartPopup extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<section id="cart-popup" className="active">
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

const CartPopupRoot = document.getElementById('CartPopupRoot');

ReactDOM.render(<CartPopup />, CartPopupRoot);
