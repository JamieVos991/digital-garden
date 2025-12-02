document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button[data-sprint]");
  const sprints = document.querySelectorAll(".sprint");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const sprintIndex = btn.dataset.sprint;
      const targetId = btn.dataset.target;

      // Hide all sprints
      sprints.forEach(s => s.classList.remove("active"));

      // Show correct sprint
      const sprint = sprints[sprintIndex];
      if (sprint) {
        sprint.classList.add("active");

        // Scroll to matching h4
        if (targetId) {
          const targetElement = sprint.querySelector(`h4[id="${targetId}"]`);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    });
  });

  // Open first sprint by default
  if (sprints.length > 0) {
    sprints[0].classList.add("active");
  }

  // Keep all details open
  document.querySelectorAll("details").forEach((detail) => {
    detail.open = true;
  });
});
