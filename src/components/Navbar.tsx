

const Navbar = () => {
  return (
    <header className="container-md mx-auto px-20 shadow">
    <nav className="flex justify-between p-4 font-bold antialiased">
      <h1 className="text-lg">Dpunkr.dev</h1>
      <div className="space-x-4">
        <a href="/">Home</a>
        <a href="/create">About</a>
        <a href="/about">Projects</a>
        <a href="/about">Contact</a>
      </div>
    </nav>
    </header>
  )
}

export default Navbar