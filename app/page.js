import HomePage from "./main/page";
import Sidebar from "./sidebar/page";

const Home = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <HomePage></HomePage>
    </div>
  );
};

export default Home;