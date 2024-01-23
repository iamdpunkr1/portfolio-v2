

const Navbar = () => {
  return (
    <header className="max-w-[1200px] mx-auto rounded-lg bg-emerald-100 shadow-md px-8 my-4">
    <nav className="flex justify-between py-4">
    <div className="h-2">
    <div className="button" data-text="Awesome">
        <span className="actual-text">&nbsp;dpunkr&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;dpunkr&nbsp;</span>
    </div>
    </div>
      <div className="space-x-2">
        <button>
            <span className="box">
                Home
            </span>
        </button>
        <button>
            <span className="box">
                About
            </span>
        </button>
        <button>
            <span className="box">
                Projects
            </span>
        </button>
        <button>
            <span className="box">
                Contact
            </span>
        </button>
      </div>
    </nav>
    </header>
  )
}

export default Navbar