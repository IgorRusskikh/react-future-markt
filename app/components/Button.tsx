import Image from 'next/image';

interface ButtonProps {
  label?: string;
  imageLink?: string;
  theme?: string;
}

const Button: React.FC<ButtonProps> = ({
  label = "",
  imageLink,
  theme = "light",
}) => {
  return (
    <div
      className={`
      flex 
      cursor-pointer
      w-[380px] 
      h-[71px] 
      ${theme === "light" ? "bg-white" : "bg-transparent border border-white"}
    `}
    >
      <div
        className={`
        flex 
        justify-center 
        items-center 
        font-semibold 
        text-[18px] 
        w-full
        ${theme === "light" ? "text-[#0b3461]" : "text-white"}
      `}
      >
        {label}
      </div>
      {imageLink && (
        <div
          className={`
          h-full 
          relative 
          min-w-[70px] 
          border-l
          
          ${theme === "light" ? "border-l-[#0b3461]" : "border-l-white"}
        `}
        >
          <Image
            width={22}
            height={22}
            src={imageLink}
            alt=""
            className="absolute right-[12px] bottom-[12px]"
          />
        </div>
      )}
    </div>
  );
};

export default Button;
