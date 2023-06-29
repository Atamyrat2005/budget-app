import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layouts
import Main, { mainLoader } from "./layouts/Main";

// actions
import { logoutAction } from "./actions/logout";

// Routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: mainLoader,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error></Error>
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ]
  },
  
]);

function App() {
  return <div className="App">
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </div>;
}

export default App
