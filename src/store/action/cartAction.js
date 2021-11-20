import {
	ADD_PRODUCT_TO_CART,
	REMOVE_PRODUCT_FROM_CART,
	SET_PRODUCT_IN_CART,
	UPDATE_PRICE
} from '../types';

export const addProductToCart = (product, amount = 1) => ({
	type: ADD_PRODUCT_TO_CART,
	payload: { product, amount }
});
export const removeProductFromCart = (product, amount = 1) => ({
	type: REMOVE_PRODUCT_FROM_CART,
	payload: { product, amount }
});
export const setProductInCart = (product, amount) => ({
	type: SET_PRODUCT_IN_CART,
	payload: { product, amount }
});
export const updatePrice = () => (dispatch, getState) => {
	const state = getState();
	const cart = state.cart.cart;
	let total = 0;
	if (cart.length > 0) {
		for (let i = 0; i < cart.length; i++) {
			const { product, amount } = cart[i];
			total = parseFloat(total) + parseFloat(product.price) * parseInt(amount);
		}
	}
	dispatch({
		type: UPDATE_PRICE,
		payload: { total: total.toFixed(2) }
	});
};
