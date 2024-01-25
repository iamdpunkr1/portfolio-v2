// import photo from "../assets/photo.jpg"
// import react from "../assets/react.svg"
// import nodejs from "../assets/nodejs-icon.svg"
// import mongodb from "../assets/mongodb.svg"
// import express from "../assets/express.svg"

import About from "../partials/About"
import Profile from "../partials/Profile"
import TechStack from "../partials/TechStack"

const Hero = () => {
  return (
    <section className="">
        <div className="max-w-[1200px] mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-2 md:lg:gap-4 transition-all duration-500">
                
                <div className="col-auto md:col-start-1 md:col-end-2 lg:col-start-1 lg:col-end-3 ">
                    <About/>
                </div>

                <div className="col-auto md:col-start-2 md:col-end-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3">
                    <Profile/>
                </div> 
                
                <div className="col-span-full lg:col-start-1 lg:col-end-3">
                     <TechStack/>
                </div>          
            </div>
            
        </div>
        
    </section>
  )
}

export default Hero