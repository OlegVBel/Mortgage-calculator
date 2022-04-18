import removeBank from "../service/removeBank.js";
import getBanks from "../service/getBanks.js";

const deleteBank = ({selectorCardList}) => {
  const cardsList = document.querySelector(selectorCardList);
  cardsList.addEventListener('click', (e) => {
    if (e.target.closest('.card__remove')) {
      const currentCard = e.target.closest('.card__item');
      const cardId = currentCard.id;
      getBanks().then(banks => banks.forEach(bank => bank.id === +cardId ? 
        removeBank(bank) 
      : null)
      );
      currentCard.remove();
    }

  });
};
export default deleteBank;