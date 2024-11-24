import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Dynamic Website!</h1>
      <p>Here is some data fetched from the server:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}