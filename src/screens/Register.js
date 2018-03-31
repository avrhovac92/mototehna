import React, { Component } from 'react';

import SignIn from 'components/SignIn';
import ContainerComponent from 'components/ContainerComponent';

class Register extends Component {
  render() {
    return (
      <ContainerComponent>
        <SignIn />
      </ContainerComponent>
    );
  }
}

export default Register;
