import { BrowserRouter, useRoutes } from "react-router-dom";
import YourInfo from "./Componets/Pages/YourInfo";
import SelectPlan from "./Componets/Pages/SelectPlan";
import AddOns from "./Componets/Pages/Add-ons";
import Summay from "./Componets/Pages/Summary";
import NotFound from "./Componets/Pages/NotFound";
import Main from "./Componets/Main";
import { ContextProvider } from "./Componets/Hooks/Hook";
import { useSpring, animated } from '@react-spring/web'

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
  const animationProps =  useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 250,
  })
  return (
    <ContextProvider>
      <BrowserRouter>
      <animated.div style={animationProps}>
        <Main>
          <AppRoutes />   
        </Main>
        </animated.div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
