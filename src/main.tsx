import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import { routes } from "./utils/routes.ts";
import Trips from "./pages/Trips.tsx";
import Tracking from "./pages/Tracking.tsx";
import Transportation from "./pages/Transportation.tsx";
import Analytics from "./pages/Analytics.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/index.ts";
const router = createBrowserRouter([
  {
    path:routes.dashboard,
    element: <Dashboard />,
  },
  {
    path:routes.trips,
    element: <Trips />,
  },
  {
    path:routes.tracking,
    element: <Tracking/>,
  },
  {
    path:routes.transportation,
    element: <Transportation />,
  },
  {
    path:routes.analytics,
    element: <Analytics />,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>

    <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
);
