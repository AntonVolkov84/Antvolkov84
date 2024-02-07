import { NavLink } from 'react-router-dom';
function Menu() {
  return (
    <nav className="menu">
      <NavLink className="menu__item" to="." end>
        Home
      </NavLink>
      <NavLink className="menu__item" to="about">
        About
      </NavLink>
      <NavLink className="menu__item" to="contacts">
        Contacts
      </NavLink>
    </nav>
  );
}

export default Menu;
