import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({

    appBar: {
        backgroundColor: '#ff7700',
        padding: '1.2rem 1rem 1.2rem 0',
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`, marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2), [theme.breakpoints.up('md')]: { display: 'none', },
    },
    title:
    {
        width: '100%', fontSize: '1.2rem',
    },
    menu:
    {
        display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'flex-end',
    },

}))

function TopBar({onSideBarOpen, ...rest}) {

    const classes = useStyles()

    return (
        <>
            <AppBar {...rest} className={classes.appBar} position="fixed" >
                <Toolbar>
                    <IconButton color="inherit" onClick={onSideBarOpen} className={classes.menuButton} >
                        <MenuIcon /> 
                    </IconButton>
                    <Typography variant="h1" className={classes.title}>STOCK UAI</Typography>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default TopBar