import React from 'react';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
  <div className={styles.pageContainer}>
    <div className="container">
      <header className="header">
        <h1 > DND Worksheet </h1>
      </header>
    </div>
  </div>
  );
}

export default HomePage;
