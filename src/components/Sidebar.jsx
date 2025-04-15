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
    FaSignOutAlt
  } from "react-icons/fa";
  import "../styles/components/sidebar.scss";
  
  const Sidebar = () => {
    return (
      <aside className="sidebar">
        <h2 className="sidebar__logo">Melodies</h2>
  
        <nav className="sidebar__section">
          <p className="sidebar__section-title">Menu</p>
          <ul>
            <li className="active"><FaHome /> Home</li>
            <li><FaCompass /> Discover</li>
            <li><FaCompactDisc /> Albums</li>
            <li><FaUserAlt /> Artists</li>
          </ul>
        </nav>
  
        <nav className="sidebar__section">
          <p className="sidebar__section-title">Library</p>
          <ul>
            <li><FaClock /> Recently Added</li>
            <li><FaPlay /> Most played</li>
          </ul>
        </nav>
  
        <nav className="sidebar__section">
          <p className="sidebar__section-title">Playlist and favorite</p>
          <ul>
            <li><FaHeart /> Your favorites</li>
            <li><FaList /> Your playlist</li>
            <li className="add-playlist"><FaPlusSquare /> Add playlist</li>
          </ul>
        </nav>
  
        <nav className="sidebar__section">
          <p className="sidebar__section-title">General</p>
          <ul>
            <li><FaCog /> Setting</li>
            <li className="logout"><FaSignOutAlt /> Logout</li>
          </ul>
        </nav>
      </aside>
    );
  };
  
  export default Sidebar;
  