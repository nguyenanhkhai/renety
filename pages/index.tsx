import HomeContainer from "containers/HomeContainer/HomeContainer";
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="app-root">
      <HomeLayout>
        <HomeContainer />
      </HomeLayout>
    </div>
  );
};

export default Home;
