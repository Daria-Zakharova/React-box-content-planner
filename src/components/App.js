import { Boxes } from "pages/Boxes";
import { Home } from "pages/Home";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/react-box-content-planner/" element={<SharedLayout/>}>
    <Route path="/react-box-content-planner/" element={<Home/>}/>
    <Route path="/react-box-content-planner/boxes" element={<Boxes/>}/>
  </Route>
  )
);

export const App = () => {
return <RouterProvider router = {router}/>
}
