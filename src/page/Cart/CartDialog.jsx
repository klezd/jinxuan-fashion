import React from 'react';

import CartDetail from './CartDetail';
import styles from './styles.module.css';

function CartDialog(props) {
	return (
		<div className={styles.root}>
			<CartDetail />
		</div>
	);
}

export default CartDialog;
