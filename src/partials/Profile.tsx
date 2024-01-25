import Socials from "./Socials"

const Profile = () => {
  return (
    <div className=" bg-sky-200  h-full rounded-lg flex flex-col gap-5 justify-center items-center">
                   <div className="rounded-full overflow-hidden ">
                    {/* <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" 
                          alt="Dipankar Prasad"
                           className="w-full h-full "/> */}
                    </div>
                    <Socials/>
    </div>
  )
}

export default Profile