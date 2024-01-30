
type ProjectProps = {
  imgUrls: string[],
  title:string,
  summary: string,
  description: string,
  skills: string[],
  projectLinks: string[]
}

const Project = ({imgUrls, title, summary, description, skills, projectLinks}: ProjectProps) => {
  return (
    <div className='flex flex-col justify-center h-full'>
        <img src={imgUrls[0]}
              alt={title}
              className="w-full rounded-lg"
                />
            
            <div className="px-2">
                <h2 className="font-bold text-2xl pt-4 pb-2 underline">
                 {title}
                </h2>
                <h6 className="font-semibold text-xl text-slate-700">
                 {summary} 
                </h6>
                <p className="text-slate-500 py-4 text-justify">
                  {description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index)=>(
                    <div key={index} className="bg-white box-shadow text-slate-800 p-2 rounded-lg">
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 py-4">
                  
                  <a href={projectLinks[0]} className="bg-slate-800 text-white rounded-sm px-4 py-2 text-md underline">
                    View Code
                  </a>
                  <a href="" className="bg-slate-800 text-white rounded-sm px-4 py-2 text-md underline">Live Preview</a>
                </div>
            </div>
    </div>
  )
}

export default Project