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
    <section className="h-screen">
        <div className="max-w-[1200px] mx-auto  flex flex-col justify-center rounded-lg ">
            <div className="flex gap-2 h-full ">
                <div className="w-8/12">
                    <About/>
                    <TechStack/>
                </div>
                <Profile/>           
            </div>
            
        </div>
        
    </section>
  )
}

export default Hero