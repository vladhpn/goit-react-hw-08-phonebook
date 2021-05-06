import React from 'react' 
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {authSelectors} from '../../redux/auth'
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

const Navigation = ({isAuthenticated}) => (
  <nav>
    <NavLink to={routes.home} exact style={styles.link} activeStyle={styles.activeLink}>
    Main
    </NavLink>

    {isAuthenticated && (    
    <NavLink
      to={routes.contacts}
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Your Contacts
    </NavLink>
    )}

  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps)(Navigation);