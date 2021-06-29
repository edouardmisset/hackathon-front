import Profile from '../components/Profile';
import Event from '../components/Event';
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function ProfilePage() {
  const { userEventList } = useContext(CurrentUserContext);

  return (
    <>
      <Profile />
      {!!userEventList.length && (
        <>
          <h2 className="p-2 md:p-4">My events</h2>
          <Event eventList={userEventList} />
        </>
      )}
    </>
  );
}
