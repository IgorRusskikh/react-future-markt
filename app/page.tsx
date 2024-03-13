"use client";

import { Raleway } from 'next/font/google';
import Image from 'next/image';

import Button from './components/Button';
import Header from './components/Header';
import InfoBlock from './components/InfoBlock';
import ModalWindow from './components/ModalWindow';
import { useModal } from './hooks/useModal';

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  const modal = useModal();

  return (
    <>
      {modal.modalOpen && <ModalWindow />}
      <div
        className={`
          transition-all 
          duration-200
          w-full h-full
          ${modal.modalOpen && " blur-md"}
        `}
      >
        <div
          className={`
          transition-all 
          duration-200
          bg-[#0f1d4399]
            ${modal.modalOpen && "w-full h-full fixed z-10 "}
          `}
        ></div>
        <Header />
        <Image
          width={525}
          height={808}
          src="/mentor 2.png"
          alt="mentor"
          className="absolute bottom-0 right-[208px]"
        />
        <div className={`flex justify-center w-full ${raleway.className}`}>
          <div className="flex w-[1320px]">
            <div className="mt-[132px]">
              <h1 className="font font-semibold text-[65px] text-white w-[747px]">
                СОЗДАЮ УСЛОВИЯ ДЛЯ ВАШЕГО УСПЕХА
              </h1>
              <div className="flex items-center mt-[33px]">
                <div className="border py-[20px]"></div>
                <h6 className="w-[700px] text-[#ffffff80] font-normal text-base pl-[24px]">
                  Когда ваше время и энергия лучше сфокусированы, стремление к
                  новым возможностям становится реальностью, ваш успех зависит
                  от ваших действий
                </h6>
              </div>
              <div className="flex gap-[40px] w-full mt-[64px]">
                <div className="flex gap-28 flex-col justify-between">
                  <Button
                    label="Записаться на консультацию"
                    imageLink="/vector-dark.png"
                  />
                  <InfoBlock
                    title="130+"
                    description="техник для достижения целей"
                    maxWidth="max-w-48"
                  />
                </div>
                <div className="flex gap-28 flex-col justify-between">
                  <Button
                    label="Бесплатная консультация"
                    imageLink="/vector-light.png"
                    theme="dark"
                    onClick={() => modal.setModalOpen(true)}
                  />
                  <InfoBlock
                    title="250%"
                    description="увеличение личной продуктивности"
                    maxWidth="max-w-48"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
