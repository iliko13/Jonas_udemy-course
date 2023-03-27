const panels = document.querySelectorAll(".panel");

panels.forEach((panelChange) => {
  panelChange.addEventListener("click", () => {
    removeActiveClasses();
    panelChange.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panelRemove) => {
    panelRemove.classList.remove("active");
  });
}
