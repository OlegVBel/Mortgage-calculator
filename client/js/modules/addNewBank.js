import sendBank from "../service/sendBank.js";
import insertNewBank from "./insertNewBank.js";
import getFormData from "./getFormData.js";
import getBanks from "../service/getBanks.js";

const addNewBank = ({ idAddForm, selectorBanksList, idAddModal }) => {
  const form = document.getElementById(idAddForm);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = getFormData(idAddForm);
    data.id = Math.floor(Math.random()*1e8);
    sendBank(data);
    getBanks().then((banks) => banks.find((bank) => {
        if(bank.id === data.id) {
          insertNewBank(bank, selectorBanksList);
        }
      }));
    document.getElementById(idAddModal).classList.remove("active");
  });
};

export default addNewBank;