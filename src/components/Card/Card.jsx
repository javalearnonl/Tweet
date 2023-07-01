import React, { useState } from "react";
import FollowButton from "../FollowButton/FollowButton";

const Card = ({ user, handleFollow }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
    handleFollow(user.id, !isFollowing);
  };

  return (
    <div className="card">
      <div className="user-info">
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <h3 className="username">{user.user}</h3>
      </div>
      <FollowButton isFollowing={isFollowing} handleClick={handleClick} />
      <div className="followers">
        <span className="follower-count">
          {user.followers.toLocaleString()}
        </span>
        <span className="follower-text">followers</span>
      </div>
    </div>
  );
};

export default Card;
