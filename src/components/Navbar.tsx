

const Navbar = () => {
  return (
    <header className="container-md mx-auto px-20 shadow-md ">
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