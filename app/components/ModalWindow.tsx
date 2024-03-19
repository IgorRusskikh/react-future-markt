import { Montserrat, Raleway } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';

import { useModal } from '../hooks/useModal';
import Button from './Button';
import Input from './Input';

const raleway = Raleway({ subsets: ["latin"] });
const montserrat = Montserrat({ width: "200", subsets: ["latin"] });

const ModalWindow = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const modal = useModal();

  const modalContent = (
    <div className="flex flex-col items-center mt-[200px] w-full">
      <h1 className="text-white text-[50px] font-semibold max-w-[280px] text-center">
        Спасибо за заявку
      </h1>
      <p
        className={`${raleway.className} text-white text-[40px] font-semibold max-w-[447px] text-center mt-[98px]`}
      >
        Я обязательно свяжусь с вами в ближайшее время.
      </p>
      <div className="flex justify-end w-full">
        <div className="text-xl text-white border-y py-[2px] text-[20px] font-semibold mt-[209px] mr-[74px]">
          ALEX. SHEVTSOV
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full w-full xl:w-[612px] fixed left-0 bg-[#0F1D45] z-20">
      <div className="flex w-full h-full relative">
        <div
          className="absolute top-10 right-10 cursor-pointer"
          onClick={() => modal.setModalOpen(false)}
        >
          <Image
            width={33}
            height={33}
            src="/close.png"
            alt=""
            className="xl:w-[33px] xl:h-[33px] w-[20px] h-[20px]"
          />
        </div>
        {isFormSubmitted ? (
          modalContent
        ) : (
          <div className="flex flex-col mt-[95px] xl:mt-28 ml-[30px] xl:ml-[75px] max-w-[260px] xl:max-w-[480px]">
            <h1
              className={`text-white text-[20px] xl:text-[50px] w-[180px] xl:w-full xl:ml-4 font-semibold ${raleway.className}`}
            >
              Закажите обратный звонок
            </h1>
            <div className="flex flex-col mt-[52px] xl:mt-16">
              <div className="flex flex-col gap-14">
                <Input
                  placeholder="ИМЯ"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <Input
                  placeholder="ТЕЛЕФОН"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div
                className={`flex items-center mt-[30px] xl:mt-28  text-white cursor-pointer ${montserrat.className}`}
                onClick={() => setIsAgree(!isAgree)}
              >
                <div className="flex items-center justify-center border w-[15px] h-[15px] xl:w-[30px] xl:h-[30px] ">
                  {isAgree && (
                    <Image
                      width={23}
                      height={22}
                      src="/selected.png"
                      alt=""
                      className="w-[15px] h-[15px] xl:w-[22px] xl:h-[22px]"
                    />
                  )}
                </div>
                <h6 className="text-xs font-light xl:text-base leading-[1.3] ml-4 xl:ml-6 max-w-[220px] xl:max-w-[342px]">
                  Согласен на сохранение и обработку персональных данных
                </h6>
              </div>
              <div className="mt-20 hidden xl:block">
                <Button
                  label="Заказать обратный звонок"
                  imageLink="/vector-light.png"
                  theme="dark"
                  disabled={isAgree ? false : true}
                  onClick={() => setIsFormSubmitted(true)}
                />
              </div>
              <div className="mt-20 block xl:hidden">
                <Button
                  label="Заказать обратный звонок"
                  imageLink="/vector-light.png"
                  theme="dark"
                  disabled={isAgree ? false : true}
                  width="260px"
                  onClick={() => setIsFormSubmitted(true)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalWindow;
