// app.ts
document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("saveBtn") as HTMLButtonElement;
  const downloadButton = document.getElementById("downloadBtn") as HTMLButtonElement;

  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const skillsInput = document.getElementById("skills") as HTMLInputElement;
  const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;

  const previewName = document.getElementById("preview-name") as HTMLElement;
  const previewEmail = document.getElementById("preview-email") as HTMLElement;
  const previewSkills = document.getElementById("preview-skills") as HTMLElement;
  const previewExperience = document.getElementById("preview-experience") as HTMLElement;

  // Update the preview
  function updatePreview() {
    previewName.textContent = `Name: ${nameInput.value}`;
    previewEmail.textContent = `Email: ${emailInput.value}`;
    previewSkills.textContent = `Skills: ${skillsInput.value}`;
    previewExperience.textContent = `Experience: ${experienceInput.value}`;
  }

  // Handle save button click
  saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    updatePreview();
  });

  
});
