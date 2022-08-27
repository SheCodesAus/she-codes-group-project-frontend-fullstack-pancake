import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/common/Nav";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import AllWorkshopsPage from "./pages/AllWorshopsPage";
import WorkshopDetailPage from "./pages/WorkshopDetailsPage";
import CreateWorkshopPage from "./pages/CreateWorkshopPage";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Router>
      <div id="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/all-workshops" element={<AllWorkshopsPage />} />
          <Route path="/workshop/:id" element={<WorkshopDetailPage />} />
          <Route path="/create-workshop" element={<CreateWorkshopPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
