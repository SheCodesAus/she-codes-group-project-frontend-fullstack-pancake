import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/common/Nav/NavFull";
import NavDrawer from "./components/common/Nav/NavDrawer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import AllWorkshopsPage from "./pages/AllWorshopsPage";
import WorkshopDetailPage from "./pages/WorkshopDetailsPage";
import CreateWorkshopPage from "./pages/CreateWorkshopPage";
import GetStartedPage from "./pages/GetStartedPage";
import Footer from "./components/common/Footer";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <Router>
      <div id="App">
        <Nav />
        <NavDrawer />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/all-workshops" element={<AllWorkshopsPage />} />
          <Route path="/workshop/:id" element={<WorkshopDetailPage />} />
          <Route path="/create-workshop" element={<CreateWorkshopPage />} />
          <Route path="/user-profile/:id" element={<UserProfilePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
