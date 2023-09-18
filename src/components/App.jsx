import user from '../data/user.json';
import { Profile } from 'components/Profile/Profile';

import data from '../data/data.json';
import { Statistics } from 'components/Statistics/Statistics';

import friends from '../data/friends.json';
import { FriendList } from 'components/FriendList/FriendList';

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
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
