import { Route, Routes, Navigate } from "react-router-dom";
import RequireLogin from "./auth/RequireLogin";
import Tweets from "./components/Tweets";
import Header from "./components/Header.js";

import Footer from "./components/Footer";
import Login from "./components/Login";

import "./App.css";

const App = () => {
  return (
    <div id="app">
      <Header />
      <div className="d-flex justify-content-center m-5 pb-5">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/tweets"
            element={
              <RequireLogin>
                <Tweets />
              </RequireLogin>
            }
          />
          <Route path="/" element={<Navigate replace to="/tweets" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
