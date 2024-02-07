import { Outlet } from "react-router-dom";
import Header from "./Header";

const PageLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
