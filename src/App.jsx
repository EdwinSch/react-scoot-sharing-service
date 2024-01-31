// Routing Setup
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  BaseLayout,
  LandingPage,
  AboutPage,
  CareersPage,
  LocationPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      // set INDEX Page
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "location",
        element: <LocationPage />,
      },
      {
        path: "careers",
        element: <CareersPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
