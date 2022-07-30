let tab = document.querySelector('.tabs__header');
tab.addEventListener('click', func);

function func(event) {
  console.log(event);

  if (event.target.className == 'tab__header-item') {
    let dataTab = event.target.getAttribute('data-tab');
    let tabs = document.querySelectorAll('.tab__header-item');

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }
    event.target.classList.add('active');

    let tabBody = document.querySelectorAll('.tab__body-item');
    for (let i = 0; i < tabBody.length; i++) {
      if (dataTab == i) {
        tabBody[i].style.display = 'block';
      } else {
        tabBody[i].style.display = 'none';
      }
    }
  };
};