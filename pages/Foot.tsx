import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Nav, Button,Card,Row,Col, } from 'react-bootstrap';

type Props = {}

export default function Foot({}: Props) {
  return (
    <div>

<section className='CT' id='Contact'>
      <div className='container-fluid CTB'>

        <div className='d-flex align-items-center justify-content-center'>
            <h1 className='hvr-wobble-top text-white   mt-5' data-aos="fade-in">Contact Me</h1>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
                    <Image 
                    className="img-fluid hero-bg-1 up-down-animation" 
                    src="/img/background-shape/feature-bg-2.png" 
                    width={95}
                    height={95}
                    layout="fixed"
                    alt=""
                    />
                    
                    <Image 
                    className="img-fluid hero-bg-2 left-right-animation" 
                    src="/img/background-shape/seo-ball-1.png"  
                    width={48}
                    height={48}
                    layout="fixed"
                    alt="" 
                    />
                    <Image 
                    className="img-fluid hero-bg-3 left-right-animation" 
                    src="/img/background-shape/seo-half-cycle.png" 
                    width={149}
                    height={112}
                    layout="fixed"
                    alt=""
                    />
                    <Image 
                    className="img-fluid hero-bg-4 up-down-animation" 
                    src="/img/background-shape/green-dot.png" 
                    width={70}
                    height={70}
                    layout="fixed"
                    alt=""
                    />
                    <Image 
                    className="img-fluid hero-bg-5 left-right-animation" 
                    src="/img/background-shape/blue-half-cycle.png" 
                    width={110}
                    height={110}
                    layout="fixed"
                    alt="" />
                    <Image 
                    className="img-fluid hero-bg-6 up-down-animation" 
                    src="/img/background-shape/seo-ball-1.png" 
                    width={125}
                    height={125}
                    layout="fixed"
                    alt=""
                    />
                    <Image 
                    className="img-fluid hero-bg-7 left-right-animation" 
                    src="/img/background-shape/yellow-triangle.png" 
                    width={85}
                    height={85}
                    layout="fixed"
                    alt=""
                    />
                    <Image 
                    className="img-fluid hero-bg-8 up-down-animation" 
                    src="/img/background-shape/service-half-cycle.png" 
                    width={79}
                    height={96}
                    layout="fixed"
                    alt=""
                    />
                    <Image 
                    className="img-fluid hero-bg-9 up-down-animation" 
                    src="/img/background-shape/team-bg-triangle.png" 
                    width={104}
                    height={104}
                    layout="fixed"
                    alt=""
                    />
                </div>

                <div className='d-flex align-items-center justify-content-center'>
                <a href="mailto:cleanfibo@gmail.com"><Button className ="button-85 btn-lg h1" role="button">Say Hello</Button></a>
                  
                </div>

         

        
      


      </div>

    </section>







    </div>
  )
}