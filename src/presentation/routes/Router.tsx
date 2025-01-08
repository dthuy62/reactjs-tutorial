import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RoutePath} from "../../data/constants/RoutePath.ts";
import HomePage from "../pages/home/HomePage.tsx";


export default function Router() {
  console.log('fsdffdfdfsdsdffdsfsdsdfdsfdsdsfdf')
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RoutePath.home}
          element={<HomePage />}
        />
      </Routes>

    </BrowserRouter>
  )
}
