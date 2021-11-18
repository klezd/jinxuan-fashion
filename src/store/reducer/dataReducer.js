import {
	GET_PRODUCTS_BY_CATEGORY,
	GET_PRODUCT,
	GET_PRODUCTS_BY_CATEGORY_WITH_LIMIT,
	GET_CATEGORIES
} from '../types';

const initialState = {
	dataLoading: false,
	categories: [],
	singleProduct: null,
	products: {},
	productsHomePage: {},
	errorCode: null,
	errorMsg: null
};

function userReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case `${GET_PRODUCT}_PENDING`:
		case `${GET_PRODUCTS_BY_CATEGORY}_PENDING`:
		case `${GET_CATEGORIES}_PENDING`:
		case `${GET_PRODUCTS_BY_CATEGORY_WITH_LIMIT}_PENDING`:
			return {
				...state,
				dataLoading: true,
				error: null,
				errorCode: null,
				errorMsg: null
			};
		case `${GET_PRODUCT}_SUCCESS`:
			return {
				...state,
				dataLoading: false,
				singleProduct: payload.data,
				errorCode: null,
				errorMsg: null
			};
		case `${GET_CATEGORIES}_SUCCESS`:
			return {
				...state,
				dataLoading: false,
				categories: payload.data,
				errorCode: null,
				errorMsg: null
			};
		case `${GET_PRODUCTS_BY_CATEGORY}_SUCCESS`:
			return {
				...state,
				dataLoading: false,
				products: {
					...state.products,
					[payload.category]: payload.data
				},
				errorCode: null,
				errorMsg: null
			};
		case `${GET_PRODUCTS_BY_CATEGORY_WITH_LIMIT}_SUCCESS`:
			return {
				...state,
				dataLoading: false,
				productsHomePage: {
					...state.productsHomePage,
					[payload.category]: payload.data
				},
				errorCode: null,
				errorMsg: null
			};

		case `${GET_PRODUCT}_ERROR`:
		case `${GET_CATEGORIES}_ERROR`:
		case `${GET_PRODUCTS_BY_CATEGORY}_ERROR`:
		case `${GET_PRODUCTS_BY_CATEGORY_WITH_LIMIT}_ERROR`:
			return {
				...state,
				dataLoading: false,
				errorCode: payload.errorCode,
				errorMsg: payload.errorMsg
			};

		default:
			return {
				...state
			};
	}
}

export default userReducer;
