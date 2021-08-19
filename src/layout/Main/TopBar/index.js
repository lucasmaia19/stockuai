import { AppBar, Button, IconButton, MenuItem, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import { AccountCircle } from '@material-ui/icons';

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

function TopBar({ onSideBarOpen, ...rest }) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const redirectProfile = () => {
        handleClose()
        window.location.href = "/profile";
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles()

    return (
        <>
            <AppBar {...rest} className={classes.appBar} position="fixed" >
                <Toolbar>
                    <IconButton color="inherit" onClick={onSideBarOpen} className={classes.menuButton} >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h1" className={classes.title}>STOCK UAI</Typography>


                    <Button className={classes.perfil} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Perfil
                    </Button>
                    <AccountCircle />
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={redirectProfile}>Meu Perfil</MenuItem>
                        <MenuItem onClick={handleClose}>Sair</MenuItem>
                    </Menu>


                </Toolbar>

            </AppBar>
        </>
    )
}

export default TopBar