import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState,useEffect } from "react";


import Aos from "aos";
import "aos/dist/aos.css";
/*import Loader  from '../pages/Loader'*/






function MyApp({ Component, pageProps }: AppProps) {

  /*const [loading, setLoading] = useState(false)
  const router = useRouter();
 

  useEffect(() => {
  router.events.on("routeChangeStart",(url:any)=>{
    console.log("Router is changing....");
    console.log(url);
    setLoading(true);
    NProgress.start();
    
  });
  router.events.on("routeChangeComplete",(url:any)=>{
    console.log("Router is changing is complete");
    console.log(url);
    setLoading(false);
    NProgress.done();
   
  });
  router.events.on("routeChangeError", (err,url:any)=>{
    console.log("Router is changing is Error");
    setLoading(false);
    NProgress.done();

  }
  )
  
})*/

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
            <Component {...pageProps} />
            </>
  )
}

export default MyApp
