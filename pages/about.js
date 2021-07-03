import {useEffect} from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';

const About = function () {
    useEffect(() => {
        console.log('- useEffect - about .....');
    }, []);

    return <div className={styles.container}>
        <Head>
            <title>About Us</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <h1 className="title">
                <a href="/index">Back to home</a>
            </h1>
            <div>About Us</div>
        </main>
        <Footer />
    </div>
};
  
export default About;
