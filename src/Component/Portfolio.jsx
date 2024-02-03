import React from 'react'
import img1 from "../img/poert1 (1).png"
import img2 from "../img/port2.png"
import img3 from "../img/port3.png"

export default function Portfolio() {
   return <>

      <section id='portfolio'>
         <div className=" container px-5">
            <div className="row g-3 pb-5 portofolio-text">
               <div className="col-md-12  text-center ">
                  <h2>PORTFOLIO COMPONENT</h2>

               </div>

               <div className="col-md-12  text-center py-2">
                  <div className="d-flex justify-content-center align-items-center">
                     <span className='line'></span>
                     <i className='fa-solid fa-star px-4'></i>
                     <span className='line'></span>
                  </div>
               </div>

               <div className="col-md-4  text-center ">
                 <div className='card-items'>
                 <img src={img1} className='w-100 rounded-5' alt="" />
                  <div className='items  rounded-5 d-flex justify-content-center align-items-center'>
                 <a data-bs-toggle="modal" data-bs-target="#exampleModal-1"> <i _ngcontent-lxu-c19="" class="text-white fa-solid fa-plus fa-6x"></i></a>
                  </div>
                 </div>
               </div>
               <div className="col-md-4  text-center ">
                 <div className='card-items'>
                 <img src={img2} className='w-100 rounded-5' alt="" />
                  <div className='items  rounded-5 d-flex justify-content-center align-items-center'>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal-2"> <i _ngcontent-lxu-c19="" class="text-white fa-solid fa-plus fa-6x"></i></a>
                  </div>
                 </div>
               </div>
               <div className="col-md-4  text-center ">
                 <div className='card-items'>
                 <img src={img3} className='w-100 rounded-5' alt="" />
                  <div className='items  rounded-5 d-flex justify-content-center align-items-center'>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal-3"> <i _ngcontent-lxu-c19="" class="text-white fa-solid fa-plus fa-6x"></i></a>
                  </div>
                 </div>
               </div>
               <div className="col-md-4  text-center">
                  <div className=' card-items'>
                  <img src={img2} className='w-100 rounded-5' alt="" />
                  <div className='items  rounded-5 d-flex justify-content-center align-items-center'>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal-2"> <i _ngcontent-lxu-c19="" class="text-white fa-solid fa-plus fa-6x"></i></a>
                  </div>
                  </div>
               </div>
               <div className="col-md-4  text-center  ">
                <div className='card-items'>
                <img src={img3} className='w-100 rounded-5' alt="" />
                  <div className='items  rounded-5 d-flex justify-content-center align-items-center'>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal-3"> <i _ngcontent-lxu-c19="" class="text-white fa-solid fa-plus fa-6x"></i></a>
                  </div>
                </div>
               </div>
               <div className="col-md-4  text-center ">
                 <div className='card-items'>
                 <img src={img1} className='w-100 rounded-5' alt="" />
                  <div className='items  rounded-5 d-flex justify-content-center align-items-center'>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal-1"> <i _ngcontent-lxu-c19="" class="text-white fa-solid fa-plus fa-6x"></i></a>
                  </div>
                 </div>
               </div>
            </div>
         </div>
      </section>



      <div class="modal fade bg-dark bg-opacity-75" id="exampleModal-1" tabindex="-1"
            aria-labelledby="exampleModalLabel-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content ">
                    <div class="modal-body p-0 ">
                        <img src={img1} class="w-100" alt="profile img1" />
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade bg-dark bg-opacity-75" id="exampleModal-2" tabindex="-1"
            aria-labelledby="exampleModalLabel-2" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content ">
                    <div class="modal-body p-0 ">
                        <img src={img2} class="w-100" alt="profile img2" />
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade bg-dark bg-opacity-75" id="exampleModal-3" tabindex="-1"
            aria-labelledby="exampleModalLabel-3" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content ">
                    <div class="modal-body p-0 ">
                        <img src={img3} class="w-100" alt="profile img3" />
                    </div>
                </div>
            </div>
        </div>




   </>
}
