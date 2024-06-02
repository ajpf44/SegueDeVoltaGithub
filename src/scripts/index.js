import { getWhoDontFollowYouBack, getWhoYouDontFollowBack } from "./filter.js";

const processResultPromise = async (divContainer, promisse) => {
  const arrDev = await promisse;

  divContainer.innerHTML = "";
  arrDev.forEach((dev) => {
    const devInfo = `
            <a href="${dev.html_url}" target="_blanket">
                <hr>
                <div class="user-info">
                    <img src="${dev.avatar_url}" alt="Profile Image" class="devImage">
                    <div class="user-name">${dev.login}</div>
                </div>
            </a>`;
    divContainer.innerHTML += devInfo;
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  const userInput = document.getElementById("userName");
  const button = document.getElementById("submitSearch");

  button.addEventListener("click", () => {
    // console.log(userInput.value)
    handleInput(userInput.value);
  });
  //divFollowers.innerHTML = await getWhoDontFollowYouBack()
});

async function handleInput(userName) {
  const divFollowers = document.getElementsByClassName(
    "notFollowsYou-container"
  )[0];
  const divFollowing = document.getElementsByClassName(
    "youNotFollows-container"
  )[0];

  const dontFollowYou = getWhoDontFollowYouBack(userName);
  const youDontFollow = getWhoYouDontFollowBack(userName);

  processResultPromise(divFollowers, dontFollowYou);
  processResultPromise(divFollowing, youDontFollow)
}
