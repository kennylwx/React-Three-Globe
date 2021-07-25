import React, { useRef } from 'react';
import '../styles/Info.scss';
import Header from './Header';
import ProfileImage from '../assets/images/kenny.jpg';

const Info: React.FC = () => {
  const infoDisplayBgElem = useRef<HTMLDivElement>(null);

  return (
    <div className="info-display-bg" ref={infoDisplayBgElem}>
      <Header infoDisplayBgElem={infoDisplayBgElem} />
      <div className="info-display-container">
        <div className="info-display-header">
          <img src={ProfileImage} alt={'Profile'} />
        </div>
        <div className="id-header">Kenny Lee</div>
        <div className="id-body">This is an example of a body</div>
        <div className="id-footer">This is an example of a footer</div>
      </div>
    </div>
  );
};

export default Info;
