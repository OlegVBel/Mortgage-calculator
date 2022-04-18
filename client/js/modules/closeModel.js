const closeModel = ({ selectorCloseBtn, idAddBtn, idEditBtn }) => {
  const closeBtn = document.querySelectorAll(selectorCloseBtn);
  const addBtn = document.getElementById(idAddBtn);
  const editBtn = document.getElementById(idEditBtn);
  const addModal = document.getElementById('add-modal');
  const editModal = document.getElementById('edit-modal');

  closeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.id === addBtn.id) {
        addModal.classList.remove('active')
      } else if (e.target.id === editBtn.id) {
        editModal.classList.remove('active');
      }
    });
  });
};
export default closeModel;
