import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fab, faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {
	fas,
	faGem,
	faFemale,
	faMale,
	faBolt
} from '@fortawesome/free-solid-svg-icons';

import Layout from './page/Layout';
import Home from './page/Home';
import Products from './page/ProductsByCategory';
import Product from './page/Product';
import Cart from './page/Cart';
import NotFound from './page/NotFound';

import theme from './utils/theme';

import './App.css';

library.add(
	fab,
	fas,
	far,
	faGoogle,
	faFacebookF,
	faGem,
	faFemale,
	faMale,
	faBolt
);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Router>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="/shopping">
								<Route path="/shopping/:category">
									<Route index element={<Products />} />
									<Route
										path="/shopping/:category/:prodId"
										element={<Product />}
									/>
								</Route>
							</Route>
							<Route path="/cart" element={<Cart />} />
							<Route path="*" element={<NotFound />} />
						</Route>
					</Routes>
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
