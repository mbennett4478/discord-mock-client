import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
}));

export default ({ label, value, onChange, ...props }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.textInput}>
            <TextField
                {...props}
                label={label}
                value={value}
                onChange={onChange}
                InputLabelProps={{
                    shrink: true,
                    className: classes.textLabel,
                }}
                fullWidth
                margin="dense"
                variant="outlined"
            />
        </Grid>
    );
};