import getBanks from "../service/getBanks.js";
import setFormData from "./setFormData.js";

const showEditModel = ({ selectorCardList, idEditModal }) => {
  const editGroup = document.querySelector(selectorCardList);
  const editModal = document.getElementById(idEditModal);
  editGroup.addEventListener('click', (e) => {
    if (e.target.closest('.card__edit')) {
      editModal.classList.add('active');

      const currentCard = e.target.closest('.card__item');
      const cardId = currentCard.id;
      
      getBanks().then(banks => banks.forEach(bank => bank.id === +cardId ? 
      setFormData(bank, editModal) 
      : null)
      );
      return cardId;
    }
  });
};

export default showEditModel;
