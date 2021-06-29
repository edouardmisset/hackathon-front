import Profile from '../components/Profile';
import Event from '../components/Event';

export default function ProfilePage() {
  return (
    <>
      <h2 className="text-center text-lg">Profile</h2>
      <Profile />
      <h2 className="p-2 md:p-4">My events</h2>
      <Event />
    </>
  );
}
