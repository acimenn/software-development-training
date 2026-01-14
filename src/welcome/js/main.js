window.addEventListener("DOMContentLoaded", () => {
  if (!Array.isArray(participants)) {
    return;
  }

  const listDiv = document.querySelector(".list");
  if (!listDiv) {
    return;
  }

  const children = Array.from(listDiv.children);
  let insertAfter = 1; // h1 + br

  if (!children[1] || children[1].tagName !== "BR") {
    insertAfter = 0;
  }

  participants.forEach((name, idx) => {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = `n${idx + 1}`;

    const label = document.createElement("label");
    label.setAttribute("for", input.id);
    label.textContent = name;

    listDiv.appendChild(input);
    listDiv.appendChild(label);
  });
});
