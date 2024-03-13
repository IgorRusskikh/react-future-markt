import { Raleway } from 'next/font/google';
import Image from 'next/image';

import Input from './Input';

const raleway = Raleway({ subsets: ["latin"] });

const ModalWindow = () => {
  return (
    <div className="h-full w-[612px] absolute left-0 bg-[#0F1D45]">
      <div className="flex w-full h-full relative">
        <div className="absolute top-10 right-10 cursor-pointer">
          <Image width={33} height={33} src="/close.png" alt="" />
        </div>
        <div className="flex flex-col mt-28 ml-[90px] max-w-[480px]">
          <h1
            className={`text-white text-[50px] font-semibold ${raleway.className}`}
          >
            Закажите обратный звонок
          </h1>
          <div className="flex flex-col mt-16">
            <div className="flex flex-col gap-14">
              <Input placeholder="ИМЯ" />
              <Input placeholder="ТЕЛЕФОН" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
