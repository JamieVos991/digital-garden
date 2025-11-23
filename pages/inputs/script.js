  const filterInput = document.getElementById("filterInput");
  const listItems = document.querySelectorAll("main ul li");

  filterInput.addEventListener("input", () => {
    const search = filterInput.value.toLowerCase();

    listItems.forEach(li => {
      const heading = li.querySelector("h2");
      if (!heading) return; // skip items zonder h2

      const text = heading.textContent.toLowerCase();

      li.style.display = text.includes(search) ? "" : "none";
    });
  });
