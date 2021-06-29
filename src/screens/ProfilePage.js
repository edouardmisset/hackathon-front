import Profile from '../components/Profile';
import Card from '../components/Card';

export default function ProfilePage() {
  return (
    <>
      <h2 className="text-center text-lg">Profile</h2>
      <Profile />
      <h2 className="p-2 md:p-4">My events</h2>
      <Card />
    </>
  );
}
