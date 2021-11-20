import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/system/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import ProductItem from '../../component/common/ProductItem';
import { getProductsByCategory } from '../../store/action/dataAction';
import styles from './styles.module.css';

function Products(props) {
	const navigate = useNavigate();
	const params = useParams();
	const dispatch = useDispatch();

	const category = params.category;

	const products = useSelector((s) => s.data.products[category]);
	const loading = useSelector((s) => s.data.dataLoading);

	React.useEffect(() => {
		dispatch(getProductsByCategory(category));
	}, [category]);

	const openProduct = (id) => navigate(`/shopping/${category}/${id}`);

	return (
		<Paper className={styles.root}>
			<Container>
				<Typography variant="h4" className={styles.pageTitle}>
					{category}
				</Typography>
				{products && products.length !== 0 ? (
					<Box className={styles.productsHolder}>
						{products.map((p, idx) => {
							return (
								<ProductItem
									item={p}
									key={`${idx}_${p.id}_${p.title.replaceAll(' ', '_')}`}
									onClick={() => openProduct(p.id)}
								/>
							);
						})}
					</Box>
				) : loading ? (
					<> Loading . . . </>
				) : (
					<> There are no items currently available ! </>
				)}
			</Container>
		</Paper>
	);
}

export default Products;
