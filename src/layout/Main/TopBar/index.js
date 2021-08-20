import { AppBar, IconButton, Toolbar, Typography, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';
import MenuOptions from './MenuOptions';
import Profile from './Profile';

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
        width: '100%',
        fontSize: '1.2rem',
    },
    menu:
    {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    perfil:
    {
        fontSize: '1.2rem',
        color: '#FFFFFF',
    },
    icon:
    {
        fontSize: '1.2rem',
        //color: '#FFFFFF',
    },

}))

function TopBar({ history, onSideBarOpen, ...rest }) {

    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(undefined)

    return (
        <>
            <AppBar {...rest} className={classes.appBar} position="fixed" >
                <Toolbar>
                    <IconButton color="inherit" onClick={onSideBarOpen} className={classes.menuButton} >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h1" className={classes.title}>STOCK UAI</Typography>

                    <Profile setAnchorEl={(e) => setAnchorEl(e.currentTarget)} />
                    <MenuOptions
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        setAnchorEl={() => setAnchorEl(undefined)}
                    />

                </Toolbar>

            </AppBar>
        </>
    )
}

export default TopBar