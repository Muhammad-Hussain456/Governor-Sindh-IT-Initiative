
document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(".section-heading");
  headings.forEach(heading => {
    const button = heading.querySelector(
      ".toggle-button"
    ) as HTMLButtonElement;
    const contenID = heading.getAttribute('data-target')?.split(',') || [];

    button?.addEventListener('click', () => {
      let allVisible = true;

      contenID.forEach(contenId => {
        const content = document.getElementById(contenId.trim());
        if (content && content.style.display === 'none') {
          allVisible = false;

        }
      });

      contenID.forEach(contenId => {
        const content = document.getElementById(contenId.trim());
        if (content) {
          if (allVisible) {
            content.style.display = "none";
          } else {
            content.style.display = 'grid';
          }
        }
      });
      button.textContent = allVisible ? button.textContent : button.textContent;
    });
    
  });
});
