import React from 'react'
import { useRouter } from 'next/router';
import { useState,useEffect } from "react";
import Head from 'next/head'
type Props = {}

export default function Loader({}: Props) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      console.log('Hello, World!')
      router.push("/index2")
    }, 500);
  })
  
  return (
    <div>
      <Head>
       <title>Clean Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div id="loader">
            <div id="shadow"></div>
            <div id="box"></div>
            
        </div>


    </div>
  )
}



/*export async function getServerSideProps(){
    await new Promise((resolve)=>{
      setTimeout(resolve,5000);
      
    });
    return{
      props:{},
    };
}*/