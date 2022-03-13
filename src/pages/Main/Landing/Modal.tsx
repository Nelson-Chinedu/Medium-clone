import React, { FunctionComponent } from 'react';

import { Modal } from 'src/components';

import Signup from 'src/auth/signup/GetStartedModal';
import Signin from 'src/auth/signin';
import Email from 'src/auth/email-auth';

import useGetStarted from 'src/hooks/useGetStarted';

const GetStarted: FunctionComponent<{}> = () => {
  const [state] = useGetStarted();
  return (
    <Modal>
      {!state.signIn && !state.email ? (
        <Signup />
      ) : state.signIn ? (
        <Signin />
      ) : state.email && !state.signIn ? (
        <Email />
      ) : (
        <Signup />
      )}
    </Modal>
  );
};

export default GetStarted;
