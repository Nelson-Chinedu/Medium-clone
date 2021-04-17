import React, { FunctionComponent, useContext } from 'react';
import Image from 'next/image';
import { LeftOutlined } from '@ant-design/icons';

import Modal from 'src/components/Shared/Modal';
import Button from 'src/components/Shared/Button';
import Input from 'src/components/Shared/Input';

import { ModalContext } from 'src/components/Context/ModalContext';

import { ModalDataProps } from 'src/components/types/modalData';

type MContext = {
  toggle: boolean;
  closeModal: () => void;
  modalData: ModalDataProps;
  emailAuth: boolean;
  successPage: boolean;
  userEmail: string;
  _handleChange: () => void;
  _handleEmailAuth: () => void;
  _handleClickOption: () => void;
  _handleUserEmailAuth: () => void;
};

export const Index: FunctionComponent<{}> = () => {
  const {
    emailAuth,
    userEmail,
    _handleChange,
    _handleEmailAuth,
    _handleClickOption,
    _handleUserEmailAuth,
    successPage,
    closeModal,
    modalData: { title, btn1, btn2, btn3, auth, text, terms },
  } = useContext<MContext>(ModalContext);

  if (
    (successPage && terms === 'Sign In') ||
    (successPage && terms === 'Sign Up')
  ) {
    return (
      <Modal>
        <div className="my-20 w-2/4 mx-auto text-center">
          <h2 className=" text-3xl font-serif font-normal mb-6">
            Check your inbox
          </h2>
          <p className="mb-0 text-base">Click the link we sent to</p>
          <p className="mb-4 text-base">{userEmail} to sign in.</p>
          <Button
            className="my-8 w-1/4 text-center bg-black hover:bg-black text-white hover:text-white"
            type="default"
            shape="round"
            size="large"
            handleClick={closeModal}
          >
            OK
          </Button>
        </div>
      </Modal>
    );
  }

  if (emailAuth && terms === 'Sign In') {
    return (
      <Modal>
        <div className="my-20 w-2/4 mx-auto text-center">
          <h2 className=" text-3xl font-serif font-normal mb-6">
            Sign in with Email
          </h2>
          <p className="mb-10 text-base leading-6">
            Enter the email address associated with your account, and we will
            send a magic link to your inbox.
          </p>
          <p className="mb-4">Your email</p>
          <Input
            type="email"
            handleChange={_handleChange}
            className="border-b border-black outline-none focus:outline-none text-center w-4/5 text-base"
          />
          <Button
            className="my-8 w-9/12 text-center bg-black hover:bg-black text-white hover:text-white"
            type="default"
            shape="round"
            size="large"
            handleClick={_handleUserEmailAuth}
          >
            Continue
          </Button>
          <p
            className="text-sm font-medium text-green-500 flex items-center justify-center cursor-pointer"
            onClick={_handleClickOption}
          >
            <LeftOutlined /> <span className="pl-1">All sign in options</span>
          </p>
        </div>
      </Modal>
    );
  }

  if (emailAuth && terms === 'Sign Up') {
    return (
      <Modal>
        <div className="my-20 w-2/4 mx-auto text-center">
          <h2 className=" text-3xl font-serif font-normal mb-6">
            Sign up with Email
          </h2>
          <p className="mb-10 text-base leading-6">
            Enter your email address to create an account.
          </p>
          <p className="mb-4">Your email</p>
          <Input
            type="email"
            handleChange={_handleChange}
            className="border-b border-black outline-none focus:outline-none text-center w-4/5 text-base"
          />
          <Button
            className="my-8 w-9/12 text-center bg-black hover:bg-black text-white hover:text-white"
            type="default"
            shape="round"
            size="large"
            handleClick={_handleUserEmailAuth}
          >
            Continue
          </Button>
          <p
            className="text-sm font-medium text-green-500 flex items-center justify-center cursor-pointer"
            onClick={_handleClickOption}
          >
            <LeftOutlined /> <span className="pl-1">All sign up options</span>
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal>
      <h2 className="my-12 text-3xl font-serif font-normal">{title}</h2>
      <div className="flex flex-col mt-4 items-center">
        <Button
          className="mb-4 flex items-center w-full"
          type="default"
          shape="round"
          size="large"
        >
          <Image src="/icons/google.svg" width={20} height={20} className="" />
          <span className="pl-2">{btn1}</span>
        </Button>
        <Button
          className="mb-4 flex items-center w-full"
          type="default"
          shape="round"
          size="large"
        >
          <Image
            src="/icons/facebook.svg"
            width={20}
            height={20}
            className=""
          />
          <span className="pl-2">{btn2}</span>
        </Button>
        <Button
          className="mb-4 flex items-center w-full"
          type="default"
          shape="round"
          size="large"
          handleClick={_handleEmailAuth}
        >
          <Image src="/icons/mail.png" width={20} height={20} className="" />
          <span className="pl-2">{btn3}</span>
        </Button>
      </div>
      <p className="text-base mt-6 font-sans">
        {text}
        <span className="pl-1 font-bold text-base text-green-700">{auth}</span>
      </p>
      <p className="w-2/4 text-xs font-medium text-center text-gray-500 mt-16">
        Click {terms} to agree to Medium's
        <span className="underline">Terms of Service</span> and acknoledge that
        Medium's <span className="underline">Privacy Policy</span> applies to
        you.
      </p>
    </Modal>
  );
};

export default Index;
