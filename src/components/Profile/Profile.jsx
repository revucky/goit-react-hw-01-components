import "./Profile.css";

const Profile = ({ user }) => {
  const { avatar, username, tag, location, stats } = user;
  return (
    <div className="Profile-wrap">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag colorTitle">{"@" + tag}</p>
        <p className="location colorTitle">{location}</p>
      </div>

      <ul className="stats">
        <li className="Profile-item">
          <span className="label colorTitle">Followers</span>
          <span className="quantity"> {stats.followers}</span>
        </li>
        <li className="Profile-item">
          <span className="label colorTitle">Views</span>
          <span className="quantity"> {stats.views}</span>
        </li>
        <li className="Profile-item">
          <span className="label colorTitle">Likes</span>
          <span className="quantity"> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
