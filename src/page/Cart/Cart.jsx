import React from 'react';
import { useNavigate } from 'react-router';

import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CartDetail from './CartDetail';

import styles from './styles.module.css';

function Cart() {
	const navigate = useNavigate();
	const payment = () => {
		alert('To be updated');
	};

	const openHome = () => {
		navigate('/');
	};

	return (
		<div className={styles.root}>
			<Typography variant="h4" sx={{ fontWeight: 800 }}>
				Your Shopping Cart
			</Typography>
			<div style={{ margin: 24 }}></div>
			<CartDetail emptyAction={openHome} />
			<Box className={styles.actions}>
				<Button
					variant="contained"
					onClick={() => payment()}
					sx={{ margin: 2, marginTop: 0 }}
				>
					Proceed To Pay
				</Button>
				<Button
					variant="contained"
					onClick={() => openHome()}
					sx={{ margin: 2, marginTop: 0 }}
				>
					Continue Shopping
				</Button>
			</Box>
		</div>
	);
}

export default Cart;
