import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Header from '../../component/Header';
import HideOnScroll from '../../component/Header/HideOnScroll';
import ScrollTo from '../../component/Header/ScrollTo';

import Home from '../Home';
import Products from '../ProductsByCategory';
import Product from '../Product';
import Cart from '../Cart';

import { getUser } from '../../store/action/userAction';

import styles from './styles.module.css';

function Main(props) {
	const dispatch = useDispatch();

	return (
		<div className={styles.root}>
			<HideOnScroll>
				<Header />
			</HideOnScroll>
			<Toolbar id="back-to-top-anchor" />

			<Container>
				<Routes>
					<Route path="//*" element={<Home />}></Route>
					<Route path="/home/*" element={<Home />}></Route>
					<Route path="/shopping/:category/*" element={<Products />}></Route>
					<Route
						path="/shopping/:category/:prodId"
						element={<Product />}
					></Route>
					<Route path="/cart" element={<Cart />}></Route>
				</Routes>
			</Container>

			<ScrollTo {...props} idTo="back-to-top-anchor">
				<Fab color="primary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTo>
		</div>
	);
}

export default Main;
