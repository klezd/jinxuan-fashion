import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/system/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import CartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

import { getUser } from '../../store/action/userAction';
import Auth from '../AuthBox/Auth';
import styles from './styles.module.css';
import MenuList from '../common/MenuList';

function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [auth, setAuth] = useState(false);
	const [cart, setCart] = useState(false);
	const [drawer, setDrawer] = useState(false);

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	React.useEffect(() => {
		dispatch(getUser());
	}, []);

	React.useEffect(() => {}, []);

	const openLink = (category) => {
		navigate(`/shopping/${category}`);
	};

	const openProd = (category, prodId) => {
		navigate(`/shopping/${category}/${prodId}`);
	};

	const openCart = () => {
		setCart(true);
	};

	const closeCart = () => {
		setCart(false);
	};

	const openAuth = () => {
		setAuth(true);
	};

	const handleClose = () => {
		setAuth(false);
	};

	const toggleDrawer = () => {
		setDrawer(!drawer);
	};

	return (
		<React.Fragment>
			<AppBar>
				<Toolbar className={styles.appbar}>
					<Box
						component="button"
						sx={{
							display: { xs: 'block', md: 'none' },
							border: 'none',
							background: 'none'
						}}
						onClick={toggleDrawer}
					>
						<MenuIcon sx={{ color: 'white' }} fontSize="large" />
					</Box>
					<Box
						component="div"
						sx={{ display: { xs: 'none', md: 'flex' } }}
						className={styles.headerMenu}
					>
						<span>
							<img src="/Logo2.png" className={styles.logo} />
						</span>
						<Typography
							variant="h6"
							component="div"
							sx={{ fontWeight: 'bold' }}
						>
							JinXuan
						</Typography>
						<MenuList direction="row" linkTo={openLink} />
					</Box>

					<div className={styles.appBtn}>
						<div onClick={openCart}>
							<CartIcon />
						</div>
						<div onClick={openAuth}>
							<PersonIcon />
						</div>
					</div>
				</Toolbar>
			</AppBar>

			<Dialog
				fullScreen={fullScreen}
				maxWidth="sm"
				fullWidth
				open={auth}
				onClose={handleClose}
				aria-labelledby="auth-form"
			>
				<DialogActions>
					<IconButton aria-label="close" onClick={handleClose}>
						<CloseIcon />
					</IconButton>
				</DialogActions>
				<DialogContent>
					<Auth />
				</DialogContent>
			</Dialog>

			<Drawer anchor="left" open={drawer} onClose={toggleDrawer}>
				<MenuList direction="column" showPageTitle showIcon linkTo={openLink} />
			</Drawer>
		</React.Fragment>
	);
}

export default Header;
