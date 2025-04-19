import './App.module.css';

import Profile from '../Profile/Profile';
import userData from '../../mockedData/task1.json';

import FriendList from '../FriendList/FriendList';
import friendsListData from '../../mockedData/task2.json';

function App() {
  console.log('hello from App component');
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsListData} />
    </>
  );
}

export default App;
