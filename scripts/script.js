document.addEventListener("DOMContentLoaded", () => {
    const knoppen = document.querySelectorAll("button[data-sprint]");
    const sprints = document.querySelectorAll(".sprint");
  
    const details = document.querySelectorAll("details");
  
    knoppen.forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = btn.dataset.sprint;
  
        sprints.forEach((s) => s.classList.remove("active"));
  
        if (sprints[index]) {
          sprints[index].classList.add("active");
        }
      });
    });
  
    if (sprints.length > 0) {
      sprints[0].classList.add("active");
    }
  
    details.forEach((detail) => {
      detail.open = true;
    });
  });
  