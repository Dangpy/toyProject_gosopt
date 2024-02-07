import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import Home from "./pages/Home";
import WeatherInfo from "./components/WeatherInfo";
import ErrorPage from "./pages/ErrorPage";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/day/:area" element={<WeatherInfo />} />
            <Route path="/week/:area" element={<WeatherInfo />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
