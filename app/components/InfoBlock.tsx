import { Montserrat, Raleway } from 'next/font/google';

interface InfoBlockProps {
  title: string;
  description: string;
  maxWidth?: string;
}

const montserrat = Montserrat({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

const InfoBlock: React.FC<InfoBlockProps> = ({
  title = "",
  description = "",
  maxWidth = "",
}) => {
  return (
    <div className="flex items-center">
      <div className="border border-[#9c9c9c] h-[35px] xl:h-24 2xl:h-32"></div>
      <div
        className={`flex flex-col justify-center pl-[8px] xl:pl-4 2xl:pl-6 ${maxWidth}`}
      >
        <h2
          className={`${montserrat.className} text-white text-[16px] xl:text-[32px] 2xl:text-[40px] font-semibold`}
        >
          {title}
        </h2>
        <h6
          className={`${raleway.className} text-[#ffffff80] font-normal text-[10px] xl:text-base xl:mt-2 2xl:mt-7 hyphens-auto`}
        >
          {description}
        </h6>
      </div>
    </div>
  );
};

export default InfoBlock;
