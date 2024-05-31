import { getWhoDontFollowYouBack, getWhoYouDontFollowBack } from "./filter.js";

document.addEventListener('DOMContentLoaded', async()=>{
    const userInput = document.getElementById('userName');
    const button = document.getElementById("submitSearch")

    button.addEventListener("click", ()=>{
        // console.log(userInput.value)
        handleInput(userInput.value);
    })
    //divFollowers.innerHTML = await getWhoDontFollowYouBack()
})

async function handleInput(userName){
    const divFollowers = document.getElementsByClassName('notFollowsYou-container')[0];
    const divFollowing = document.getElementsByClassName('youNotFollows-container')[0];

    const dontFollowYou = getWhoDontFollowYouBack(userName)

    divFollowers.innerHTML = (await dontFollowYou).map((badDev, index)=>{
        return `
        <a href="${badDev.html_url}" target="_blanket">
            ${index!= 0?"<hr/>": ""}
            <div class="user-info">
                <div class="user-name">${badDev.login}</div>
                <img src="${badDev.avatar_url}" alt="Profile Image" class="devImage">
            </div>
        </a>
    `;
    });
    divFollowing.innerHTML = "";


}