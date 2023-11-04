import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json'
import { Profile } from './components/Profile';
import { Statistics } from './components/Statistics';
import { Friends } from 'components/FriendList';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <Friends friends={friends} />
   </div>
  );
}