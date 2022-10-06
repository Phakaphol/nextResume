import React,{ useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Nav, Button,Card,Row,Col, } from 'react-bootstrap';

import Personal from './Personal'
import Ex  from './Ex'
import Foot from './Foot'


type Props = {}

export default function index3({}: Props) {

 
  return (

    <div>
      <Head>
       <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
              />
            </div>
          
              
            <h1 className='text-white d-flex justify-content-center '>Software Dev<br></br></h1>
            
            <div className='row '>

            <div className='col'>
            <ul className='text-white '>
              <li className='d-flex justify-content-center'>Frameworks : Nodejs , React , Nextjs ,Bootstrap Zustand ReduxToolkit </li>
              <li className='d-flex justify-content-center'>Program : Javascript , Typescript , HTML ,CSS , Python ,C/C++ </li>
              <li className='d-flex justify-content-center'>ORM : Sequlize</li>
              
            </ul>

            </div>

           
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
              />
            </div>
          <h1 className='text-white d-flex justify-content-center mb-3 mt-3' >Design model 2D/3D</h1>

          <ul className='text-white '>
              <li className='d-flex justify-content-center'>Solidwork 2D/3D</li>
              <li className='d-flex justify-content-center'>Simulator : Force , fluid-flow , Animation</li>
              <li className='d-flex justify-content-center'>Circuit Wizard</li>
          </ul>
         

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
              />
            </div>

          <h1 className='text-white d-flex justify-content-center mt-3 ms-4 mb-3'>Teaching</h1>
            <ul className='text-white'>
                <li className='d-flex justify-content-center'>Robotic&Programing tutor</li>
                <li className='d-flex justify-content-center'>(2016-2022)</li>
            </ul>
 
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