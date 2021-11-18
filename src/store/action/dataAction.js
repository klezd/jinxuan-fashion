import {
	GET_PRODUCTS_BY_CATEGORY,
	GET_PRODUCT,
	GET_PRODUCTS_BY_CATEGORY_WITH_LIMIT,
	GET_CATEGORIES
} from '../types';

export const getFromAPI =
	(url, type, extra = {}) =>
	async (dispatch) => {
		dispatch({
			type: type + '_PENDING'
		});
		try {
			const res = await fetch(url);

			if (res.ok) {
				const json = await res.json();
				console.log(json);
				return dispatch({
					type: `${type}_SUCCESS`,
					payload: {
						...extra,
						data: json
					}
				});
			} else {
				const error = new Error('Error fetching from API');
				error.code = 404;
				console.log(error);
				throw error;
			}
		} catch (e) {
			return dispatch({
				type: `${type}_ERROR`,
				payload: {
					errorCode: e.code,
					errorMsg: e.message
				}
			});
		}
	};

export const getProductsByCategory = (category) => async (dispatch) => {
	const url = 'https://fakestoreapi.com/products/category/' + category;
	dispatch(getFromAPI(url, GET_PRODUCTS_BY_CATEGORY, { category }));
};

export const getProduct = (id) => (dispatch) => {
	const url = 'https://fakestoreapi.com/products/' + id;
	dispatch(getFromAPI(url, GET_PRODUCT));
};

export const getProductsWithLimit = (category) => (dispatch) => {
	console.count('getProductsWithLimit');
	const url = `https://fakestoreapi.com/products/category/${category}?limit=2`;
	dispatch(getFromAPI(url, GET_PRODUCTS_BY_CATEGORY_WITH_LIMIT, { category }));
};

export const getAllCategories = () => (dispatch) => {
	const url = 'https://fakestoreapi.com/products/categories';
	dispatch(getFromAPI(url, GET_CATEGORIES));
};
