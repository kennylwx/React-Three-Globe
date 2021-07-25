import React, { useRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/Header.scss';

interface Props {
  infoDisplayBgElem: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<Props> = (props: Props) => {
  const headerElem = useRef<HTMLDivElement>(null);

  const stickyHeader = (
    header: HTMLElement,
    infoDisplayBgElem: HTMLElement,
  ) => {
    if (header != null) {
      let sticky = header.offsetTop;
      console.log(infoDisplayBgElem.offsetTop);
      console.log(header.offsetTop);

      if (window.pageYOffset > sticky) {
        console.log('add sticky');
        header.classList.add('sticky');
      } else {
        console.log('remove sticky');
        header.classList.remove('sticky');
      }
    }
  };

  useEffect(() => {
    if (props.infoDisplayBgElem.current != null) {
      props.infoDisplayBgElem!.current.addEventListener('scroll', (e) => {
        if (headerElem.current != null && props.infoDisplayBgElem.current) {
          stickyHeader(headerElem.current, props.infoDisplayBgElem.current);
        }
      });
    }
  }, [props.infoDisplayBgElem]);

  return (
    <div ref={headerElem} className="header-title">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Hello World!')
            .pauseFor(1000)
            .deleteAll()
            .typeString("I'm Kenny 😎")
            .callFunction(() => {
              // Remove cursor
              const cursor = document.getElementsByClassName(
                'Typewriter__cursor ',
              )[0];

              setTimeout(() => {
                (cursor as HTMLElement).style.visibility = 'hidden';
              }, 2400);
            })
            .start();
        }}
      />
    </div>
  );
};

export default Header;
