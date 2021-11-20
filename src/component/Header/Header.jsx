import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/system/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import CartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

import MenuList from '../common/MenuList';
import Dialog from '../common/Dialog';
import Auth from '../AuthBox/Auth';
import CartDialog from '../../page/Cart/CartDialog';

import { getUser } from '../../store/action/userAction';
import styles from './styles.module.css';

function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [auth, setAuth] = useState(false);
	const [cart, setCart] = useState(false);
	const [drawer, setDrawer] = useState(false);

	React.useEffect(() => {
		dispatch(getUser());
	}, []);

	React.useEffect(() => {}, []);

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

	const toggleDrawer = (open) => {
		setDrawer(open);
	};

	const payment = () => {
		closeCart();
	};

	return (
		<React.Fragment>
			<AppBar>
				<Toolbar className={styles.appbar}>
					<Box
						component="button"
						sx={{
							display: { xs: 'flex', md: 'none' },
							border: 'none',
							background: 'none',
							alignItems: 'center',
							justifyContent: 'space-between'
						}}
						onClick={() => toggleDrawer(true)}
					>
						<MenuIcon sx={{ color: 'white' }} fontSize="large" />
						&nbsp;
						<Typography
							variant="h6"
							component="div"
							sx={{ fontWeight: 'bold' }}
						>
							JinXuan
						</Typography>
					</Box>
					<Box
						component="div"
						sx={{ display: { xs: 'none', md: 'flex' } }}
						className={styles.headerMenu}
					>
						<div onClick={() => navigate('/')}>
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
						</div>
						<MenuList
							direction="row"
							showPageTitle={false}
							showIcon={false}
							toggleDrawer={toggleDrawer}
						/>
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

			<Dialog open={auth} handleClose={handleClose} label="Auth-dialog">
				<Auth />
			</Dialog>
			<Dialog
				open={cart}
				handleClose={closeCart}
				label="Cart-dialog"
				title="Cart"
				footerAction={
					<React.Fragment>
						<Button
							variant="contained"
							onClick={() => payment()}
							sx={{ margin: 2, marginTop: 0 }}
						>
							Proceed To Pay
						</Button>
						<Button
							variant="contained"
							onClick={() => closeCart()}
							sx={{ margin: 2, marginTop: 0 }}
						>
							Close
						</Button>
					</React.Fragment>
				}
			>
				<CartDialog />
			</Dialog>

			<Drawer anchor="left" open={drawer} onClose={() => toggleDrawer(false)}>
				<MenuList
					direction="column"
					showPageTitle
					showIcon
					toggleDrawer={toggleDrawer}
				/>
			</Drawer>
		</React.Fragment>
	);
}

export default Header;
