import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import { Suspense, lazy } from "react";
import LoginTemplate from "./templates/LoginTemplate/LoginTemplate";
export const history = createBrowserHistory();
// const CheckoutTemplateLazy = lazy(() =>
//   import("./templates/CheckoutTemplate/CheckoutTemplate")
// );
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <Route path="/register" exact Component={Register} />

        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />
        <LoginTemplate path="/login" exact Component={Login} />
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
