import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/DefaultLayout";
import BestPractice from "./pages/BestPractice";
import BuildYourDream from "./pages/BuildYourDream";
import Organizations from "./pages/Organizations";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MarketPlace from "./pages/MarketPlace";

const Home = lazy(() => import("./pages/Home"));
const Social = lazy(() => import("./pages/Social"));
const Conscious = lazy(() => import("./pages/Conscious"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Directory = lazy(() => import("./pages/Directory"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/social"
            element={
              <MainLayout>
                <Social />
              </MainLayout>
            }
          />
          <Route
            path="/conscious"
            element={
              <MainLayout>
                <Conscious />
              </MainLayout>
            }
          />

          <Route
            path="/certifications"
            element={
              <MainLayout>
                <Certifications />
              </MainLayout>
            }
          />

          <Route
            path="/directory"
            element={
              <MainLayout>
                <Directory />
              </MainLayout>
            }
          />

          <Route
            path="/bestpractices"
            element={
              <MainLayout>
                <BestPractice />
              </MainLayout>
            }
          />
              <Route
            path="/buildyourdream"
            element={
              <MainLayout>
                <BuildYourDream />
              </MainLayout>
            }
          />
          <Route
            path="/organizations"
            element={
              <MainLayout>
                <Organizations />
              </MainLayout>
            }
          />
          <Route
            path="/marketplace"
            element={
              <MainLayout>
                <MarketPlace />
              </MainLayout>
            }
          />
        </Routes>
        
      </Suspense>
    </Router>
  );
}

export default App;
