import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";




function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    Aos.init({
      easing: "ease-in-out",
      once: false,
     
    });
  }, []);


  return   <>
            <Component {...pageProps} />
          </>
}

export default MyApp
