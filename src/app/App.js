import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AppLayout from "./AppLayout";
import Search from "../features/search/Search";
import MyTeams from "../features/teams/MyTeams";

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <AppLayout /> }>
    <Route index element={ <Search />} />
    <Route path="/myTeams" element={ <MyTeams /> } />
  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
