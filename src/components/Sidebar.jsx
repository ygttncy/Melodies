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
import { Link, useLocation } from "react-router-dom";
import { useState } from "react"; 
import "../styles/components/sidebar.scss";

const Sidebar = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false); // ✅ sidebar durumu

  // Sidebar kapandıktan sonra sayfa değişiminde kapansın diye
  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu */}
      <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <h2 className="sidebar__logo">Melodies</h2>

        <nav className="sidebar__section">
          <p className="sidebar__section-title">Menu</p>
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/" onClick={handleLinkClick}>
                <FaHome /> Home
              </Link>
            </li>
            <li className={location.pathname === "/discover" ? "active" : ""}>
              <Link to="/discover" onClick={handleLinkClick}>
                <FaCompass /> Discover
              </Link>
            </li>
            <li className={location.pathname === "/albums" ? "active" : ""}>
              <Link to="/albums" onClick={handleLinkClick}>
                <FaCompactDisc /> Albums
              </Link>
            </li>
            <li className={location.pathname === "/artists" ? "active" : ""}>
              <Link to="/artists" onClick={handleLinkClick}>
                <FaUserAlt /> Artists
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="sidebar__section">
          <p className="sidebar__section-title">Library</p>
          <ul>
            <li className={location.pathname === "/recently-added" ? "active" : ""}>
              <Link to="/recently-added" onClick={handleLinkClick}>
                <FaClock /> Recently Added
              </Link>
            </li>
            <li className={location.pathname === "/most-played" ? "active" : ""}>
              <Link to="/most-played" onClick={handleLinkClick}>
                <FaPlay /> Most played
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="sidebar__section">
          <p className="sidebar__section-title">Playlist and favorite</p>
          <ul>
            <li className={location.pathname === "/favorites" ? "active" : ""}>
              <Link to="/favorites" onClick={handleLinkClick}>
                <FaHeart /> Your favorites
              </Link>
            </li>
            <li className={location.pathname === "/your-playlist" ? "active" : ""}>
              <Link to="/your-playlist" onClick={handleLinkClick}>
                <FaList /> Your playlist
              </Link>
            </li>
            <li className="add-playlist">
              <Link to="/add-playlist" onClick={handleLinkClick}>
                <FaPlusSquare /> Add playlist
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="sidebar__section">
          <p className="sidebar__section-title">General</p>
          <ul>
            <li className={location.pathname === "/settings" ? "active" : ""}>
              <Link to="/settings" onClick={handleLinkClick}>
                <FaCog /> Setting
              </Link>
            </li>
            <li className="logout">
              <Link to="/logout" onClick={handleLinkClick}>
                <FaSignOutAlt /> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
