import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/system/Box';
import Paper from '@mui/material/Paper';

import styles from './styles.module.css';
import { updatePrice } from '../../store/action/cartAction';
import CartRow from './CartRow';

function CartDialog(props) {
	const dispatch = useDispatch();

	const cart = useSelector((s) => s.cart.cart);
	const total = useSelector((s) => s.cart.total);

	// const addOneAmount = (product) => {
	// 	dispatch(addProductToCart(product, 1));
	// };
	// const minusOneAmount = (product) => {
	// 	dispatch(removeProductFromCart(product, 1));
	// };

	React.useEffect(() => {
		dispatch(updatePrice());
	}, [cart]);

	return (
		<Paper
			className={styles.detailContainer}
			sx={cart && cart.length === 0 ? { boxShadow: 0 } : {}}
		>
			{cart && cart.length !== 0 ? (
				cart.map((item, idx) => {
					const { product } = item;
					return <CartRow item={item} key={`cart_item_${idx}_${product.id}`} />;
				})
			) : (
				<div style={{ textAlign: 'center' }}> Cart is empty </div>
			)}
			{cart && cart.length !== 0 && (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-around',
						minHeight: 40
					}}
				>
					<Box></Box>
					<Box></Box>
					<Box className={styles.total}>Total: &euro; {total}</Box>
				</Box>
			)}
		</Paper>
	);
}

export default CartDialog;
