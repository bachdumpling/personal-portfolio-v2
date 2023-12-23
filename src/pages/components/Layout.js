// src/components/Layout.js

import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children, hideNavFooter }) => {
  return (
    <div>
      {!hideNavFooter && <Nav />}
      <main>{children}</main>
      {!hideNavFooter && <Footer />}
    </div>
  );
};

export default Layout;
