import getToken from "./modules/getToken.js";

import drillingTeamController from "./modules/drillingTeamController.js";
import rightsController from "./modules/rightsController.js";

const drillingteamTab = document.getElementById("drillingteam_tab");
const rightsTab = document.getElementById("rights_tab");

const addDrillingteamView = document.getElementById("add_drillingteam");
const addRightsView = document.getElementById("add_rights");

async function start() {
  const token = await getToken();

  drillingteamTab.addEventListener('click', () => {
    drillingteamTab.classList.remove("tab-disactive");
    rightsTab.classList.add("tab-disactive");

    addDrillingteamView.classList.remove("visually-hidden");
    addRightsView.classList.add("visually-hidden");
  });

  rightsTab.addEventListener('click', () => {
    rightsTab.classList.remove("tab-disactive");
    drillingteamTab.classList.add("tab-disactive");

    addRightsView.classList.remove("visually-hidden");
    addDrillingteamView.classList.add("visually-hidden");
  });

  drillingTeamController(token);
  rightsController(token);
}

start();

