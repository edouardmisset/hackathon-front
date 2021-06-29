import { Route, Switch } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import SearchPage from '../screens/SearchPage';
import ProfilePage from '../screens/ProfilePage.js';
import DetailedEvent from './DetailedEvent';
import CreateEventPage from '../screens/CreateEventPage';
import SignUpPage from '../screens/SignUpPage';
import SignInPage from '../screens/SignInPage';

export default function Main() {
  return (
    <main className="p-6">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create-event" component={CreateEventPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/events/:id" component={DetailedEvent} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route exact path="/sign-in" component={SignInPage} />
      </Switch>
    </main>
  );
}
