import { Montserrat } from 'next/font/google';

interface InputProps {
  type?: string;
  placeholder?: string;
}

const montserrat = Montserrat({ subsets: ["latin"] });

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <input
      type={type || ""}
      placeholder={placeholder || ""}
      className={`w-full outline-none bg-transparent text-[#cccccc] text-xl pb-3 px-1 border-b border-b-[#cccccc] ${montserrat.className}`}
    />
  );
};

export default Input;
