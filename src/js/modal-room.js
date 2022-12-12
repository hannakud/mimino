var openModalEntry = document.querySelectorAll(".btn-open-book-room");
var showModalEntry = document.querySelectorAll(".modal-window-entry-room");
var closeModalEntry = document.querySelectorAll(".close-entry-room");

for(var i = 0; i < openModalEntry.length; i++){
  openModalEntry[i].addEventListener("click", function(event) {
    event.preventDefault();
    showModalEntry[0].classList.add("show-entry");
  });
};

for(var i = 0; i < closeModalEntry.length; i++){
  closeModalEntry[i].addEventListener("click", function(event) {
    event.preventDefault();
    showModalEntry[0].classList.remove("show-entry");
  });
};