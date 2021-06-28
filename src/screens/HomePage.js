import Article from '../components/Article';
import UserPage from './UserPage';

export default function HomePage() {
  return (
    <div>
      <h2 className="text-center text-lg">Home</h2>
      <Article />
      <UserPage />
    </div>
  );
}
