import { Montserrat } from 'next/font/google';
import { FiPhone } from 'react-icons/fi';

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

const Header = () => {
  const headerLinks = [
    "Обо мне",
    "Наставничество",
    "Мероприятия",
    "Кейсы",
    "Отзывы",
    "Контакты",
  ];

  return (
    <header className="w-full flex justify-center">
      <div
        className={`hidden xl:flex justify-between items-center xl:w-[1220px] 2xl:w-[1320px] py-[43px] ${montserrat.className}`}
      >
        <div className="xl:text-xl text-white border-y xl:py-[2px] font-semibold">
          ALEX. SHEVTSOV
        </div>
        <div className="flex justify-center text-white xl:gap-[23px]">
          {headerLinks.map((link) => (
            <nav key={link} className="cursor-pointer xl:text-[14px]">
              {link}
            </nav>
          ))}
        </div>
        <div className="flex items-center">
          <div className="p-[10px] border border-white rounded-full">
            <FiPhone color="white" size={18} />
          </div>
          <div className="text-white ml-[15px] tracking-wider font-semibold text-[18px]">
            8-345-123-34-45
          </div>
        </div>
      </div>
      <div className="xl:hidden justify-between w-full flex px-4 mt-5">
        <div className="text-xl text-white border-y py-[2px] text-[20px] font-semibold">
          ALEX. SHEVTSOV
        </div>
        <div className="flex gap-[10px]">
          <div className="flex flex-col items-center justify-center gap-1 w-10 h-10 rounded-full border">
            <div className="px-2 border"></div>
            <div className="px-2 border"></div>
            <div className="px-2 border"></div>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full border">
            <FiPhone color="white" size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
