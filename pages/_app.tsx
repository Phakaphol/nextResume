import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState,useEffect } from "react";
import { useRouter } from 'next/router';

import Aos from "aos";
import "aos/dist/aos.css";
import Loader  from '../components/Loader'





function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  useEffect(() => {
  router.events.on("routeChangeStart",(url:any)=>{
    console.log("Router is changing....");
    setLoading(true);
  });
  router.events.on("routeChangeComplete",(url:any)=>{
    console.log("Router is changing is complete");
    setLoading(false);
  });
})

  

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    Aos.init({
      easing: "ease-in-out",
      once: false,
     
    });
  }, []);


  return(   <>
            {loading && <Loader/>}
            <Component {...pageProps} />
          </>
  )
}

export default MyApp
