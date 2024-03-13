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
    <div className="w-full flex justify-center">
      <div
        className={`flex justify-between items-center w-[1320px] py-[43px] ${montserrat.className}`}
      >
        <div className="text-xl text-white border-y py-[2px] text-[20px] font-semibold">
          ALEX. SHEVTSOV
        </div>
        <div className="flex text-white gap-[30px]">
          {headerLinks.map((link) => (
            <div key={link} className="cursor-pointer">
              {link}
            </div>
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
    </div>
  );
};

export default Header;
