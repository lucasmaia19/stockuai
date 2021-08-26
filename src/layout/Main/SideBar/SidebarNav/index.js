import React, { forwardRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {}, item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0
    },
    img: {
        height: '100px'
    },
    button: {
        color: "#FFFFFF",
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0, width: '100%',
        fontWeight: 'bold'
    },
    icon: {
        color: theme.palette.icon,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: theme.spacing(1),
        fontSize: '1.3rem',
    },
    active:
    {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        '& $icon': { color: theme.palette.primary.main }
    },
    subItensList: {
        '& li > div > a': {
            padding: '6px 0',
            paddingLeft: '18px'
        }
    }
}));

const CustomRouterLink = forwardRef((props, ref) => (

    <div ref={ref} style={{ flexGrow: 1 }} >
        <NavLink {...props} exact={true} />
    </div>
));

function SidebarNav({ pages, className, ...rest }) {
    const classes = useStyles();
    const [Itens, setItens] = useState('')
    const toggleSubItensMenu = (menu) => {
        const newControl = { ...Itens };
        newControl[menu] = !Itens[menu];
        setItens(newControl);
    };
    const showItems = (title, icon, href, index) => (
        <div key={`${title}-${index}`}>
            <ListItem className={classes.item} disableGutters button onClick={() => toggleSubItensMenu(title)} >
                <Button component={CustomRouterLink} to={href} className={classes.button} >
                    <div className={classes.icon}>
                        {icon}
                    </div>
                    {title}
                </Button>
            </ListItem>
        </div>
    );

    return (
        <>
            <div className={classes.img} />
            <Divider />
            <div className={classes.divider} />
            <List {...rest} className={clsx(classes.root)} >
                {pages.map((page, index) => {
                    if (page) {
                        return showItems(page.title, page.icon, page.href, index);
                    }
                    return undefined
                })}
            </List> </>
    );

}
SidebarNav.propTypes = { className: PropTypes.string, pages: PropTypes.arrayOf(PropTypes.any).isRequired };
SidebarNav.defaultProps = { className: undefined };

export default SidebarNav;
