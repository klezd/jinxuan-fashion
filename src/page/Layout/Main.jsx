import React from 'react';
import { Outlet } from 'react-router-dom';

import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Header from '../../component/Header/Header';
import ScrollTo from '../../component/Header/ScrollTo';

import styles from './styles.module.css';

function Main(props) {
	return (
		<div className={styles.root}>
			<Header />

			<Toolbar id="back-to-top" />

			<Paper sx={{ boxShadow: 0, padding: 2 }}>
				<Outlet />
			</Paper>

			<ScrollTo {...props} idTo="back-to-top">
				<Fab color="primary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTo>
		</div>
	);
}

export default Main;
