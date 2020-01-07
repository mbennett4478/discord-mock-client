import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => 
            localStorage.getItem("accessToken") ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default withRouter(AuthenticatedRoute)