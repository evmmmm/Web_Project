import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
      <div>
          <h1 className={styles.heading}>Welcome to My Dynamic Website!</h1>
          <p>Here is some data fetched from the server:</p>
      </div>
  );
}