import './App.module.css';
import Profile from '../Profile/Profile';
import userData from '../../mockedData/task1.json';

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
    </>
  );
}

export default App;
