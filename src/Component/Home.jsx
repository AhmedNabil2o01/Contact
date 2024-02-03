import React from 'react'
import img from "../img/avataaars.svg"
export default function Home() {
    return <>
        <section id='home'>
            <div className=" container text-white px-5">
                <div className="row">
                <div className="col-md-12  text-center py-5">
                        <img src={img} alt="" className='w-25'/>

                    </div>
                    <div className="col-md-12  text-center ">
                        <h2>START FRAMEWORK</h2>

                    </div>

                    <div className="col-md-12  text-center py-2">
                       <div className="d-flex justify-content-center align-items-center">
                        <span></span>
                        <i className='fa-solid fa-star px-4'></i>
                        <span></span>
                       </div>
                    </div>

                    <div className="col-md-12  text-center">
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}
