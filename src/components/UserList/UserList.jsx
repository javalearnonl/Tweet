import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./UserList.module.css";

const UserCard = ({ user, isFollowed, onFollowUser }) => {
  return (
    <div className={styles.userCard}>
      <div className="line">
        <img src={user.avatar} alt="User Avatar" className={styles.avatar} />
      </div>
      <h2 className={styles.tweets}>{user.tweets.toLocaleString()} tweets</h2>
      <h2 className={styles.followers}>
        {isFollowed
          ? (user.followers + 1).toLocaleString()
          : user.followers.toLocaleString()}{" "}
        followers
      </h2>

      <button
        className={`${styles.button} ${isFollowed ? styles.followed : ""}`}
        onClick={() => onFollowUser(user.id)}
      >
        {isFollowed ? "Followed" : "Follow"}
      </button>
    </div>
  );
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [followedUsers, setFollowedUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [page]);

  useEffect(() => {
    const followedUsersData = JSON.parse(localStorage.getItem("followedUsers"));
    if (followedUsersData) {
      setFollowedUsers(followedUsersData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("followedUsers", JSON.stringify(followedUsers));
  }, [followedUsers]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `https://649d9b6c9bac4a8e669e0435.mockapi.io/users`
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleFollowUser = (userId) => {
    const followedUser = users.find((user) => user.id === userId);
    if (followedUser) {
      if (followedUsers.includes(userId)) {
        setFollowedUsers((prevFollowedUsers) =>
          prevFollowedUsers.filter((id) => id !== userId)
        );
      } else {
        setFollowedUsers((prevFollowedUsers) => [...prevFollowedUsers, userId]);
      }
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <div className={styles.userList}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            isFollowed={followedUsers.includes(user.id)}
            onFollowUser={handleFollowUser}
          />
        ))}
      </div>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default UserList;
