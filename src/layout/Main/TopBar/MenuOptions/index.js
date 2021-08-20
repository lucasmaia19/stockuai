import React from 'react';
import Menu from '@material-ui/core/Menu';
import { Avatar, Button, MenuItem } from '@material-ui/core'
import { ExitToAppOutlined, PersonOutlineOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
import perfil from '../../../../assests/perfil.jpg';

function MenuOptions({open, anchorEl, setAnchorEl}) {

    const redirectProfile = () => {
        window.location.href = "/profile";
    }

    return (
        <>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={setAnchorEl}
            >
                <MenuItem onClick={redirectProfile}>
                    <PersonOutlineOutlined />
                    Meu Perfil
                </MenuItem>
                <MenuItem >
                    <ExitToAppOutlined />
                    Sair
                </MenuItem>
            </Menu>
        </>
    )
}

export default MenuOptions