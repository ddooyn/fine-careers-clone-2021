// main - dropdown
const dropBtn = document.querySelectorAll(".dropdown-btn");
const dropList = document.querySelectorAll(".dropdown-list");

for (let i = 0; i < dropBtn.length; i++) {
  dropBtn[i].addEventListener('click', function () {
    dropBtn[i].classList.toggle('on');
  })
}

for (let i = 0; i < dropBtn.length; i++) {
  dropList[i].addEventListener('click', (event) => {
    if (event.target.nodeName === "BUTTON") {
      dropBtn[i].innerText = event.target.innerText;
      dropBtn[i].classList.remove('on');
    }
  })
}

const languageButton = document.querySelector('.btn-lang');
const relatedButton = document.querySelector('.btn-rel');
languageButton.addEventListener('click', () => {
  languageButton.classList.toggle('on');
})
relatedButton.addEventListener('click', () => {
  relatedButton.classList.toggle('on');
})