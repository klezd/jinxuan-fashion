import React from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.css';

export default function MenuList(props) {
	const navigate = useNavigate();

	const openLink = (link) => {
		console.log(link);
		navigate(link);
		if (props.direction !== 'row') props.toggleDrawer(false);
	};

	return (
		<List component={Stack} direction={{ xs: 'column', md: 'row' }} spacing={2}>
			{props.showPageTitle && (
				<>
					<ListItem disablePadding>
						<ListItemButton onClick={() => openLink('/')}>
							<ListItemIcon>
								<img src="/Logo2.png" className={styles.logo} />
							</ListItemIcon>
							<ListItemText primary="JinXuan Fashion" />
						</ListItemButton>
					</ListItem>
					<Divider />
				</>
			)}

			<ListItem disablePadding>
				<ListItemButton
					onClick={() => openLink('/shopping/women%27s%20clothing')}
				>
					{props.showIcon && (
						<ListItemIcon>
							<FontAwesomeIcon icon="female" />
						</ListItemIcon>
					)}
					<ListItemText
						primary={
							props.direction === 'row' ? 'Women' : <>Women &apos;s clothing</>
						}
					/>
				</ListItemButton>
			</ListItem>

			<ListItem disablePadding>
				<ListItemButton
					onClick={() => openLink('/shopping/men%27s%20clothing')}
				>
					{props.showIcon && (
						<ListItemIcon>
							<FontAwesomeIcon icon="male" />
						</ListItemIcon>
					)}
					<ListItemText
						primary={
							props.direction === 'row' ? 'Man' : <>Man &apos;s clothing</>
						}
					/>
				</ListItemButton>
			</ListItem>

			<ListItem disablePadding>
				<ListItemButton onClick={() => openLink('/shopping/jewelery')}>
					{props.showIcon && (
						<ListItemIcon>
							<FontAwesomeIcon icon="gem" />
						</ListItemIcon>
					)}
					<ListItemText primary="Jewelry" />
				</ListItemButton>
			</ListItem>

			<ListItem disablePadding>
				<ListItemButton onClick={() => openLink('/shopping/electronics')}>
					{props.showIcon && (
						<ListItemIcon>
							<FontAwesomeIcon icon="bolt" />
						</ListItemIcon>
					)}
					<ListItemText primary="Electronics" />
				</ListItemButton>
			</ListItem>
		</List>
	);
}

MenuList.propTypes = {
	showPageTitle: PropTypes.bool,
	showIcon: PropTypes.bool,
	direction: PropTypes.oneOf(['row', 'column']),
	toggleDrawer: PropTypes.func.isRequired
};

MenuList.defaultProps = {
	showPageTitle: false,
	showIcon: false,
	direction: 'row'
};
