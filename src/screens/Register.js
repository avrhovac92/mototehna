import React, { Component } from 'react';

import Basket from 'components/Basket';
import ContainerComponent from 'components/ContainerComponent';

class Register extends Component {
  render() {
    return (
      <ContainerComponent>
        <Basket />
      </ContainerComponent>
    );
  }
}

export default Register;
