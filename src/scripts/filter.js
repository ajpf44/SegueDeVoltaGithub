import {getFollowersFromUser, getUserFollowing} from "./getFollowService.js";

async function getWhoDontFollowYouBack(user) {
  const followers = await getFollowersFromUser(user);
  const following = await getUserFollowing(user);

  const followersNick = followers.map((f) => f.login);

  const who = following.filter(
    (follow) => !followersNick.includes(follow.login)
  );

  return who;
}

async function getWhoYouDontFollowBack(user) {
  const followers = await getFollowersFromUser(user);
  const following = await getUserFollowing(user);

  const followingNicks = following.map((f) => f.login);

  const who = followers.filter(
    (follower) => !followingNicks.includes(follower.login)
  );

  return who;
}

export{
  getWhoDontFollowYouBack,
  getWhoYouDontFollowBack,
};
