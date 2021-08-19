import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const userStyles = makeStyles(() => ({
    root: {
        height: '100%'
    },

    content: {
        height: '100%'
    }
}))

function Minimal({children}) {

    const classes = userStyles()

    return(
        <div className={classes.root}>
            <main class={classes.content}>
                {children}
            </main>
        </div>
    )
}

export default Minimal