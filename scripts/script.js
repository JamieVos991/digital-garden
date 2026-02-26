document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button[data-sprint]");
  const sprints = document.querySelectorAll(".sprint");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const sprintIndex = btn.dataset.sprint;
      const targetId = btn.dataset.target;

      sprints.forEach(s => s.classList.remove("active"));

      const sprint = sprints[sprintIndex];
      if (sprint) {
        sprint.classList.add("active");

        if (targetId) {
          const targetElement = sprint.querySelector(`h4[id="${targetId}"]`);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    });
  });

  if (sprints.length > 0) {
    sprints[0].classList.add("active");
  }

  // document.querySelectorAll("details").forEach((detail) => {
  //   detail.open = true;
  // });
});
