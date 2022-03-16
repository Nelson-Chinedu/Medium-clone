import React, { FunctionComponent, useCallback } from 'react';

import { Button } from 'src/components';

import useAuth from 'src/hooks/useAuth';

import useGetStarted from 'src/hooks/useGetStarted';

const SignIn: FunctionComponent<{}> = () => {
  const [state, setState] = useGetStarted();
  const { handleFacebook, handleGoogle } = useAuth();

  const handleSignUp = useCallback(() => {
    setState({ ...state, signIn: !state.signIn });
  }, []);

  const handleEmailSignIn = useCallback(() => {
    setState({ ...state, signIn: false, email: true });
  }, []);

  const handleGoogleAuth = useCallback(() => {
    handleGoogle();
  }, []);

  const handleFacebookAuth = useCallback(() => {
    handleFacebook();
  }, []);

  return (
    <div>
      <p className="text-3xl text-center font-serif my-16">Welcome back.</p>
      <div
        className="flex flex-col my-8"
        style={{ width: '32%', margin: 'auto' }}
      >
        <Button
          shape="round"
          type="default"
          className="mb-4 flex items-center"
          size="large"
          handleClick={handleGoogleAuth}
        >
          <svg width="25" height="25" className="mr-1">
            <g fill="none" fill-rule="evenodd">
              <path
                d="M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z"
                fill="#4285F4"
              ></path>
              <path
                d="M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z"
                fill="#34A853"
              ></path>
              <path
                d="M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z"
                fill="#EA4335"
              ></path>
            </g>
          </svg>
          <p className="text-sm">Sign in with Google</p>
        </Button>
        <Button
          shape="round"
          type="default"
          className="mb-4 flex items-center"
          size="large"
          handleClick={handleFacebookAuth}
        >
          <svg width="25" height="25" fill="#3B5998" className="mr-1">
            <path
              d="M20.3 4H4.7a.7.7 0 0 0-.7.7v15.6c0 .38.32.7.7.7h8.33v-6.38h-2.12v-2.65h2.12V9.84c0-2.2 1.4-3.27 3.35-3.27.94 0 1.75.07 1.98.1v2.3H17c-1.06 0-1.31.5-1.31 1.24v1.76h2.65l-.53 2.65H15.7l.04 6.38h4.56a.7.7 0 0 0 .71-.7V4.7a.7.7 0 0 0-.7-.7"
              fill-rule="evenodd"
            ></path>
          </svg>
          <p className="text-sm"> Sign in with Facebook</p>
        </Button>
        <Button
          shape="round"
          type="default"
          className="mb-4 flex items-center"
          size="large"
        >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path
              d="M16.86 12.48c.02 2.42 2.12 3.22 2.14 3.23-.02.06-.34 1.15-1.1 2.27-.67.98-1.36 1.94-2.45 1.96-1.07.02-1.41-.63-2.63-.63-1.23 0-1.6.61-2.62.65-1.05.04-1.85-1.05-2.52-2.02-1.37-1.98-2.42-5.6-1.01-8.04a3.9 3.9 0 0 1 3.3-2c1.03-.02 2 .7 2.64.7.63 0 1.8-.87 3.05-.74.52.02 1.98.21 2.92 1.58-.07.05-1.74 1.02-1.72 3.04zm-2.01-5.93c.56-.68.93-1.62.83-2.55-.8.03-1.78.54-2.35 1.21-.52.6-.97 1.55-.85 2.47.9.07 1.81-.46 2.37-1.13"
              fill="#000"
            ></path>
          </svg>
          <p className="text-sm"> Sign in with Apple</p>
        </Button>
        <Button
          shape="round"
          type="default"
          className="mb-4 flex items-center"
          size="large"
        >
          <svg width="25" height="25" viewBox="0 0 25 25">
            <path d="M22.3 4.3c-.82.51-1.72.88-2.67 1.08a4.25 4.25 0 0 0-6.18-.12 4.3 4.3 0 0 0-1.26 3.03c0 .34.04.67.08 1a12.2 12.2 0 0 1-8.81-4.52 4.8 4.8 0 0 0-.62 2.14 4.44 4.44 0 0 0 1.92 3.6 4.13 4.13 0 0 1-1.91-.55v.07c0 2.06 1.47 3.8 3.44 4.21-.37.08-.74.13-1.15.15l-.76-.07a4.32 4.32 0 0 0 3.98 2.99A9.03 9.03 0 0 1 3 19.14l-1-.06A12.26 12.26 0 0 0 8.6 21c7.88 0 12.2-6.55 12.17-12.18.02-.23.02-.41 0-.62a8.06 8.06 0 0 0 2.15-2.23c-.77.37-1.6.6-2.45.7a4.1 4.1 0 0 0 1.84-2.38"></path>
          </svg>
          <p className="text-sm"> Sign in with Twitter</p>
        </Button>
        <Button
          shape="round"
          type="default"
          className="mb-4 flex items-center"
          size="large"
          handleClick={handleEmailSignIn}
        >
          <svg width="25" height="25" className="mr-1">
            <path d="M4 6v13h17V6H4zm5.9 7.97l2.6 2.12 2.6-2.12 4.14 4.02H5.76l4.15-4.02zm-4.88 3.32V9.97l4.1 3.35-4.1 3.97zm10.87-3.97l4.1-3.35v7.32l-4.1-3.97zm4.1-6.3v1.64l-7.49 6.12-7.48-6.13V7.01h14.96z"></path>
          </svg>
          <p className="text-sm">Sign in with Email</p>
        </Button>
      </div>
      <div className="text-center mt-6 mb-16">
        <p className="text-base">
          No account?{' '}
          <span
            className="font-bold text-green-700 cursor-pointer"
            onClick={handleSignUp}
          >
            Create one
          </span>
        </p>
      </div>
      <div className="w-9/12 m-auto text-center mb-28">
        <p className="text-xs">
          Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge
          that Medium’s Privacy Policy applies to you.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
