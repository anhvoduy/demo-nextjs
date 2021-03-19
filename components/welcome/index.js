import { useEffect, useCallback } from 'react';
import styles from '../../styles/Home.module.css';

const Welcome = () => {  
  useEffect(() => {
    if(utag) {
      utag.view({
        "tealium_event": "product_view",
        "page_type"    : "product_quick_view",
        "page_name"    : "Welcome",
        "product_id"   : ["12345"],
        "product_name" : ["Lucky Shirt"]
      });
    }
    // When page loads
    //trackPageLoad({a: 'a'}); // this will call utag.view(myDataLayer)
    // When button is clicked
    //trackEvent({b: 'b'}); // this will call utag.link(myDataLayer)
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