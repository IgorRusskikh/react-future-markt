"use client";

import { Raleway } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Button from './components/Button';
import Header from './components/Header';
import InfoBlock from './components/InfoBlock';
import ModalWindow from './components/ModalWindow';
import { useModal } from './hooks/useModal';
import computeDate from './libs/computeDate';

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  const [dailyValue, setDailyValue] = useState(0);
  const [computedDate, setComputedDate] = useState(computeDate(new Date()));

  const modal = useModal();

  useEffect(() => {
    /* FETCHING DAILY DATA */
    const fetchDaily = async () => {
      const response = await fetch(
        "https://www.cbr-xml-daily.ru/daily_json.js"
      );
      const data = await response.json();

      setDailyValue(Math.round(data.Valute.GBP.Value));
    };

    fetchDaily();
  }, []);

  return (
    <>
      {/* CHECK THE STATE IS TRUE/FALSE TO SHOW/HIDE WINDOW TO ORDER CALL */}
      {modal.modalOpen && <ModalWindow />}
      <div
        className={`
          xl:transition-all 
          xl:duration-200
          w-full h-full overflow-hidden
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
          className="absolute bottom-0 -right-[95px] lg:-right-[120px] xl:right-[139px] 2xl:right-[100px] w-[275px] h-[432px] lg:w-[336px] lg:h-[550px] xl:w-[420px] xl:h-[646px] 2xl:w-[525px] 2xl:h-[808px]"
        />
        <div className={`flex justify-center w-full ${raleway.className}`}>
          <div className="flex w-[95%] xl:w-[1220px] 2xl:w-[1320px]">
            <div className="mt-[76px] lg:mt-[84px] xl:mt-[105px] 2xl:mt-[132px]">
              <h1 className="font font-semibold text-[25px] xl:text-[52px] 2xl:text-[65px] text-white w-[252px] lg:w-[250px] xl:w-[597px] 2xl:w-[747px]">
                СОЗДАЮ УСЛОВИЯ ДЛЯ ВАШЕГО УСПЕХА
              </h1>
              <div className="flex items-center mt-[35px] lg:mt-[35px] xl:mt-[26px] 2xl:mt-[33px]">
                <div className="border-l py-[13px] xl:py-[16px] 2xl:py-[20px]"></div>
                <h6 className="hidden xl:block xl:w-[559px] 2xl:w-[700px] text-[#ffffff80] font-normal xl:text-xs 2xl:text-base xl:pl-[19px] 2xl:pl-[24px]">
                  Когда ваше время и энергия лучше сфокусированы, стремление к
                  новым возможностям становится реальностью, ваш успех зависит
                  от ваших действий
                </h6>
                <h6 className="block xl:hidden text-[#ffffff80] font-normal text-xs pl-[5px] max-w-[160px]">
                  Ваш успех зависит от ваших действий
                </h6>
              </div>
              <div className="w-full mt-[52px] xl:mt-[51px] 2xl:mt-[64px]">
                {/* DESKTOP VERSION */}
                <div className="hidden xl:flex xl:gap-[32px] 2xl:gap-[40px]">
                  <div className="flex xl:gap-24 2xl:gap-28 flex-col justify-between">
                    <Button
                      label="Записаться на консультацию"
                      imageLink="/vector-dark.png"
                    />
                    <InfoBlock
                      title={`${computedDate}+`}
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
                      title={dailyValue.toString() + "%"}
                      description="увеличение личной продуктивности"
                      maxWidth="max-w-48"
                    />
                  </div>
                </div>
                {/* MOBILE VERSION */}
                <div className="xl:hidden flex flex-col">
                  <div className="flex flex-col gap-[15px]">
                    <Button
                      label="Записаться"
                      imageLink="/bold-vector-dark.png"
                    />
                    <Button
                      label="Заказать звонок"
                      imageLink="/bold-vector-light.png"
                      theme="dark"
                      onClick={() => modal.setModalOpen(true)}
                    />
                  </div>
                  <div className="flex gap-[45px] mt-[92px]">
                    <InfoBlock
                      title="130+"
                      description="техники"
                      maxWidth="max-w-48"
                    />
                    <InfoBlock
                      title="250%"
                      description="продуктивности"
                      maxWidth="max-w-48"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
