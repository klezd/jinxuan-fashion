import React from 'react';
import PropTypes from 'prop-types';

import CartDetail from './CartDetail';
import styles from './styles.module.css';

function CartDialog(props) {
	return (
		<div className={styles.root}>
			<CartDetail emptyAction={props.emptyAction} />
		</div>
	);
}

export default CartDialog;

CartDialog.propTypes = {
	emptyAction: PropTypes.func.isRequired
};
