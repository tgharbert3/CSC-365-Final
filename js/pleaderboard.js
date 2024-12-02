import { teamArr } from "./premier_teams.js";
const leaderboard = document.querySelector("tbody");
const printButton = document.querySelector(".printButton");


for (let i = 0; i < teamArr.length; i++) {
    let row = leaderboard.insertRow(i);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    cell.innerHTML = teamArr[i].name;
    cell1.innerHTML = teamArr[i].score;

    if (i < 11) {
        cell.style.backgroundColor = "LightGreen";
        cell1.style.backgroundColor = "LightGreen";
    } else {
        cell.style.backgroundColor = "LightYellow";
        cell1.style.backgroundColor = "LightYellow";
    }
}

printButton.addEventListener("click", () => {
    console.log("print button was clicked.")
    print();
});