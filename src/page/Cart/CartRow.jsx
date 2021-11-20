import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/system/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styles from './styles.module.css';
import {
	addProductToCart,
	removeProductFromCart,
	setProductInCart,
	updatePrice
} from '../../store/action/cartAction';

function CartRow(props) {
	const dispatch = useDispatch();

	const { item } = props;
	if (!item) {
		return <> </>;
	}

	const { product, amount } = item;
	const { id, title, price, image } = product;

	const [prodAmount, setAmount] = useState(amount);

	const addOneAmount = () => {
		setAmount(prodAmount + 1);
		dispatch(addProductToCart(product, 1));
		// dispatch(updatePrice());
	};
	const minusOneAmount = () => {
		setAmount(prodAmount - 1);
		dispatch(removeProductFromCart(product, 1));
	};
	const setProduct = () => {
		dispatch(setProductInCart(product, prodAmount));
	};
	const removeFromCart = () => {
		setAmount(0);
		dispatch(removeProductFromCart(product, prodAmount));
	};

	return (
		<Box key={`cart_item_${id}`} className={styles.itemRow}>
			<Box className={styles.imageHolder}>
				<img src={image}></img>
			</Box>
			<Box className={styles.prodDetail}>
				<Box className={styles.title}>{title}</Box>
				<Box className={styles.price}>&euro; {price} </Box>
			</Box>
			<Box className={styles.form}>
				<div className={styles.amountAdjust}>
					<IconButton
						color="success"
						sx={{ padding: 0 }}
						onClick={addOneAmount}
					>
						<AddIcon />
					</IconButton>
					<InputBase
						type="number"
						value={prodAmount}
						onChange={(e) => setAmount(e.target.value)}
						onBlur={setProduct}
						className={styles.input}
					/>
					<IconButton color="info" sx={{ padding: 0 }} onClick={minusOneAmount}>
						<RemoveIcon />
					</IconButton>
				</div>
				<div>
					<IconButton color="dark" sx={{ padding: 0 }} onClick={removeFromCart}>
						<DeleteIcon />
					</IconButton>
				</div>
			</Box>
		</Box>
	);
}

export default CartRow;

CartRow.propTypes = {
	item: PropTypes.object.isRequired
};
