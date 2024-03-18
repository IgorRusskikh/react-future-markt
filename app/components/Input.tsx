import { Montserrat } from 'next/font/google';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const montserrat = Montserrat({ subsets: ["latin"] });

const Input: React.FC<InputProps> = ({
  type = "",
  placeholder = "",
  value = "",
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full outline-none bg-transparent text-[#cccccc] text-[12px] xl:text-xl pb-[5px] xl:pb-3 px-1 border-b border-b-[#cccccc] ${montserrat.className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
