import React, { useState } from 'react';

import Modal from 'src/components/Modal';
import Herosection from 'src/components/MainLayout/Herosection';
import TrendingPost from 'src/components/MainLayout/TrendingPost';
import FeaturedPost from 'src/components/MainLayout/FeaturedPost';
import { ModalContext } from 'src/components/Context/ModalContext';

import { ModalDataProps } from 'src/components/types/modalData';

const Landing = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [emailAuth, setEmailAuth] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalDataProps>({
    title: '',
    btn1: '',
    btn2: '',
    btn3: '',
    auth: '',
    text: '',
    terms: '',
  });

  const openModal = (arg: ModalDataProps) => {
    const { title, btn1, btn2, btn3, text, auth, terms } = arg;
    setToggle(true);
    setModalData({
      title,
      btn1,
      btn2,
      btn3,
      text,
      auth,
      terms,
    });
  };

  const closeModal = () => {
    setToggle(false);
    setEmailAuth(false);
  };

  const _handleEmailAuth = () => {
    setEmailAuth(true);
  };

  const _handleClickOption = () => {
    setEmailAuth(false);
  };

  return (
    <ModalContext.Provider
      value={{
        toggle,
        closeModal,
        openModal,
        modalData,
        emailAuth,
        _handleEmailAuth,
        _handleClickOption,
      }}
    >
      <div
        className={`${
          toggle ? `h-screen overflow-y-hidden` : `overflow-y-visible`
        }`}
      >
        <Modal />
        <Herosection />
        <TrendingPost />
        <FeaturedPost />
      </div>
    </ModalContext.Provider>
  );
};

export default Landing;
