import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Question1 from "./containers/Question1";
import Question2 from "./containers/Question2";
import Question3 from "./containers/Question3";
import Question4 from "./containers/Question4";
import Question5 from "./containers/Question5";
import Question6 from "./containers/Question6";
import Question7 from "./containers/Question7";
import Question8 from "./containers/Question8";
import Question9 from "./containers/Question9";
import Question10 from "./containers/Question10";
import Question11 from "./containers/Question11";
import Result from "./containers/Result";
import NotFound from "./containers/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/question1" exact component={Question1} />
    <Route path="/question2" exact component={Question2} />
    <Route path="/question3" exact component={Question3} />
    <Route path="/question4" exact component={Question4} />
    <Route path="/question5" exact component={Question5} />
    <Route path="/question6" exact component={Question6} />
    <Route path="/question7" exact component={Question7} />
    <Route path="/question8" exact component={Question8} />
    <Route path="/question9" exact component={Question9} />
    <Route path="/question10" exact component={Question10} />
    <Route path="/question11" exact component={Question11} />
    <Route path="/Result" exact component={Result} />
    <Route component={NotFound} />
  </Switch>;
  { /* Finally, catch all unmatched routes */ }
