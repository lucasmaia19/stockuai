import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import PageRouter from './components/PageRouter';
import Minimal from './layout/Minimal';
import Main from './layout/Main';
import SignIn from './views/SignIn';
import RegisterProcuct from './views/RegisterProcuct';
import AccessControl from './views/AccessControl';
import MovementStock from './views/MovementStock';
import RegisterCompany from './views/RegisterCompany';
import RegisterMerchandise from './views/RegisterMerchandise';
import RegisterProvider from './views/RegisterProvider';
import Stock from './views/Stock';

function Routes() {
  return (
    <Switch>
      <PageRouter exact isPrivate path="/" Layout={Minimal}>
        <SignIn />
      </PageRouter>

      <PageRouter exact isPrivate path="/product-register" Layout={Main} >
        <RegisterProcuct />
      </PageRouter>

      <PageRouter exact isPrivate path="/control-access" Layout={Main} >
        <AccessControl />
      </PageRouter>

      <PageRouter exact isPrivate path="/stock-movement" Layout={Main} >
        <MovementStock />
      </PageRouter>

      <PageRouter exact isPrivate path="/company-register" Layout={Main} >
        <RegisterCompany />
      </PageRouter>

      <PageRouter exact isPrivate path="/merchandise-register" Layout={Main} >
        <RegisterMerchandise />
      </PageRouter>

      <PageRouter exact isPrivate path="/provider-register" Layout={Main} >
        <RegisterProvider />
      </PageRouter>

      <PageRouter exact isPrivate path="/stock" Layout={Main} >
        <Stock />
      </PageRouter>

    </Switch>
  );
}

export default Routes;
