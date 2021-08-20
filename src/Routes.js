import React from 'react';

import { Redirect, Switch } from 'react-router-dom';
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
import Profile from './views/Profile';

function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <PageRouter exact isPrivate path="/Login" Layout={Minimal}>
        <SignIn />
      </PageRouter>

      <Redirect exact from="/home" to="/product-register" />
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

      <PageRouter exact isPrivate path="/profile" Layout={Main} >
        <Profile />
      </PageRouter>

    </Switch>
  );
}

export default Routes;
