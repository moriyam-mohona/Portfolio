const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a href="#" className="text-lg">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="text-lg">
          About
        </a>
      </li>
      <li>
        <a href="#skills" className="text-lg">
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" className="text-lg">
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" className="text-lg">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <img
          src="../../../public/Images/Logo.png"
          alt=""
          className="h-20 w-20 p-3"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://drive.google.com/uc?export=download&id=1AvukU7saD10fTwRTgTeGk_tPq6b7Jh-B"
          className="btn btn-outline border-2 text-lg"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
