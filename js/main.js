let tabs__header = document.querySelectorAll(".tab__header-item");
let tab__body = document.querySelectorAll(".tab__body-item");

tabs__header.forEach(function (tab, tab_index) {
  tab.addEventListener("click", function () {

    tabs__header.forEach(function (tab) {
      tab.classList.remove("active"); //Сначала удаляем у всех класс active
    });

    tab.classList.add("active"); //Затем добавяем класс active по нажатию

    tab__body.forEach(function (content, content_index) {
      if (content_index == tab_index) {
        content.style.display = "block";
      }
      else {
        content.style.display = "none";
      }
    });

  });

});