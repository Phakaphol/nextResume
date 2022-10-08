import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Nav, Button,Card,Row,Col, } from 'react-bootstrap';

type Props = {}

export default function Personal({}: Props) {
  return (
    <div>

    <section className='BB' id='Myself'>
      <div className='container-fluid my p-5'> 

        <div className='d-flex justify-content-center'>
          <h1 className='myself mt-5 text-white' data-aos="fade-in" data-aos-duration="4000">Myself</h1>
        </div>
     
        <div className='d-flex justify-content-center'>

        <div className="sudo d-flex justify-content-center mt-5"></div>

        </div>
        
      
           
              
          
          
        <div className='row'> 

        <div className='col'>

          <div className='row d-flex justify-content-center'>

            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-5 col-xxl-5 mt-5  '>
              <Card className='p-3'>
              <div className=' d-flex justify-content-start p-1 '>
                  <h3 className=' his ms-4 text-black border-bottom border-4 border-dark'>Personal</h3>
              </div>
                <div className=' d-flex justify-content-start  '>
                  <h5  className=' his2 ms-4 mt-3  text-black'> 
                  Phakaphol Sangkaew(Clean)<br></br><br></br>  4 september 1997 <br></br><br></br> 25 year<br></br><br></br> 083-024-7520<br></br><br></br>Email: cleanfibo@gmail.com
                  </h5>
                </div>    

              </Card>

            <Card className='bg-dark mt-5 p-3' >
              <div className=' d-flex justify-content-start '>
                    <h3  className=' his2 ms-4 mt-3 text-white border-bottom border-4'> 
                      Work Experience
                    </h3>
              </div>

              <div className=' d-flex justify-content-start '>
                <h5  className=' his2 ms-4 mt-3 text-white'> 
               UNIARC CO.,LTD. <br></br><span className='h6'>Project Engineer (2019-2020)</span>
                </h5>
              </div>

              <div className=' d-flex justify-content-start '>
                
                <h5  className=' his2 ms-4 mt-3 text-white'> 
                   PK Control Solution <br></br><span className='h6'>Project Engineer (2020-2022)</span>
                </h5>
              </div>

            </Card>
            </div>

            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-5 col-xxl-5 mt-5'>

            <Card className='bg-dark p-3'>
              <div className=' d-flex justify-content-start '>
                    <h3  className=' his2 ms-4  text-white border-bottom border-4'> 
                      Education
                    </h3>
              </div>

              <div className=' d-flex justify-content-start '>
                <h5  className=' his2 ms-4 mt-3 mb-4 text-white'> 
                High School <br></br> <span className='h6'>Thanyaburi School(Sci-Math)</span>
                </h5>
              </div>

              <div className=' d-flex justify-content-start '>
                
                <h5  className=' his2 ms-4 mt-3 mb-4 text-white'> 
                    Bachelor s Degree <br></br> 
                    <span className='h6'>Institute of Field Robotics (FIBO)<br></br>
                    Major in Robotic and Automation<br></br>
                    King mongkut,s University of TechnologyThonburi<br></br>(KMUTT)</span>
                   
                </h5>
              </div>
            </Card>


          <Card className='mt-5 p-3'>
            <div className=' d-flex justify-content-start'>
                <h3 className=' his ms-4 mt-3 text-black border-bottom border-4 border-dark'>Language </h3>
            </div>
              <div className=' d-flex justify-content-start'>
                <h5  className=' his2 ms-4 mt-3  text-black'> 
                English <br></br> <span className='h6'> Upper Waystage(Wall street level)</span><br></br><br></br>
                Thai <br></br><span className='h6'>native</span>  
                </h5>
                
              </div>   
             
          </Card>


            </div>

      </div>

            
              
        </div>
      </div>
      
    </div>
    

  </section>

  


    </div>
  )
}