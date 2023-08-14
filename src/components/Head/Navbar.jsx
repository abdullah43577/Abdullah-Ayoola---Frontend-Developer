// import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8">
      {/* <img src={logo} alt="logo image" className="w-[300px]" /> */}

      <ul>
        <li>
          <a href="#search">Search</a>
        </li>
      </ul>

      <div className="burger cursor-pointer">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
