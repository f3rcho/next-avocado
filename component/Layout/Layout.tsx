import React from 'react';
import Navbar from 'component/Navbar/Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>This is a footer</footer>

      <style jsx>{`
        footer {
          background: salmon;
        }
        div {
          background: pink;
        }
      `}</style>
    </div>
  );
};

export default Layout;
