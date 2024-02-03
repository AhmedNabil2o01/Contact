import React from 'react'

export default function Footer() {
    return <>

        <section id='footer'>
            <div className="container text-center pt-5">
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="">LOCATION</h2>
                        <p className='py-2'>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="col-md-4 ">
                        <h2>AROUND THE WEB</h2>
                        <div className=" d-flex justify-content-center">
                            <div class="icon  mx-1 d-flex align-items-center justify-content-center border border-white rounded-circle p-3">
                                <i class="fa-brands fa-facebook"></i>
                            </div>
                            <div class="icon  mx-1 d-flex align-items-center justify-content-center border border-white rounded-circle p-3">
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                            <div class="icon  mx-1 d-flex align-items-center justify-content-center border border-white rounded-circle p-3">
                                <i class="fa-brands fa-linkedin"></i>
                            </div>
                            <div class="icon  mx-1 d-flex align-items-center justify-content-center border border-white rounded-circle p-3">
                                <i class="fa-solid fa-globe"></i>
                            </div>
                        </div>




                    </div>
                    <div className="col-md-4">

                        <h2>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            <div className="footer text-center py-2">
                <p>Copyright © Your Website 2021</p>
            </div>
        </section>

    </>
}
