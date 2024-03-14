import Image from 'next/image';

interface ButtonProps {
  label?: string;
  imageLink?: string;
  theme?: string;
  disabled?: boolean;
  customRef?: React.MutableRefObject<HTMLButtonElement>;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  imageLink,
  theme = "light",
  disabled = false,
  customRef = null,
  onClick,
}) => {
  return (
    <div
      className={`
        flex 
        xl:w-[303px]
        2xl:w-[380px]
        xl:h-[56px] 
        2xl:h-[71px] 
        ${theme === "light" ? "bg-white" : "bg-transparent border border-white"}
        ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
      ref={customRef}
      onClick={disabled ? () => {} : onClick}
    >
      <div
        className={`
          flex
          items-center 
          xl:ml-4
          2xl:ml-6 
          font-semibold 
          xl:text-[14px]
          2xl:text-[18px] 
          w-full
          ${theme === "light" ? "text-[#0b3461]" : "text-white"}
        `}
      >
        {label || ""}
      </div>
      {imageLink && (
        <div
          className={`
            h-full 
            relative
            xl:min-w-[55px] 
            2xl:min-w-[70px] 
            border-l
            
            ${theme === "light" ? "border-l-[#0b3461]" : "border-l-white"}
          `}
        >
          <Image
            width={22}
            height={22}
            src={imageLink}
            alt=""
            className="absolute xl:right-[10px] 2xl:right-[12px] xl:bottom-[10px] 2xl:bottom-[12px] xl:w-[17px] 2xl:w-[22px] xl:h-[17px] 2xl:h-[22px]"
          />
        </div>
      )}
    </div>
  );
};

export default Button;
