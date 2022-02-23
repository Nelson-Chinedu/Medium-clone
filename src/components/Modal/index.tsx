import React, { FunctionComponent, ReactNode } from "react";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

const Index: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="bg-white bg-opacity-90 z-50 fixed inset-0">
      <div className="w-2/4 mx-auto flex flex-col items-center bg-white shadow-lg h-screen">
        <div className="w-11/12 text-right mt-4">
          <Image src="/icons/multiply.png" width={20} height={20} className="cursor-pointer" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Index;
