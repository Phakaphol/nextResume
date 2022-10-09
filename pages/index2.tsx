import React,{ useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Nav, Button,Card,Row,Col, } from 'react-bootstrap';

import Personal from './Personal'
import Ex  from './Ex'
import Foot from './Foot'

import { resolve } from 'path';


type Props = {}

export default function index3({}: Props) {

 
  return (

    <div>
      <Head>
       <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'/>
      </Head>

       <Nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-xl">
            
            <Link href="#">
              <a className="navbar-brand">HOME</a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07XL">
              <ul className="navbar-nav mr-auto">
               
                <li className="nav-item ms-3">
                  <Link href="#myskills">
                    <a className="nav-link">My Skills</a>
                  </Link>
                </li>
                <li className="nav-item ms-3">
                  <Link href="#Myself">
                    <a className="nav-link">Myself</a>
                  </Link>
                </li>

                <li className="nav-item ms-3">
                  <Link href="#Ex">
                    <a className="nav-link">Experience</a>
                  </Link>
                </li>
                <li className="nav-item ms-3">
                  <Link href="#Contact">
                    <a className="nav-link">Contact</a>
                  </Link>
                </li>
                

              </ul>

            </div>
          </div>
      </Nav>
      

      <section className='AA'>
        <div className='container-fluid Me'>
        
        <h2 id='show_2' >
                 Phakaphol 
                 <span>Phakaphol </span>
                 <span>Phakaphol </span>
                 <span>Robotic Eng. & Web Developer</span> 
             </h2>
        </div>
         
        
      </section>
    
      <div className='step pt-1' id='myskills'>

        

        <div className='row  pb-2'>
          <div className='col-12 step2 d-flex justify-content-center'>
            <h1 className='text-white myself2  mt-5  text-align: center;'>My Skills</h1>
            
          </div>
          

          <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 border p-5'>
            <div className="d-flex justify-content-center">
            <Image 
                className="d-flex justify-content-center" 
                src="/img/programming.png"
                width={180}
                height={150}
                layout="intrinsic"
                alt=""
                data-aos="flip-right"
                priority={true}
              />
            </div>
            <div className='text-white d-flex justify-content-center mb-3 mt-3'>
              <h1>Software Dev<br></br></h1>
            </div>

            <div className='text-white text-center d-flex justify-content-center'>
             
                <p> Nodejs, React, Nextjs, Bootstrap, Zustand, Javascript, Typescript, HTML, CSS, Python, C/C++ ,Sequlize  </p> 
              
            </div>
            
           
        </div>

          <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 border p-5'>
          <div className="d-flex justify-content-center">
            <Image 
                className="d-flex justify-content-center" 
                src="/img/cad.png"
                width={150}
                height={150}
                layout="intrinsic"
                alt=""
                data-aos="flip-right"
                priority={true}
              />
            </div>
            <div className='text-white d-flex justify-content-center mb-3 mt-3'>
              <h1>Design model 2D/3D</h1>
            </div>
          
            <div className='text-white text-center d-flex justify-content-center'>
            
              <p>Solidwork 2D/3D<br></br>Simulator : Force, fluid-flow, Animation<br></br>Circuit Wizard</p>
              
            </div>

          
         

          </div>

          <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 border p-5'>

          <div className="d-flex justify-content-center">
            <Image 
                className="d-flex justify-content-center" 
                src="/img/coaching.png"
                width={180}
                height={150}
                layout="intrinsic"
                alt=""
                data-aos="flip-right"
                priority={true}
              />
            </div>

            <div className='text-white d-flex justify-content-center mb-3 mt-3'>
              <h1>Teaching</h1>
            </div>

            <div className='text-white text-center d-flex justify-content-center'>
              <p>Robotic&Programing tutor<br></br>(2014-2022)</p>
            </div>
            
           
 
          </div>

        </div>
        
        
       
     

      </div>

      <Personal/>
      <Ex/>
      <Foot/>
      

      <section>

      </section>


           

    </div>
    
   

    

      
       
      



 
  )
}

export async function getServerSideProps(){
    await new Promise((resolve)=>{
      setTimeout(resolve,500);
      
    });
    return{
      props:{},
    };
}


