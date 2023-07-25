import { BrowserRouter, useRoutes } from "react-router-dom";
import YourInfo from "./Componets/Pages/YourInfo";
import SelectPlan from "./Componets/Pages/SelectPlan";
import AddOns from "./Componets/Pages/Add-ons";
import Summay from "./Componets/Pages/Summary";
import NotFound from "./Componets/Pages/NotFound";
import Main from "./Componets/Main";
import { ContextProvider } from "./Componets/Hooks/Hook";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <YourInfo /> },
    { path: "plan", element: <SelectPlan /> },
    { path: "addons", element: <AddOns /> },
    { path: "summary", element: <Summay /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Main>
          <AppRoutes />
          
        </Main>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
