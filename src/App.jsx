import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import {
  About,
  BuildingAutomation,
  Contact,
  ElectricVehiclesChargers,
  EnergyMonitoring,
  Home,
  IndustrialAutomation,
  News,
  OurCompanies,
  Privacy,
  Projects,
  SingleNews,
  SingleProject,
  WiringDevices,
} from "./pages";
/* import Aos from "aos"; */
/* import 'aos/dist/aos.css' */
const App = () => {
  /*   useEffect(() => {
    Aos.init({duration: 1000});
  }, []) */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      /* errorElement:<Erorrpage />, */
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "buildingAutomation",
          element: <BuildingAutomation />,
        },
        {
          path: "industrialAutomation",
          element: <IndustrialAutomation />,
        },
        {
          path: "energyMonitoring",
          element: <EnergyMonitoring />,
        },
        {
          path: "wiringDevices",
          element: <WiringDevices />,
        },
        {
          path: "electricVehiclesChargers",
          element: <ElectricVehiclesChargers />,
        },
        {
          path: "ourCompanies",
          element: <OurCompanies />,
        },
        {
          path: "news",
          element: <News />,
        },
        {
          path: "singleNews/:id",
          element: <SingleNews />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "privacy",
          element: <Privacy />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "categories/:categoryId",
          element: <SingleProject />,
        },
        {
          path: "categories/:categoryId/:subCategoryId",
          element: <SingleProject />,
        },
      ],
    },
  ]);
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};

export default App;
