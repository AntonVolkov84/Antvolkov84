import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink className="menu__link" to="." end>
        Home
      </NavLink>
      <NavLink className="menu__link" to="about">
        About
      </NavLink>
      <NavLink className="menu__link" to="courses">
        Courses
      </NavLink>
      <NavLink className="menu__link" to="contacts">
        Contacts
      </NavLink>
    </nav>
  );
};
export default Menu;
