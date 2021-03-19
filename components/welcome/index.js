import { useEffect, useCallback } from 'react';
import styles from '../../styles/Home.module.css';

const Welcome = () => {  
  useEffect(() => {
  }, []);

  useCallback((node) => {
    console.log('- useCallback.....');
    if(node) {
      console.log('- useCallback - node');
    }
  }, []);

  return (
    <h1 className={styles.title}>
        Welcome to <a href="/about">Application Next.js !!!</a>
    </h1>    
  );
}

export default Welcome;