import { HiOutlineAtSymbol } from 'react-icons/hi2';
import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <img className={css.picture} src={image} alt="User avatar" />
        <p className={css.fullName}>{name}</p>
        <p className={css.addInfo}>
          <HiOutlineAtSymbol />
          {tag}
        </p>
        <p className={css.addInfo}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.statsTitle}>Followers</span>
          <span className={css.statsValue}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.statsTitle}>Views</span>
          <span className={css.statsValue}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.statsTitle}>Likes</span>
          <span className={css.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
