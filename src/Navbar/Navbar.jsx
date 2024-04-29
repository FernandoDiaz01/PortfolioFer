import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="list-container">
        <li className="list">
          <a href="#presentation">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};
