import React from 'react';
import headercss from './Header.module.css'

function Header(props) {
  const { imgURL, title } = props;

  return (
    <div className={headercss.header_container}>
      <div>
        <img className={headercss.image} src={imgURL} alt="" />
      </div>
      <div>
        <h1>
          {title}
        </h1>
      </div>
    </div>)
}

export default Header;
