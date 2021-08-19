import React, { cloneElement } from 'react'
import { Route } from 'react-router-dom'

function PageRouter({ children, Layout, ...props }) {

    return (
        <Route {...props} component={(innerProps) => Layout ? (
            <Layout {...innerProps}>
                 {children}
            </Layout>
        )
            : cloneElement(children, { ...innerProps })} />
    );
}

export default PageRouter