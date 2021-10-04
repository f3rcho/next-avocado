import React from 'react';
import Navbar from 'component/Navbar/Navbar';

import styles from './layout.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer>This is a footer</footer>
    </div>
  );
};

export default Layout;
