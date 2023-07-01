import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCard = () => {
  const [userData, setUserData] = useState({});
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://648732b2beba62972790373e.mockapi.io/api/contacts/"
        );
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const handleFollowClick = () => {
    setFollowing((prevState) => !prevState);
  };

  return (
    <div className="user-card">
      <img src={userData.avatar} alt="Avatar" />
      <h2>{userData.user}</h2>
      <p>{userData.tweets} Tweets</p>
      <p>{userData.followers} Followers</p>
      <button onClick={handleFollowClick}>
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
