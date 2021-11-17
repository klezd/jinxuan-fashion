import React from 'react';
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
	return (
		<List component={Stack} direction={props.direction} spacing={2}>
			{props.showPageTitle && (
				<>
					<ListItem disablePadding>
						<ListItemButton>
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
				<ListItemButton onClick={() => props.linkTo('women%27s%20clothing')}>
					{props.showIcon && (
						<ListItemIcon>
							<FontAwesomeIcon icon="female" />
						</ListItemIcon>
					)}
					<ListItemText
						primary={
							props.direction === 'row' ? 'Woman' : <>Woman &apos;s clothing</>
						}
					/>
				</ListItemButton>
			</ListItem>

			<ListItem disablePadding>
				<ListItemButton onClick={() => props.linkTo('men%27s%20clothing')}>
					{props.showIcon && (
						<ListItemIcon>
							<FontAwesomeIcon icon="male" />
						</ListItemIcon>
					)}
					<ListItemText
						primary={
							props.direction === 'row' ? 'Main' : <>Main &apos;s clothing</>
						}
					/>
				</ListItemButton>
			</ListItem>

			<ListItem disablePadding>
				<ListItemButton onClick={() => props.linkTo('gem')}>
					{props.showIcon && (
						<ListItemIcon>
							<FontAwesomeIcon icon="gem" />
						</ListItemIcon>
					)}
					<ListItemText primary="Jewelry" />
				</ListItemButton>
			</ListItem>

			<ListItem disablePadding>
				<ListItemButton onClick={() => props.linkTo('electronics')}>
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
	linkTo: PropTypes.func,
	direction: PropTypes.oneOf(['row', 'column'])
};

MenuList.defaultProps = {
	showPageTitle: false,
	showIcon: false,
	linkTo: () => {},
	direction: 'row'
};
