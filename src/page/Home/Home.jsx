import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/system/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import {
	getAllCategories,
	getProductsWithLimit
} from '../../store/action/dataAction';
import { addProductToCart } from '../../store/action/cartAction';

import styles from './styles.module.css';
import ProductItem from '../../component/common/ProductItem';
import { Link } from '@mui/material';

function Home(/* props */) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const categories = useSelector((s) => s.data.categories);
	const loading = useSelector((s) => s.data.dataLoading);
	const productsByCategory = useSelector((s) => s.data.productsHomePage);

	useEffect(() => {
		dispatch(getAllCategories());
	}, []);

	useEffect(() => {
		if (
			categories.length > 0 &&
			Object.keys(productsByCategory).length !== categories.length
		) {
			categories.map((cat) => dispatch(getProductsWithLimit(cat)));
		}
		return;
	}, [categories, productsByCategory /* loading */]);

	const openProduct = (c, id) => navigate(`/shopping/${c}/${id}`);

	const addToCart = (product, amount) => {
		dispatch(addProductToCart(product, amount));
	};

	return (
		<Container className={styles.root}>
			{!loading &&
			categories.length > 0 &&
			Object.keys(productsByCategory).length > 0 ? (
				<Paper sx={{ boxShadow: 0 }}>
					{categories.map((c, index) => {
						const products = productsByCategory[c];
						return (
							<Box
								key={`products_in_${c.replaceAll(' ', '')}_${index}`}
								id={`products_in_${c.replaceAll(' ', '')}_${index}`}
								className={styles.products}
							>
								<Typography variant="h6" className={styles.title}>
									{c}
								</Typography>
								<Box className={styles.productHolder}>
									{products && products.length > 0 ? (
										products.map((p, idx) => {
											return (
												<ProductItem
													item={p}
													key={`${idx}_${p.id}_${p.title.replaceAll(' ', '_')}`}
													onClick={() => openProduct(c, p.id)}
													onAddToCart={addToCart}
												/>
											);
										})
									) : (
										<>Loading . . .</>
									)}
								</Box>
								<Link
									href={`/shopping/${c}`}
									color="secondary"
									underline="hover"
								>
									{'View more'}
								</Link>
							</Box>
						);
					})}
				</Paper>
			) : (
				<Paper>Loading</Paper>
			)}
		</Container>
	);
}

export default Home;
