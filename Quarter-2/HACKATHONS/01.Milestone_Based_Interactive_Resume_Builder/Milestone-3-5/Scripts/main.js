// app.ts
document.addEventListener("DOMContentLoaded", function () {
    var saveButton = document.getElementById("saveBtn");
    var downloadButton = document.getElementById("downloadBtn");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var skillsInput = document.getElementById("skills");
    var experienceInput = document.getElementById("experience");
    var previewName = document.getElementById("preview-name");
    var previewEmail = document.getElementById("preview-email");
    var previewSkills = document.getElementById("preview-skills");
    var previewExperience = document.getElementById("preview-experience");
    // Update the preview
    function updatePreview() {
        previewName.textContent = "Name: ".concat(nameInput.value);
        previewEmail.textContent = "Email: ".concat(emailInput.value);
        previewSkills.textContent = "Skills: ".concat(skillsInput.value);
        previewExperience.textContent = "Experience: ".concat(experienceInput.value);
    }
    // Handle save button click
    saveButton.addEventListener("click", function (event) {
        event.preventDefault();
        updatePreview();
    });
});
