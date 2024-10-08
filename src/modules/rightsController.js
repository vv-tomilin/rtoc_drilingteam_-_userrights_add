import setRightsForUser from "./setRightsForUser.js";

const wellIdInput = document.getElementById("well_id_rights");
const loginInput = document.getElementById("user_login_rights");

const acceptRightsButton = document.getElementById("accept_rights_button");
const rightsSend = document.getElementById("rights_send");

const wellIdShow = document.getElementById("well_id_show_rights");
const rightsLoginShow = document.getElementById("login_show_rights");

const succesRightsDataButton = document.getElementById("succes_rights_data");

const rightsAcceptWarning = document.getElementById("rights_accept_warning");

export default function rightsController(token) {
    const data = {
        user_login: "string",
        well_id: 0,
    };

    acceptRightsButton.addEventListener('click', () => {
        if (wellIdInput.value.length === 0 && loginInput.value.length === 0) {
            rightsAcceptWarning.innerHTML = "<span class='warn-msg'>Поля не должны быть пустыми!</span>";
        } else {
            data.well_id = wellIdInput.value;
            data.user_login = loginInput.value;

            wellIdShow.innerText = Number(data.well_id);
            rightsLoginShow.innerHTML = data.user_login;

            succesRightsDataButton.disabled = false;
            rightsAcceptWarning.innerText = "";
        }
    })

    succesRightsDataButton.addEventListener('click', () => {
        rightsSend.disabled = false;
    });

    rightsSend.addEventListener('click', async () => {

        const setUserRightsResult = await setRightsForUser(token, data);

        rightsAcceptWarning.innerHTML = `<span class="info-msg">${JSON.stringify(setUserRightsResult)}</span>`;

        console.log("Send Data >>>>>", data);
        succesRightsDataButton.disabled = true;
        rightsSend.disabled = true;
    });
}
