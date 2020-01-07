import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import AuthHttp from './AuthHttp';

const useStyles = makeStyles(theme => ({
    login: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        width: '100%',
        padding: theme.spacing(3),
    },
    textInput: {
        padding: theme.spacing(1),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
    },
    textLabel: {
        marginTop: '3px',
        fontSize: '12px !important',
        color: '#72767d',
    },
    background: {
        height: '100vh',
    },
    loginContainer: {
        marginTop: '20px',
    },
    loginButton: {
        width: '100%',
    },
    link: {
        color: '#3f51b5',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    }
}));


const Login = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);

    const handleLogin = async () => {
        const user = await AuthHttp.login(email, password);
        console.log(user);
    };

    return (
        <Grid container justify="center" alignItems="center" className={classes.background}>
            <Grid item xs={4}>
                <Paper
                    elevation={3}
                    className={classes.login}
                >
                    <Grid item direction="column" container justify="center" alignItems="center">
                        <Grid item><Typography variant="h5">Welcome back!</Typography></Grid>
                        <Grid item><Typography variant="subtitle1">We're so excited to see you again!</Typography></Grid>
                    </Grid>
                    <div className={classes.loginContainer}>
                        <TextInput label="EMAIL" value={email} onChange={handleEmailChange} />
                        <TextInput label="PASSWORD" value={password} onChange={handlePasswordChange} type="password" />
                        <Grid className={classes.textInput}>
                            <Button className={classes.loginButton} variant="contained" size="large" color="primary" onClick={handleLogin}>
                                Login
                            </Button>
                        </Grid>
                        <Grid className={classes.textInput}>
                            <Typography variant="body2">Need an account? <Link className={classes.link} to="/register">Register</Link></Typography>
                        </Grid>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Login;