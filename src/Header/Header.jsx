import React from 'react';
import headercss from './Header.module.css'
import Nav from '../components/Layout/Nav/Nav.jsx'
function Header(props) {
  const { title } = props;

  return (
    <div className={headercss.header_container}>
      {/* <Nav /> */}
      <div>
        <h1 className={headercss.title_container}>
          {title}
        </h1>
      </div>
    </div>)
}

export default Header;
