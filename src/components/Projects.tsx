import Project from "../partials/Project"
// import carDealerImg from "../assets/car_dealer1.png"
import carDealerImg2 from "../assets/car_dealer2.png"
import aeiImg1 from "../assets/aei1.png"
import AICaptionImg from "../assets/AICaption.png"

const Projects = () => {
  return (

    <section className="max-w-[1200px]  mx-auto rounded-lg   mt-4 ">

        <div className="grid grid-cols-1 md:lg:grid-cols-3 gap-2">
           
            <div className="min-h-[300px] p-6 bg-red-100 rounded-lg overflow-hidden shadow-md ">
              <Project imgUrls={["https://private-user-images.githubusercontent.com/65856604/282712956-0417a740-efcc-47d1-b280-93b703c88d8c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY2MzgyODUsIm5iZiI6MTcwNjYzNzk4NSwicGF0aCI6Ii82NTg1NjYwNC8yODI3MTI5NTYtMDQxN2E3NDAtZWZjYy00N2QxLWIyODAtOTNiNzAzYzg4ZDhjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTMwVDE4MDYyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE2YzNjM2M5ZTk0YWY2ZTc2NmRmOTExNzJhOWMyZjhkZmQxOThkN2IyYjhlMzYxOWY5OWFkZmU3M2JjNzkxOTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.3MqOp5s7bK1l_3kd4LAZ0SRiOeU9uG7FO8lD5fpSoQU"]}
                       title="Expense Tracker"
                       summary="Cross platform mobile application"
                       description="Design and developed an Expense Tracker Cross Platform Mobile App for tracking Daily expenses as well as group
                       expenses using React Native, NodeJS, ExpressJS.for servers and MongoDB as database."
                       skills={["React-Native", "NodeJS", "ExpressJS", "MongoDB"]}
                       projectLinks={["https://github.com/iamdpunkr1/Expense_Tracker_ReactNative", "https://github.com/iamdpunkr1/Expense_Tracker_ReactNative"]}
                       />
            </div>

            

            <div className="min-h-[300px] p-6 rounded-lg bg-amber-100 lg:col-span-2 ">
            <Project imgUrls={[carDealerImg2]}
                       title="Auto Dealer"
                       summary="Car Dealer website"
                       description="• Created a car dealership website utilizing ReactJS and TailwindCSS.
                       • Ensured full responsiveness across all devices and incorporated engaging animations."
                       skills={["ReactJS", "TailwindCSS"]}
                       projectLinks={["https://github.com/iamdpunkr1/Expense_Tracker_ReactNative", "https://github.com/iamdpunkr1/Expense_Tracker_ReactNative"]}
                       />
            </div>
            
            <div className="min-h-[300px] p-6 rounded-lg bg-indigo-100 rounded-lg lg:col-span-2">
            <Project imgUrls={[aeiImg1]}
                      title="AEI Attendence PWA"
                       summary="Online Attendence System"
                       description="Developed an online attendance system for my college where faculty members can take attendance for their respective
                       subjects and download detailed reports. Students can also view their attendance records for the courses they are
                       enrolled in, as well as access their daily schedules."
                       skills={["HTML", "CSS", "Javascript", "Firebase", "MaterializeCSS"]}
                       projectLinks={["https://github.com/iamdpunkr1/Expense_Tracker_ReactNative", "https://github.com/iamdpunkr1/Expense_Tracker_ReactNative"]}
                       />
            </div>

            <div className="min-h-[300px] p-6 rounded-lg bg-sky-100 rounded-lg">
            <Project imgUrls={[AICaptionImg]}
                      title="AI Caption Generator"
                       summary="Image Caption Generator using OpenAI Vision"
                       description="Developed a basic Image Caption Generator mobile application using OpenAI Vision API. The model takes an image as input and generates a caption"
                       skills={[ "React-Native", "OpenAI Vision API"]}
                       projectLinks={["https://github.com/iamdpunkr1/Expense_Tracker_ReactNative", "https://github.com/iamdpunkr1/Expense_Tracker_ReactNative"]}
                       />
            </div>
        </div>

    </section>

  )
}

export default Projects