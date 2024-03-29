import Socials from "./Socials"
import profilepic from "../assets/picofme2.png"
const Profile = () => {
  return (
    <div className="h-full rounded-xl flex flex-col justify-center items-center p-4 bg-slate-100 box-shadow border-solid border-slate-600">
                   {/* <div className="rounded-full overflow-hidden "> */}
                    <img src={profilepic}
                          alt="Dipankar Prasad"
                           className="w-7/12 h-7/12 "/>
                    {/* </div> */}

                    <p className="mt-4 font-semibold uppercase tracking-wide underline">Dipankar Prasad</p>
                    <p>Connect with me</p>
                    <Socials/>
    </div>
  )
}

export default Profile