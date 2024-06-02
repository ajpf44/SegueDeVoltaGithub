async function getFollowersFromUser(userName) {
  const arrFollowers = [];
  try {
    const res = await fetch(
      `https://api.github.com/users/${userName}/followers`
    );
    const followersData = await res.json();

    for (let key in followersData) {
      arrFollowers.push({
        login: followersData[key].login,
        avatar_url: followersData[key].avatar_url,
        html_url: followersData[key].html_url,
      });
    }

    return arrFollowers;
  } catch (error) {
    console.log("Error fetching followers from user " + userName);
    console.log(error);
  }
}

async function getUserFollowing(userName) {
  const userFollowing = [];
  try {
    const res = await fetch(
      `https://api.github.com/users/${userName}/following`
    );
    const followingData = await res.json();
    
    for (let key in followingData) {
      userFollowing.push({
        login: followingData[key].login,
        avatar_url: followingData[key].avatar_url,
        html_url: followingData[key].html_url,
      });
    }

    return userFollowing;
  } catch (error) {
    console.log("Error fetching followings from user " + userName);
    console.log(error);
  }
}

export {
  getFollowersFromUser,
  getUserFollowing,
};
