import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import StarIcon from '@mui/icons-material/Star';
import { getProduct } from '../../store/action/dataAction';
import styles from './styles.module.css';

function Product(props) {
	const navigate = useNavigate();
	const params = useParams();
	const dispatch = useDispatch();

	const pid = params.prodId;

	const product = useSelector((s) => s.data.singleProduct);
	const loading = useSelector((s) => s.data.dataLoading);

	React.useEffect(() => {
		dispatch(getProduct(pid));
	}, [pid]);

	if (!(product && Object.keys(product).length !== 0)) {
		if (loading) {
			return <> Loading . . . </>;
		}
		return (
			<Paper className={styles.root}>
				The item is not currently available !{' '}
			</Paper>
		);
	}

	const { title, image, category, description, rating } = product;

	const descriptionContent = description.split('/').map((c, i) => <p key={'content_' + i}>{c}</p>)

	return (
		<Paper className={styles.root}>
			<Box className={styles.productHolder}>
				<Box className={styles.image}>
					<img src={image} />
				</Box>
				
				<Box className={styles.prodDetail}>
				<Typography variant="h5">{title}</Typography>
				<Box className={styles.description}>{descriptionContent}</Box>
				<Box className={styles.rating}>
					<Box>Category: {category}</Box>
					<Box className={styles.ratingBox}>
						<span>Rate: {rating.rate} <StarIcon color="yellow" /></span>
						<span>{'(over '} <b>{rating.count}</b> {' reviewers)'}</span>
					</Box>
				</Box>
				</Box>
			</Box>
			<Box className={styles.productAction}>
				
			</Box>
		</Paper>
	);
}

export default Product;
