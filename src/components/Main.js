import { Route, Switch } from "react-router-dom";
import CreateEventPage from "../screens/CreateEventPage";
import EventsPage from "../screens/EventsPage";
import HomePage from "../screens/HomePage";

export default function Main() {
  return (
    <main className="p-6">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={EventsPage} />
        <Route exact path="/create-event" component={CreateEventPage} />
      </Switch>
    </main>
  );
}
