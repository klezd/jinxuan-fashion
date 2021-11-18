import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Header from '../../component/Header/Header';
import HideOnScroll from '../../component/Header/HideOnScroll';
import ScrollTo from '../../component/Header/ScrollTo';

import styles from './styles.module.css';

function Main(props) {
	const dispatch = useDispatch();

	return (
		<div className={styles.root}>
			{/* <HideOnScroll>
			</HideOnScroll> */}
			<Header />

			<Toolbar id="back-to-top-anchor" />

			<Container>
				<Outlet />
			</Container>

			{/* <ScrollTo {...props} idTo="back-to-top-anchor">
				<Fab color="primary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTo> */}
		</div>
	);
}

export default Main;
