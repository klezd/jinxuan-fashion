import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';

import AddToCartBtn from './AddToCartBtn';
import styles from './styles.module.css';

export default function ProductItem(props) {
	const { item, onClick, onAddToCart } = props;
	const { id, image, title, price } = item;

	const addToCart = (amount) => {
		onAddToCart({ id, image, title, price }, amount);
	};

	return (
		<Box className={styles.productItem}>
			<div className={styles.hover}>
				<Button
					className={styles.addCartBtn}
					fullWidth
					variant="contained"
					color="dark"
					onClick={onClick}
				>
					Open Item
				</Button>
				<AddToCartBtn onAddToCart={addToCart} />
			</div>
			<div className={styles.image}>
				<img src={image}></img>
			</div>
			<div className={styles.titleHolder}>
				<div className={styles.title}>{title}</div>
				<div className={styles.price}> &euro; {price}</div>
			</div>
		</Box>
	);
}

ProductItem.propTypes = {
	item: PropTypes.object.isRequired,
	onClick: PropTypes.func,
	onAddToCart: PropTypes.func
};

ProductItem.defaultProps = {
	onClick: () => {},
	onAddToCart: () => {}
};
