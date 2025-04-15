import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
