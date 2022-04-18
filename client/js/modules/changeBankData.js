import getFormData from "./getFormData.js";
import updateBanks from "../service/updateBanks.js";

const changeBankData = ({idEditForm, selectorCardList, idEditModal}) => {
  const form = document.getElementById(idEditForm);
  const editGroup = document.querySelector(selectorCardList);
  let bankId = null;
  editGroup.addEventListener('click', (e) => {
    if (e.target.closest('.card__edit')) {
      const currentCard = e.target.closest('.card__item');
      bankId = currentCard.id;
    }
  });
  form.addEventListener('submit', () => {
    const data = getFormData(idEditForm);
    data.id = bankId;
    updateBanks(data);
    changeCardData(data);
    document.getElementById(idEditModal).classList.remove("active");
  });
};

export default changeBankData;