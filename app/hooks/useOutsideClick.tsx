import { useEffect, useRef, useState } from 'react';

interface UseOutsideClickProps {
  initialValue: boolean;
}

/* HOOK TO CHECK OUTSIDE CLICKS */
const useOutsideClick = ({ initialValue }: UseOutsideClickProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(initialValue);

  const ref = useRef<HTMLElement | null>(null);

  /* CHECKING WHERE MOUSE WAS CLICKED */
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsClicked(!isClicked);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isClicked]);

  return { ref, isClicked, setIsClicked };
};

export default useOutsideClick;
