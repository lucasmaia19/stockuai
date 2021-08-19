import React, { cloneElement, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideBar from '../Main/SideBar';
import TopBar from '../Main/TopBar';
import { useMediaQuery, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 56,
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64
        }
    },
    content: {
        minHeight: '100%',
        paddingLeft: 250,
        paddingTop: 38,
        display: 'flex',
        justifyContent: 'center'
        
    },
    shiftContent: {
        paddingLeft: 0,
    },
    shiftDesktop:
    {
        paddingLeft: 25,
    },
}));

function Main({ children, ...props }) {
    const classes = useStyles();
    const theme = useTheme();
    const [openSideBar, setOpenSideBar] = useState(false);
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'),
        {
            defaultMatches: true
        });

    return (
        <div className={clsx({
            [classes.root]: true,
            [classes.shiftContent]: !isDesktop && !openSideBar,
            [classes.shiftDesktop]: isDesktop && openSideBar
        })} >
            <TopBar onSideBarOpen={() => setOpenSideBar(true)} />
            <SideBar variant={
                isDesktop ? 'persistent' : 'temporary'
            }
                open={openSideBar} />

            <main className={classes.content}>
                {cloneElement(children, { ...props })}
            </main>
        </div>
    )
}
Main.propTypes = { children: PropTypes.node }
Main.defaultProps = {}

export default Main;