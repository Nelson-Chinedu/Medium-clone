import React, { useState } from 'react';

import Modal from 'src/components/Shared/Modal';
import Herosection from 'src/components/MainLayout/Herosection';
import TrendingPost from 'src/components/MainLayout/TrendingPost';
import FeaturedPost from 'src/components/MainLayout/FeaturedPost';
import { ModalContext } from 'src/components/Context/ModalContext';

import { ModalDataProps } from 'src/components/types/modalData';

const Landing = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalDataProps>({
    title: '',
    btn1: '',
    btn2: '',
    btn3: '',
    auth: '',
    text: '',
  });

  const openModal = (arg: ModalDataProps) => {
    const { title, btn1, btn2, btn3, text, auth } = arg;
    setToggle(true);
    setModalData({
      title,
      btn1,
      btn2,
      btn3,
      text,
      auth,
    });
  };

  const closeModal = () => {
    setToggle(false);
  };
  return (
    <ModalContext.Provider value={{ toggle, closeModal, openModal, modalData }}>
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
