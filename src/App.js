import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/DefaultLayout";
import BestPractice from "./pages/BestPractice";

const Home = lazy(() => import("./pages/Home"));
const Social = lazy(() => import("./pages/Social"));
const Conscious = lazy(() => import("./pages/Conscious"));
const Certifications = lazy(() => import("./pages/Certifications"));

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
            path="/bestpractices"
            element={
              <MainLayout>
                <BestPractice />
              </MainLayout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
