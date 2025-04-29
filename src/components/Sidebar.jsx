import {
  FaHome,
  FaCompass,
  FaCompactDisc,
  FaUserAlt,
  FaClock,
  FaPlay,
  FaHeart,
  FaList,
  FaPlusSquare,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // ✅ useLocation import ettik
import "../styles/components/sidebar.scss";

const Sidebar = () => {
  const location = useLocation(); // ✅ Current route location

  return (
    <aside className="sidebar">
      <h2 className="sidebar__logo">Melodies</h2>

      <nav className="sidebar__section">
        <p className="sidebar__section-title">Menu</p>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li className={location.pathname === "/discover" ? "active" : ""}>
            <Link to="/discover">
              <FaCompass /> Discover
            </Link>
          </li>
          <li className={location.pathname === "/albums" ? "active" : ""}>
            <Link to="/albums">
              <FaCompactDisc /> Albums
            </Link>
          </li>
          <li className={location.pathname === "/artists" ? "active" : ""}>
            <Link to="/artists">
              <FaUserAlt /> Artists
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="sidebar__section">
        <p className="sidebar__section-title">Library</p>
        <ul>
          <li
            className={location.pathname === "/recently-added" ? "active" : ""}
          >
            <Link to="/recently-added">
              <FaClock /> Recently Added
            </Link>
          </li>
          <li className={location.pathname === "/most-played" ? "active" : ""}>
            <Link to="/most-played">
              <FaPlay /> Most played
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="sidebar__section">
        <p className="sidebar__section-title">Playlist and favorite</p>
        <ul>
          <li className={location.pathname === "/favorites" ? "active" : ""}>
            <Link to="/favorites">
              <FaHeart /> Your favorites
            </Link>
          </li>
          <li
            className={location.pathname === "/your-playlist" ? "active" : ""}
          >
            <Link to="/your-playlist">
              <FaList /> Your playlist
            </Link>
          </li>
          <li className="add-playlist">
            <Link to="/add-playlist">
              <FaPlusSquare /> Add playlist
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="sidebar__section">
        <p className="sidebar__section-title">General</p>
        <ul>
          <li className={location.pathname === "/settings" ? "active" : ""}>
            <Link to="/settings">
              <FaCog /> Setting
            </Link>
          </li>
          <li className="logout">
            <Link to="/logout">
              <FaSignOutAlt /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
