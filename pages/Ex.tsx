import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Nav, Button,Card,Row,Col, } from 'react-bootstrap';

type Props = {}

export default function Ex({}: Props) {
  return (
    <div>
      <section id="Ex" className="Ex Ex-bg "> 
      <div className="container">

        <div className=" d-flex justify-content-center">
          <h1 className='Ex-title mb-5 mt-5 text-white' data-aos="fade-in">Experience</h1>
        </div>

        <div className="row mt-5">
          
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 d-flex justify-content-center" data-aos="fade-right">
            <div className="card">
              <div className="card-img">
                
              <Image 
                className="img-fluid"  
                src="/img/PR1.jpg" 
                width={650}
                height={550}
                layout="intrinsic"
                alt=""
                data-aos="flip-right"
              />
             
              </div>
              <div className="card-body ">
                <h5 className="card-title h5"><p>Mobile Robot</p></h5>
                <p className="card-text ">Design model 2D/3D <br></br><br></br>  Central Institute of Forensic Science(CIFS) <br></br><span className='SPEX'>Solidworks</span></p>
                
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 d-flex justify-content-center" data-aos="fade-left">
            <div className="card">
              <div className="card-img">
              <Image 
                className="img-fluid" 
                src="/img/PR2.png"
                width={650}
                height={550}
                layout="intrinsic"
                alt=""
                data-aos="flip-right"
              />
              </div>
              <div className="card-body">
                <h5 className="card-title"><p>Robot USR-AP90</p></h5>
                <p className="card-text">Co-Researcher design model 2D/3D ,UX/UI ,Vision <br></br><br></br> Uni Arc Co., Ltd. <br></br> <span className='SPEX'>Solidworks , circuit-wizard ,Qt-disigner ,Python </span></p>
                <div className="read-more"><a href="https://www.youtube.com/watch?v=Zd7QziHcn_Q"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>

          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 d-flex justify-content-center" data-aos="fade-right">
            <div className="card">
              <div className="card-img">
              <Image 
                className="img-fluid" 
                src="/img/PR4.png"
                width={650}
                height={450}
                layout="intrinsic"
                alt=""
                data-aos="flip-right"
              />
              </div>
              <div className="card-body">
                <h5 className="card-title"><p>Web-Application(VM)<br></br>EPOW System </p></h5>
                <p className="card-text">designer and maker FrontEnd ,Backend ,ORM ,Database  <br></br><br></br> Electricity Generating Authority of Thailand(EGAT) <br></br><span className='SPEX'>HTML ,CSS ,Bootstrap5 ,JS ,Jquery ,Ajax ,Sequlize,SQL ,NodeJS ,Express</span></p>
                
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 d-flex justify-content-center" data-aos="fade-left">
            <div className="card">
              <div className="card-img">
              <Image 
                className="img-fluid" 
                src="/img/PR5.png"
                width={650}
                height={450}
                layout="intrinsic"
                alt=""
                data-aos="flip-right"
              />
              </div>
              <div className="card-body">
                <h5 className="card-title"><p>Web-Application(Local)<br></br>EPOW System</p></h5>
                <p className="card-text">designer and coder  FrontEnd ,Backend  <br></br><br></br> Electricity Generating Authority of Thailand(EGAT) <br></br><span className='SPEX'>HTML ,CSS ,Bootstrap5 ,JS ,JQreay ,Ajax ,C/C++ </span></p>
               
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 d-flex justify-content-center" data-aos="fade-right">
            <div className="card">
              <div className="card-img">
              <Image 
                className="img-fluid" 
                src="/img/PR7.png"
                width={650}
                height={450}
                layout="intrinsic"
                alt=""
                data-aos="flip-right"
              />
             
              </div>
              <div className="card-body">
                <h5 className="card-title"><p>founder LearnAbout team</p></h5>
                <p className="card-text">Lecturer for Robot&programming <br></br>for student and teacher of disadvantaged schools<br></br>educational sales/interior design</p>
                <div className="read-more"><a href="https://www.facebook.com/LearnAbout2021"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 d-flex justify-content-center" data-aos="fade-right">
            <div className="card">
              <div className="card-img">
              <Image 
                className="img-fluid" 
                src="/img/PR9.png"
                width={650}
                height={450}
                layout="intrinsic"
                alt=""
                data-aos="flip-right"
              />
             
              </div>
              <div className="card-body">
                <h5 className="card-title"><p>Design Education Solution <br></br>1,722 disadvantaged schools</p></h5>
                <p className="card-text">desing Education Solution <br></br><br></br>Office of National Digital Economy and Society Commission(ONDE)</p>
               
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center" data-aos="fade-right">
            <div className="card">
              <div className="card-img">
              <Image 
                className="img-fluid" 
                src="/img/WRO2.jpg"
                width={650}
                height={450}
                layout="intrinsic"
                alt=""
                data-aos="flip-right"
              />
             
              </div>
              <div className="card-body">
                <h5 className="card-title"><p>The Thai national team in <br></br>the World Robot Championship at Qatar.</p></h5>
                <p className="card-text">type Robot Soccer <br></br><br></br>Word Robot Olmypic (WRO2015)</p>
               
              </div>
            </div>
          </div>

          




        </div>

      </div>
    </section>



    </div>
  )
}