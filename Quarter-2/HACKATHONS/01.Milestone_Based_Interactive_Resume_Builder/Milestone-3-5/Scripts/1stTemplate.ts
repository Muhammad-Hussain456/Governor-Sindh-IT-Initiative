// TypeScript to handle resume generation

// Get form and resume template elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeTemplate = document.getElementById('resumeTemplate') as HTMLDivElement;

const displayName = document.getElementById('displayName') as HTMLElement;
const displayTitle = document.getElementById('displayTitle') as HTMLElement;
const displayAbout = document.getElementById('displayAbout') as HTMLElement;
const displayEmail = document.getElementById('displayEmail') as HTMLElement;
const displayPhone = document.getElementById('displayPhone') as HTMLElement;
const displayLocation = document.getElementById('displayLocation') as HTMLElement;
const displayLanguages = document.getElementById('displayLanguages') as HTMLElement;
const displaySkillsSummary = document.getElementById('displaySkillsSummary') as HTMLElement;
const displayExperience = document.getElementById('displayExperience') as HTMLElement;
const displayEducation = document.getElementById('displayEducation') as HTMLElement;
const displayProfilePic = document.getElementById('displayProfilePic') as HTMLImageElement;

resumeForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Populate basic info
  displayName.textContent = (document.getElementById('name') as HTMLInputElement).value;
  displayTitle.textContent = (document.getElementById('title') as HTMLInputElement).value;
  displayAbout.textContent = (document.getElementById('about') as HTMLInputElement).value;
  displayEmail.textContent = (document.getElementById('email') as HTMLInputElement).value;
  displayPhone.textContent = (document.getElementById('phone') as HTMLInputElement).value;
  displayLocation.textContent = (document.getElementById('location') as HTMLInputElement).value;
  displayLanguages.textContent = (document.getElementById('languages') as HTMLInputElement).value;

  // Display uploaded profile picture
  const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;
  if (profilePicInput.files && profilePicInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      displayProfilePic.src = e.target!.result as string;
    };
    reader.readAsDataURL(profilePicInput.files[0]);
  }

  
  // Clear existing data
  displayExperience.innerHTML = '';
  displayEducation.innerHTML = '';
  displaySkillsSummary.innerHTML = '';

  // Populate Skills
  const skillNames = document.querySelectorAll('.skill-name') as NodeListOf<HTMLInputElement>;
  const skillLevels = document.querySelectorAll('.skill-level') as NodeListOf<HTMLInputElement>;

  skillNames.forEach((skill, index) => {
    const skillContainer = document.createElement('p');
    skillContainer.textContent = `${skill.value}: ${skillLevels[index].value}%`;
    displaySkillsSummary.appendChild(skillContainer);
  });

  // Populate Experience
  const positions = document.querySelectorAll('.experience-position') as NodeListOf<HTMLInputElement>;
  const companies = document.querySelectorAll('.experience-company') as NodeListOf<HTMLInputElement>;
  const years = document.querySelectorAll('.experience-years') as NodeListOf<HTMLInputElement>;
  const descriptions = document.querySelectorAll('.experience-description') as NodeListOf<HTMLTextAreaElement>;

  positions.forEach((position, index) => {
    const experienceContainer = document.createElement('div');
    experienceContainer.innerHTML = `<h4>${position.value} - ${companies[index].value} (${years[index].value})</h4><p>${descriptions[index].value}</p>`;
    displayExperience.appendChild(experienceContainer);
  });

  // Populate Education
  const degrees = document.querySelectorAll('.education-degree') as NodeListOf<HTMLInputElement>;
  const institutions = document.querySelectorAll('.education-institution') as NodeListOf<HTMLInputElement>;
  const eduYears = document.querySelectorAll('.education-years') as NodeListOf<HTMLInputElement>;
  const eduDescriptions = document.querySelectorAll('.education-description') as NodeListOf<HTMLTextAreaElement>;

  degrees.forEach((degree, index) => {
    const educationContainer = document.createElement('div');
    educationContainer.innerHTML = `<h4>${degree.value} - ${institutions[index].value} (${eduYears[index].value})</h4><p>${eduDescriptions[index].value}</p>`;
    displayEducation.appendChild(educationContainer);
  });

  // Show resume template
  resumeTemplate.classList.remove('hidden');
  function DownloadResume() {
    const resumeElement = document.querySelector(".resume") as HTMLElement;
  
   
    const opt = {
      margin: 0,
      filename: `My_Resume.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
  
   
    if (resumeElement) {
      (window as any).html2pdf().from(resumeElement).set(opt).save();
    } else {
      console.error("Resume element not found.");
    }
  }
  
  const downloadButton = document.getElementById("downloadBtn");
  if (downloadButton) {
    downloadButton.addEventListener("click", DownloadResume);
  } else {
    console.error("Download button not found!");
  }
});
