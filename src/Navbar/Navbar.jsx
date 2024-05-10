import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="list-container">
        <li>
          <a href="#presentation">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
