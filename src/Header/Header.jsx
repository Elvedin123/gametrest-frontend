import headercss from './Header.module.css';
function Header(props) {
  const { title } = props;

  return (
    <div className={headercss.header_container}>
      {/* <Nav /> */}
      <div className={headercss.title_box}>
        <h1 className={headercss.title_container}>
          {title}
        </h1>
      </div>
    </div>)
};

export default Header;
