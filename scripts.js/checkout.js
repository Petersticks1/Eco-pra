// Example function to dynamically update breadcrumb (optional)
function navigateTo(section) {
  const breadcrumb = document.getElementById("breadcrumb");

  // Clear existing breadcrumb items
  breadcrumb.innerHTML = "";

  // Set up the new breadcrumb structure based on the section
  const paths = section.split(" / ");

  paths.forEach((path, index) => {
    const li = document.createElement("li");
    if (index === paths.length - 1) {
      // Last breadcrumb item - no link
      li.innerHTML = `<a href="#">${path}</a>`;
    } else {
      // Other breadcrumb items with links
      li.innerHTML = `<a href="#" onclick="navigateTo('${paths
        .slice(0, index + 1)
        .join(" / ")}')">${path}</a>`;
    }
    breadcrumb.appendChild(li);
  });
}

/* const breadcrumb = document
  .getElementById("breadcrumb")
  .addEventListener("click", updateBreadcrumb);

function updateBreadcrumb(path) {
  // Clear existing breadcrumb items
  breadcrumb.innerHTML = "";

  // Split path into parts and add to breadcrumb
  const parts = path.split(" / ");
  parts.forEach((part, index) => {
    const li = document.createElement("li");
    const isLast = index === parts.length - 1;

    if (isLast) {
      li.innerHTML = `<a href="#">${part}</a>`;
    } else {
      li.innerHTML = `<a href="#" onclick="navigateTo('${parts
        .slice(0, index + 1)
        .join(" / ")}')">${part}</a>`;
    }

    breadcrumb.appendChild(li);
  });
}

function navigateTo(section) {
  // Update the breadcrumb to reflect navigation path
  updateBreadcrumb(section);
  alert(`Navigated to ${section}`);
}

 */
