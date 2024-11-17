// TypeScript to handle resume generation
// Get form and resume template elements
var resumeForm = document.getElementById('resumeForm');
var resumeTemplate = document.getElementById('resumeTemplate');
var displayName = document.getElementById('displayName');
var displayTitle = document.getElementById('displayTitle');
var displayAbout = document.getElementById('displayAbout');
var displayEmail = document.getElementById('displayEmail');
var displayPhone = document.getElementById('displayPhone');
var displayLocation = document.getElementById('displayLocation');
var displayLanguages = document.getElementById('displayLanguages');
var displaySkillsSummary = document.getElementById('displaySkillsSummary');
var displayExperience = document.getElementById('displayExperience');
var displayEducation = document.getElementById('displayEducation');
var displayProfilePic = document.getElementById('displayProfilePic');
resumeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Populate basic info
    displayName.textContent = document.getElementById('name').value;
    displayTitle.textContent = document.getElementById('title').value;
    displayAbout.textContent = document.getElementById('about').value;
    displayEmail.textContent = document.getElementById('email').value;
    displayPhone.textContent = document.getElementById('phone').value;
    displayLocation.textContent = document.getElementById('location').value;
    displayLanguages.textContent = document.getElementById('languages').value;
    // Display uploaded profile picture
    var profilePicInput = document.getElementById('profilePic');
    if (profilePicInput.files && profilePicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            displayProfilePic.src = e.target.result;
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
    // Clear existing data
    displayExperience.innerHTML = '';
    displayEducation.innerHTML = '';
    displaySkillsSummary.innerHTML = '';
    // Populate Skills
    var skillNames = document.querySelectorAll('.skill-name');
    var skillLevels = document.querySelectorAll('.skill-level');
    skillNames.forEach(function (skill, index) {
        var skillContainer = document.createElement('p');
        skillContainer.textContent = "".concat(skill.value, ": ").concat(skillLevels[index].value, "%");
        displaySkillsSummary.appendChild(skillContainer);
    });
    // Populate Experience
    var positions = document.querySelectorAll('.experience-position');
    var companies = document.querySelectorAll('.experience-company');
    var years = document.querySelectorAll('.experience-years');
    var descriptions = document.querySelectorAll('.experience-description');
    positions.forEach(function (position, index) {
        var experienceContainer = document.createElement('div');
        experienceContainer.innerHTML = "<h4>".concat(position.value, " - ").concat(companies[index].value, " (").concat(years[index].value, ")</h4><p>").concat(descriptions[index].value, "</p>");
        displayExperience.appendChild(experienceContainer);
    });
    // Populate Education
    var degrees = document.querySelectorAll('.education-degree');
    var institutions = document.querySelectorAll('.education-institution');
    var eduYears = document.querySelectorAll('.education-years');
    var eduDescriptions = document.querySelectorAll('.education-description');
    degrees.forEach(function (degree, index) {
        var educationContainer = document.createElement('div');
        educationContainer.innerHTML = "<h4>".concat(degree.value, " - ").concat(institutions[index].value, " (").concat(eduYears[index].value, ")</h4><p>").concat(eduDescriptions[index].value, "</p>");
        displayEducation.appendChild(educationContainer);
    });
    // Show resume template
    resumeTemplate.classList.remove('hidden');
    function DownloadResume() {
        var resumeElement = document.querySelector(".resume");
        var opt = {
            margin: 0,
            filename: "My_Resume.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        };
        if (resumeElement) {
            window.html2pdf().from(resumeElement).set(opt).save();
        }
        else {
            console.error("Resume element not found.");
        }
    }
    var downloadButton = document.getElementById("downloadBtn");
    if (downloadButton) {
        downloadButton.addEventListener("click", DownloadResume);
    }
    else {
        console.error("Download button not found!");
    }
});
