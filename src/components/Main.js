import { Route, Switch } from 'react-router-dom';
import EventsPage from '../screens/EventsPage';
import HomePage from '../screens/HomePage';
import SearchPage from '../screens/SearchPage';
import ProfilePage from '../screens/ProfilePage.js';
import CreateEventPage from '../screens/CreateEventPage';

export default function Main() {
  return (
    <main className="p-6">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/events" component={EventsPage} />
        <Route exact path="/create-event" component={CreateEventPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </main>
  );
}
