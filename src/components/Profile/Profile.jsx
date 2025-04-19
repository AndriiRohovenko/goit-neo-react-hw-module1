import styles from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  console.log('hello from Profile component');
  return (
    <>
      <div className={styles.profileCard}>
        <img className={styles.profileImg} src={image} alt="default alt" />
        <p className="card-title">{name}</p>
        <p>{tag}</p>
        <p className={styles.UserLocation}>{location}</p>
        <ul className={styles.UserStats}>
          <li className={styles.stat}>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li className={styles.stat}>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li className={styles.stat}>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
