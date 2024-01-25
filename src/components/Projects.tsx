
const Projects = () => {
  return (

    <section className="max-w-[1200px] h-[400px] mx-auto rounded-lg  shadow-md  mt-4 ">

        <div className="grid grid-cols-3 gap-4">
            <div className="h-[200px] bg-red-100 rounded-lg">Project 1</div>
            <div className="h-[200px] bg-slate-100 col-span-2">Project 2</div>
            <div className="h-[200px] bg-indigo-100 rounded-lg col-span-2">Project 3</div>
            <div className="h-[200px] bg-sky-100 rounded-lg">Project 4</div>
        </div>

    </section>

  )
}

export default Projects