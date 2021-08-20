import React from 'react';
import { Avatar } from '@material-ui/core'
import perfil from '../../../../assests/perfil.jpg';
import { makeStyles } from '@material-ui/core/styles'

function Profile({setAnchorEl}) {

    const useStyles = makeStyles((theme) => ({
        small: 
        {
            cursor: 'pointer',
            width: theme.spacing(5),
            height: theme.spacing(5),
        },
    }))

    const classes = useStyles()

    return (
        <div>
            <Avatar onClick={setAnchorEl} alt="Remy Sharp" src={perfil} className={classes.small} />
        </div>
    )
}

export default Profile