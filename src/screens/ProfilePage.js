import Profile from '../components/Profile';
import Event from '../components/Event';

export default function ProfilePage() {
  return (
    <>
      <Profile />
      <div className="mt-6 text-3xl font-extrabold m-16">
        <h2 className="p-2 md:p-4">My events</h2>
        <Event />
      </div>
    </>
  );
}
