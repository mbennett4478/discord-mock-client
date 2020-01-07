import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import AuthenticatedRoute from './components/common/AuthenticatedRoute';
import Login from './components/loginRegistration/Login';
import Register from './components/loginRegistration/Register';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const history = createBrowserHistory();

ReactDOM.render(
    <ThemeProvider theme={darkTheme}>
        <Router history={history}>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <AuthenticatedRoute exact path="/taco" component={App} />
            </Switch>
        </Router>
    </ThemeProvider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
