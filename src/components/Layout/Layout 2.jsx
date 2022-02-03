import './Layout.css'
import Nav from '../Layout/Nav/Nav.jsx'
import Footer from '../Layout/Footer/Footer.jsx'

const Layout = (props) => (
  <div className='layout'>
    <Nav />
    <div className="layout-children">
      {props.children}
    </div>
    <Footer />
  </div>
)

export default Layout