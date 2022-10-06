import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Mui.module.css';
import Footer from '../components/footer';

import Customer from '../components/customer';

const Mui = function () {
    return <div className={styles.Container}>
        <Head>
            <title>Material UI</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div>Demo Pagination</div>
          <div className={styles.content}>
            <Customer />
          </div>          
        </main>
        <Footer />
    </div>
};
  
export default Mui;
