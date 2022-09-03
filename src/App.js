import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/common/Nav";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import AllWorkshopsPage from "./pages/AllWorshopsPage";
import WorkshopDetailPage from "./pages/WorkshopDetailsPage";
import CreateWorkshopPage from "./pages/CreateWorkshopPage";
import GetStartedPage from "./pages/GetStartedPage";
import Footer from "./components/common/Footer";
// import Search from "./components/common/Search";

function App() {
  return (
    <Router>
      <div id="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/all-workshops" element={<AllWorkshopsPage />} />
          <Route path="/workshop/:id" element={<WorkshopDetailPage />} />
          <Route path="/create-workshop" element={<CreateWorkshopPage />} />
          {/* <Route path="/search-workshop" element={<Search/>} /> */}

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
