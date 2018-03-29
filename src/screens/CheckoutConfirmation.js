import React, { Component } from 'react';

import 'css/Page1.css';
import 'css/Order.css';
import ContainerComponent from 'components/ContainerComponent';
import OrderLoggedIn from 'components/OrderLoggedIn';



class Registration extends Component {
  render() {
    return (
      <ContainerComponent>


      <OrderLoggedIn />
      </ContainerComponent>
    )}
  }

export default Registration
