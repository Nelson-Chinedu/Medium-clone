import React, { FunctionComponent, useCallback } from 'react';

import { Input, Button } from 'src/components';

import useGetStarted from 'src/hooks/useGetStarted';

const EmailSignIn: FunctionComponent<{}> = () => {
  const [state, setState] = useGetStarted();

  const handleBack = useCallback(() => {
    setState({
      ...state,
      email: !state.email,
      signIn: state.signUp ? false : true,
      signUp: state.signUp && !state.signUp,
    });
  }, []);

  return (
    <div className="text-center">
      <p className="text-3xl text-center font-serif mt-16 mb-8">
        Sign {state.signUp ? 'up' : 'in'} with email
      </p>
      <div
        className={`${state.signUp ? 'w-full' : 'w-2/4'} text-center mx-auto`}
      >
        <p className=" text-base font-light mb-14">
          {state.signUp
            ? 'Enter your email address to create an account.'
            : `Enter the email address associated with your account, and we’ll send a
          magic link to your inbox.`}
        </p>
      </div>
      <div className={`${state.signUp ? 'w-4/5' : 'w-2/5'} text-center m-auto`}>
        <p className="text-sm font-light mb-2">Your email</p>
        <Input
          className="border-b border-black outline-none text-center px-4 py-2 w-full"
          type="email"
        />
      </div>
      <div className={`${state.signUp ? 'w-9/12' : 'w-2/6'} mx-auto`}>
        <Button
          shape="round"
          type="default"
          className="my-8 border bg-black text-white px-2 w-full"
          size="large"
        >
          Continue
        </Button>
      </div>
      <p
        className={`${
          state.signUp && 'w-full'
        } text-green-700 flex items-center w-3/12 mx-auto justify-center mb-48 cursor-pointer`}
        onClick={handleBack}
      >
        <svg width="19" height="19" viewBox="0 0 19 19">
          <path
            d="M11.47 13.97L6.99 9.48 11.47 5l.55.5-3.99 3.98 4 4z"
            fill-rule="evenodd"
          ></path>
        </svg>
        All sign {state.signUp ? 'up' : 'in'} options
      </p>
    </div>
  );
};

export default EmailSignIn;
