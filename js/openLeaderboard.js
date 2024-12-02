import { teamArr } from "./premier_teams.js";

const confALeaderboard = document.querySelector("#confALeaderboard");
const confABody = confALeaderboard.querySelector("tbody");
const confBLeaderboard = document.querySelector("#confBLeaderboard");
const confBBody = confBLeaderboard.querySelector("tbody")

for (let i = 0; i < teamArr.length; i++) {
    console.log(i);
    let Arow = confABody.insertRow(i);
    let Acell = Arow.insertCell(0);
    let Acell1 = Arow.insertCell(1);
    Acell.innerHTML = teamArr[i].name;
    Acell1.innerHTML = teamArr[i].score;

    let Brow = confBBody.insertRow(i)
    let Bcell = Brow.insertCell(0);
    let Bcell1 = Brow.insertCell(1);
    Bcell.innerHTML = teamArr[i].name;
    Bcell1.innerHTML = teamArr[i].score;

    if (i < 11) {
        Acell.style.backgroundColor = "LightGreen";
        Acell1.style.backgroundColor = "LightGreen";
        Bcell.style.backgroundColor = "LightGreen";
        Bcell1.style.backgroundColor = "LightGreen";
    } else {
        Acell.style.backgroundColor = "LightYellow";
        Acell1.style.backgroundColor = "LightYellow";
        Bcell.style.backgroundColor = "LightYellow";
        Bcell1.style.backgroundColor = "LightYellow";
    }
}


