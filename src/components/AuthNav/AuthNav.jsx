import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes'

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      to={routes.register}
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
        Register
    </NavLink>
    <NavLink
      to={routes.login}
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;