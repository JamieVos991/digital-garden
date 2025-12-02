const filterInput = document.getElementById("filterInput");
const listItems = document.querySelectorAll("main ul li");

filterInput.addEventListener("input", () => {
  document.querySelectorAll("main ul li details").forEach(d => d.open = false);

  const search = filterInput.value.toLowerCase();

  listItems.forEach(li => {
    const heading = li.querySelector("h2");
    if (!heading) return;

    const text = heading.textContent.toLowerCase();
    li.style.display = text.includes(search) ? "" : "none";
  });
});
