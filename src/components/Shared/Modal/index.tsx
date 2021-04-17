import React, { FunctionComponent, useContext } from 'react';
import Image from 'next/image';

import Button from 'src/components/Shared/Button';
import { ModalContext } from 'src/components/Context/ModalContext';

import { ModalDataProps } from 'src/components/types/modalData';

type MContext = {
  toggle: boolean;
  closeModal: () => void;
  modalData: ModalDataProps;
};

const Index: FunctionComponent<{}> = () => {
  const {
    toggle,
    closeModal,
    modalData: { title, btn1, btn2, btn3, auth, text },
  } = useContext<MContext>(ModalContext);
  return (
    <div
      className={`${
        toggle ? `block` : `hidden`
      } bg-white bg-opacity-90 z-50 fixed inset-0`}
    >
      <div className="w-2/4 mx-auto flex flex-col items-center bg-white shadow-lg h-screen">
        <div className="w-11/12 text-right mt-4">
          <Image
            src="/icons/multiply.png"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <h2 className="my-12 text-3xl font-serif font-normal">{title}</h2>
        <div className="flex flex-col mt-4 items-center">
          <Button
            className="mb-4 flex items-center w-full"
            type="default"
            shape="round"
            size="large"
          >
            <Image
              src="/icons/google.svg"
              width={20}
              height={20}
              className=""
            />
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
          >
            <Image src="/icons/mail.png" width={20} height={20} className="" />
            <span className="pl-2">{btn3}</span>
          </Button>
        </div>
        <p className="text-base mt-6 font-sans">
          {text}
          <span className="pl-1 font-bold text-base text-green-700">
            {auth}
          </span>
        </p>
        <p className="w-2/4 text-xs font-medium text-center text-gray-500 mt-16">
          Click "Sign Up" to agree to Medium's{' '}
          <span className="underline">Terms of Service</span> and acknoledge
          that Medium's <span className="underline">Privacy Policy</span>{' '}
          applies to you.
        </p>
      </div>
    </div>
  );
};

export default Index;
