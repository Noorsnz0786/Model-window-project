// 'use strict';

// const model = document.querySelector('.model');
// const overlay = document.querySelector('.overlay');
// const btnCloseModel = document.querySelector('.close-model');
// const btnOpenModel = document.querySelector('.show-model');

// const openModel = function () {
//   model.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModel = function () {
//   model.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnOpenModel.length; i++)
//   btnOpenModel[i].addEventListener('click', openModel);

// btnCloseModel.addEventListener('click', closeModel);
// overlay.addEventListener('click', closeModel);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape' && !model.classList.contains('hidden')) {
//     closeModel();
//   }
// });

'use strict';

const modal = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-model');
const btnsOpenModal = document.querySelectorAll('.show-model');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});