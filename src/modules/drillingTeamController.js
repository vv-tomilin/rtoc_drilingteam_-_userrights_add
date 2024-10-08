import setDrillingTeam from "./setDrillingTeam.js";

const wellIdInput = document.getElementById("well_id_input");
const drillingteamInput = document.getElementById("drillingteam_input");
const drilingteamSend = document.getElementById("drillingteam_send");
const acceptDrillingteamButton = document.getElementById("accept_drillingteam_button");

const succesDrillingTeamButton = document.getElementById("succes_drillingteam_data");
const drillingteamAcceptWarning = document.getElementById("drillingteam_accept_warning");

const wellIdShow = document.getElementById("well_id_show_drillingteam");
const drillingTeamNumberShow = document.getElementById("drillingteam_n_show_drillingteam");

export default function drillingTeamController(token) {
    const data = {
        "well_id": 0,
        "drilling_team_n": 0
    }

    acceptDrillingteamButton.addEventListener('click', () => {

        if (wellIdInput.value.length === 0 && drillingteamInput.value.length === 0) {
            drillingteamAcceptWarning.innerHTML = "<span class='warn-msg'>Поля не должны быть пустыми!</span>"
        } else {
            data.well_id = Number(wellIdInput.value);
            data.drilling_team_n = Number(drillingteamInput.value);

            wellIdShow.innerText = data.well_id;
            drillingTeamNumberShow.innerHTML = data.drilling_team_n;

            succesDrillingTeamButton.disabled = false;
            drillingteamAcceptWarning.innerText = "";
        }
    });

    succesDrillingTeamButton.addEventListener('click', () => {
        drilingteamSend.disabled = false;
    });

    drilingteamSend.addEventListener('click', async () => {
        const setDrillingTeamResult = await setDrillingTeam(token, data);

        drillingteamAcceptWarning.innerHTML = `<span class="info-msg">${JSON.stringify(setDrillingTeamResult)}</span>`;

        console.log("Send Data >>>>>", data, token);
        succesDrillingTeamButton.disabled = true;
        drilingteamSend.disabled = true;
    });
}