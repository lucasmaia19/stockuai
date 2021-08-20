import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    modalConteiner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 30%)',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '999',
    },

}));

function Modal({ open, children }) {

    const classes = useStyles();

    return (
        open && (
            <div className={classes.modalConteiner}>
                {children}
            </div>
        )
    )
}

export default Modal