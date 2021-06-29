import { Route, Switch } from 'react-router-dom';
import EventsPage from '../screens/EventsPage';
import HomePage from '../screens/HomePage';
import EventCreationPage from '../screens/EventCreationPage';
import SearchPage from '../screens/SearchPage';
import ProfilePage from '../screens/ProfilePage.js';

export default function Main() {
  return (
    <main className="p-6">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/events" component={EventsPage} />
        <Route exact path="/new-event" component={EventCreationPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </main>
  );
}
