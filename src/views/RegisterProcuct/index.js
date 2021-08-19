import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    typography: {
        fontSize: '2rem',
        fontWeight: 'bold'
    }
}));

function RegisterProcuct() {

    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.typography} variant='h1'>Cadastro do Produto</Typography>
        </div>
    )
}

export default RegisterProcuct