import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import  HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => (
    <div className= "headercont">
      <ImageThumbnail/>  
     <div className ="headercont2">
     <HeaderTitle/>
     <HeaderContent/>
    </div>
    </div>
  );

  export default HeaderContainer;
