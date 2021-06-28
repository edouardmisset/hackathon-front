import { Route, Switch } from "react-router-dom";
import EventsPage from "../screens/EventsPage";
import HomePage from "../screens/HomePage";
import ProfilePage from "../screens/ProfilePage.js";

export default function Main() {
  return (
    <main className="p-6">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={EventsPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </main>
  );
}
