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
      <div className="border border-[#9c9c9c] xl:h-24 2xl:h-32"></div>
      <div
        className={`flex flex-col justify-center xl:pl-4 2xl:pl-6 ${maxWidth}`}
      >
        <h2
          className={`text-white xl:text-[32px] 2xl:text-[40px] font-semibold ${montserrat.className}`}
        >
          {title}
        </h2>
        <h6
          className={`text-[#ffffff80] font-normal text-base xl:mt-2 2xl:mt-7 hyphens-auto ${raleway.className}`}
        >
          {description}
        </h6>
      </div>
    </div>
  );
};

export default InfoBlock;
