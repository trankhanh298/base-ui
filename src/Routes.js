import React from "react";
import {Routes, Route} from "react-router-dom";

// const dashboardLazyComponent = React.lazy(() => import('./components/dashboard/dashboard'));
// const helpLazyComponent = React.lazy(() => import("./components/help/help"));
import Dashboard from "./components/dashboard/dashboard";
import Help from "./components/help/help";


export default function AppRoutes() {

    return (
        <React.Suspense fallback={<span>Page Loading...</span>}>
                  <Routes>
                    <Route path="/" element={
                      <React.Suspense fallback={<>...Loading</>}>
                        <Dashboard />
                      </React.Suspense>
                    }/>
                    <Route path="/help" element={
                        <React.Suspense fallback={<>...Loading</>}>
                        <Help />
                      </React.Suspense>
                    }/>
                  </Routes>
        </React.Suspense>
    )

}