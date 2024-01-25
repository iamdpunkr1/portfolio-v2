import Socials from "./Socials"

const Profile = () => {
  return (
    <div className="w-4/12 bg-sky-200 min-h-full rounded-lg flex flex-col gap-5 justify-center items-center">
                   <div className="rounded-full w-[250px] h-[250px]  overflow-hidden ">
                    <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" 
                          alt="Dipankar Prasad"
                           className="w-full h-full "/>
                    </div>
                    <Socials/>
    </div>
  )
}

export default Profile