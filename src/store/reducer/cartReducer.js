import {
	ADD_PRODUCT_TO_CART,
	REMOVE_PRODUCT_FROM_CART,
	SET_PRODUCT_IN_CART,
	UPDATE_PRICE
} from '../types';

const initialState = {
	cart: [],
	error: null,
	total: 0
};

function cartReducer(state = initialState, action) {
	const { type, payload } = action;
	const { cart } = state;
	let newCart = cart.slice(0);
	let error = null;

	if (
		[
			ADD_PRODUCT_TO_CART,
			REMOVE_PRODUCT_FROM_CART,
			SET_PRODUCT_IN_CART
		].includes(type) &&
		payload
	) {
		const { product, amount } = payload;

		// -1 if not found
		// or >= 0 if found
		const index = cart.findIndex((p) => p.product.id === product.id);

		if (
			[
				ADD_PRODUCT_TO_CART,
				REMOVE_PRODUCT_FROM_CART,
				SET_PRODUCT_IN_CART
			].includes(type)
		) {
			if (index >= 0) {
				const cartWithoutProd = cart.filter((p) => p.product.id !== product.id);
				const prodInCart = cart[index];

				if (type === ADD_PRODUCT_TO_CART) {
					prodInCart['amount'] =
						parseInt(prodInCart['amount']) + parseInt(amount);

					// insert product back to cart
					cartWithoutProd.splice(index, 0, prodInCart);
					// clone new cart
					newCart = cartWithoutProd.slice(0);

					error = null;
				} else if (type === REMOVE_PRODUCT_FROM_CART) {
					// check if amount to be removed is valid
					const amountLeftInCart =
						parseInt(prodInCart['amount']) - parseInt(amount);
					if (amountLeftInCart > 0) {
						prodInCart['amount'] = amountLeftInCart;
						// const cloneProd = prodInCart;
						// insert product back to cart
						cartWithoutProd.splice(index, 0, prodInCart);
						newCart = cartWithoutProd.slice(0);
					} else {
						// if the amount is 0
						newCart = cartWithoutProd.slice(0);
					}
					error = null;
				} else if (type === SET_PRODUCT_IN_CART) {
					prodInCart['amount'] = parseInt(amount);
					// insert product back to cart
					cartWithoutProd.splice(index, 0, prodInCart);
					// clone new cart
					newCart = cartWithoutProd.slice(0);
				}
			} else {
				// product not in cart
				if (type === ADD_PRODUCT_TO_CART) {
					newCart.push({ product, amount });
				} else {
					error = 'Error occurred when trying to edit your cart!';
				}
			}
		}
	}

	switch (type) {
		case ADD_PRODUCT_TO_CART:
		case REMOVE_PRODUCT_FROM_CART:
		case SET_PRODUCT_IN_CART:
			return {
				...state,
				cart: newCart,
				error
			};
		case UPDATE_PRICE:
			return {
				...state,
				total: payload.total
			};
		default:
			return {
				...state
			};
	}
}

export default cartReducer;
