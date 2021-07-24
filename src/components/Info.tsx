import React from 'react';
import '../styles/Info.scss';
import Image from '../assets/images/example.jpg';

const Info: React.FC = () => (
  <div className="info-display-bg">
    <div className="info-display-container">
      <div className="info-display-header">
        <img src={Image} alt={'Profile'} />
      </div>
      <div className="id-header">Kenny Lee</div>
      <div className="id-body">This is an example of a body</div>
      <div className="id-footer">This is an example of a footer</div>
    </div>
  </div>
);

export default Info;
