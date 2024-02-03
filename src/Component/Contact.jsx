import React from 'react'

export default function Contact() {
    return <>

        <section id='contact'>
            <div className=" container px-5">
                <div className="row portofolio-text">
                    <div className="col-md-12  text-center mt-3 ">
                        <h2>CONATCT SECTION</h2>

                    </div>

                    <div className="col-md-12  text-center py-2">
                        <div className="d-flex justify-content-center align-items-center">
                            <span className='line'></span>
                            <i className='fa-solid fa-star px-4'></i>
                            <span className='line'></span>
                        </div>
                    </div>

                    <div className="col-md-12 text-center pt-5">
                        <div className="mb-3 pt-5">
                            <input type="text" className="form-control" placeholder="userName" />
                        </div>
                        <div className="mb-3 pt-5">
                            <input type="text" className="form-control" placeholder="userAge" />
                        </div>
                        <div className="mb-3 pt-5">
                            <input type="text" className="form-control" placeholder="userEmail" />
                        </div>
                        <div className="mb-3 pt-5">
                            <input type="text" className="form-control" placeholder="userPassword" />
                        </div>
                        <button type="button" class="btn btn-form my-3">send Message</button>
                    </div>
                </div>
            </div>
        </section>







    </>
}
