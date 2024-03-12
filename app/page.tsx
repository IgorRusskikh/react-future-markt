import Image from 'next/image';

import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Image
        width={525}
        height={808}
        src="/mentor 2.png"
        alt="mentor"
        className="absolute bottom-0 right-[208px]"
      />
      <div className=""></div>
    </>
  );
}
