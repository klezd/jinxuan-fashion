import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import AuthBox from './AuthBox';
import styles from './styles.module.css';

function Auth(props) {
	// const {logged} = props;
	const isLogged = useSelector((s) => s.user.isLogged);
	const user = useSelector((s) => s.user.user);

	return (
		<div className={styles.root}>
			{isLogged ? <Fragment>User logged in</Fragment> : <AuthBox />}
		</div>
	);
}

export default Auth;

Auth.propTypes = {
	// logged: PropTypes.bool
};

Auth.defaultProps = {
	// logged: false
};
