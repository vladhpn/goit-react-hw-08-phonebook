import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import Contacts from './views/Contacts';
import AppBar from './components/AppBar';
import Register from './views/Register';
import Login from './views/Login';
import { ToastContainer } from 'react-toastify';
import { operations, selectors } from './redux/contacts';
import routes from './routes';
import Spinner from './components/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize/modern-normalize.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        <AppBar />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.register} component={Register} />
          <Route path={routes.login} component={Login} />
          <Route path={routes.contacts} component={Contacts} />
        </Switch>

        {/* {this.props.isLoadingContacts ? <Spinner /> : <ContactList />}  */}
        <ToastContainer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: selectors.getIsLoading(state),
});

const mapDispatchToProps = dispacth => ({
  fetchContacts: () => dispacth(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
