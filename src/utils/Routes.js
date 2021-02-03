import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Tables from "../components/Tables";
import Desks from "../components/Desks";
import Chairs from "../components/Chairs";
import Lamps from "../components/Lamps";
import Home from "../Home";

function Routes() {
  const history = useHistory(); // Create an instance of the history object

  useEffect(() => {
    trackPageView(); // Track first pageview on initial site load
    history.listen(trackPageView); // Track all subsequent pageviews
  }, [history]);

  function trackPageView() {
    window.mParticle.logPageView(`${window.location.pathname}`, {
      page: window.location.toString(),
    });
  }

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/tables" component={Tables} />
      <Route exact path="/desks" component={Desks} />
      <Route exact path="/chairs" component={Chairs} />
      <Route exact path="/lamps" component={Lamps} />
    </Switch>
  );
}

export default Routes;
