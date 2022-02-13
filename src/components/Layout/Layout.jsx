import Nav from '../Layout/Nav/Nav.jsx';
import Footer from '../Layout/Footer/Footer.jsx';

const Layout = (props) => (
  <div>
    <Nav />
    <div>
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;
