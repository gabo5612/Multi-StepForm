import { BrowserRouter, useRoutes } from "react-router-dom";
import YourInfo from "./Componets/Pages/YourInfo";
import SelectPlan from "./Componets/Pages/SelectPlan";
import AddOns from "./Componets/Pages/Add-ons";
import Summary from "./Componets/Pages/Summary";
import NotFound from "./Componets/Pages/NotFound";
import Main from "./Componets/Main";
import { ContextProvider } from "./Componets/Hooks/Hook";
import { useSpring, animated } from "@react-spring/web";
import ThankYou from "./Componets/Pages/Thankyou";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "Multi-StepForm/", element: <YourInfo /> },
    { path: "Multi-StepForm/plan", element: <SelectPlan /> },
    { path: "Multi-StepForm/addons", element: <AddOns /> },
    { path: "Multi-StepForm/summary", element: <Summary /> },
    { path: "Multi-StepForm/Thank-you", element: <ThankYou /> },
    { path: "Multi-StepForm/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  const animationProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 250,
  });
  return (
    <ContextProvider>
      <BrowserRouter>
        <animated.div style={animationProps}>
          <Main>
            <AppRoutes className={} />
          </Main>
        </animated.div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
