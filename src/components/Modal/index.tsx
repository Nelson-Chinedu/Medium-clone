import React, { FunctionComponent, useContext, ReactNode } from 'react';
import Image from 'next/image';

import { ModalContext } from 'src/context/ModalContext';

import { ModalDataProps } from 'src/types/modalData';

type Props = {
  children: ReactNode;
};
type MContext = {
  toggle: boolean;
  closeModal: () => void;
  modalData: ModalDataProps;
};

const Index: FunctionComponent<Props> = ({ children }) => {
  const { toggle, closeModal } = useContext<MContext>(ModalContext);
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
        {children}
      </div>
    </div>
  );
};

export default Index;
