import React from "react";

const FollowButton = ({ isFollowing, handleClick }) => {
  return (
    <button
      className={`follow-button ${isFollowing ? "following" : ""}`}
      onClick={handleClick}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;
