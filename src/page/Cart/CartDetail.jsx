import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/system/Box';
import Paper from '@mui/material/Paper';

import styles from './styles.module.css';
import { updatePrice } from '../../store/action/cartAction';
import CartRow from './CartRow';

function CartDetail(props) {
	const dispatch = useDispatch();

	const cart = useSelector((s) => s.cart.cart);
	const total = useSelector((s) => s.cart.total);

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
				<div style={{ textAlign: 'center' }}>
					Cart is empty. Click{' '}
					<span onClick={props.emptyAction} className={styles.link}>
						here to continue shopping!
					</span>
				</div>
			)}
			{cart && cart.length !== 0 && (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						minHeight: 40,
						paddingRight: 6,
						alignItems: 'center'
					}}
				>
					<Box className={styles.total}>
						Total: &euro; <b>{total} </b>
					</Box>
				</Box>
			)}
		</Paper>
	);
}

export default CartDetail;

CartDetail.propTypes = {
	emptyAction: PropTypes.func
};

CartDetail.defaultProps = {
	emptyAction: () => {}
};
