import React from 'react';
import Menu from '@material-ui/core/Menu';
import { MenuItem } from '@material-ui/core'
import { ExitToAppOutlined, PersonOutlineOutlined } from '@material-ui/icons';

function MenuOptions({ open, anchorEl, setAnchorEl }) {

    const redirectProfile = () => {
        window.location.href = "/profile";
    }

    function handleLogout() {
        window.location.href = "/login";
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
                <MenuItem
                    onClick={handleLogout}
                >
                    <ExitToAppOutlined />
                    Sair
                </MenuItem>
            </Menu>
        </>
    )
}

export default MenuOptions