document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resume-form") as HTMLFormElement;
  const resumeOutput = document.getElementById("page") as HTMLElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const img = (document.getElementById("profile-pic") as HTMLPictureElement);

    // Skills
    const skills = {
      skill1: (document.getElementById("skill1") as HTMLInputElement).value,
      skill2: (document.getElementById("skill2") as HTMLInputElement).value,
      skill3: (document.getElementById("skill3") as HTMLInputElement).value,
      skill4: (document.getElementById("skill4") as HTMLInputElement).value,
    };

    // Interests
    const interests = {
      interest1: (document.getElementById("interest1") as HTMLInputElement).value,
      interest2: (document.getElementById("interest2") as HTMLInputElement).value,
      interest3: (document.getElementById("interest3") as HTMLInputElement).value,
      interest4: (document.getElementById("interest4") as HTMLInputElement).value,
    };

    // Languages
    const languages = {
      language1: (document.getElementById("language1") as HTMLInputElement).value,
      language2: (document.getElementById("language2") as HTMLInputElement).value,
      language3: (document.getElementById("language3") as HTMLInputElement).value,
    };

    // User Info
    const userName = (document.getElementById("name") as HTMLInputElement).value;
    const jobPosition = (document.getElementById("job-position") as HTMLInputElement).value;
    const professionalInfo = (document.getElementById("professional-info") as HTMLTextAreaElement).value;

    // Personal Info
    const personalInfo = {
      fatherName: (document.getElementById("fatherName") as HTMLInputElement).value,
      dob: (document.getElementById("dob") as HTMLInputElement).value,
      maritalStatus: (document.getElementById("maritalStatus") as HTMLInputElement).value,
      nationality: (document.getElementById("nationality") as HTMLInputElement).value,
    };

    // Collect Education Entries
    const educationEntries = Array.from(document.querySelectorAll(".education-entry")).map(entry => {
      return {
        degree: (entry.querySelector(".degree")as HTMLInputElement)?.value,
        year: (entry.querySelector(".year")as HTMLInputElement)?.value,
        institute: (entry.querySelector(".institute")as HTMLInputElement)?.value,
      };
    });
  
    // Collect Experience Entries
    const experienceEntries = Array.from(document.querySelectorAll(".experience-entry")).map(entry => {
      return {
        company: (entry.querySelector(".company") as HTMLInputElement)?.value,
        period: (entry.querySelector(".workingPeriod")as HTMLInputElement)?.value,
        achievements: (entry.querySelector(".achievements")as HTMLInputElement)?.value,
      };
    });



    
const resumeHTML = `      
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Interactive Resume Builder</title>
 <link rel="stylesheet" href="./resume.css" />
  <link rel="stylesheet" href="../Milestone-1-2/media-query.css" />
</head>
<body>
  <section class="main-section">
    <section class="section-1">
      <section class="section-1-1">
        <div id="profile-picture" >
        <img id="pic" contenteditable="true" src="${img}" />
        </div>
      </section>
      <section class="section-1-2" id="skill-section">
        <div class="skills">
          <h2 class="section-heading" id="skill-heading" data-target="skills-content">
            <button class="toggle-button" id="toggle-button-1">SKILLS </button>
          </h2>
          <ul class="section-content" id="skills-content">
            <li class="listSkills" contenteditable="true">${skills.skill1}</li>
            <li class="listSkills" contenteditable="true">${skills.skill2}</li>
            <li class="listSkills" contenteditable="true">${skills.skill3}</li>
            <li class="listSkills" contenteditable="true">${skills.skill4}</li>
          </ul>
        </div>
      </section>
      <section class="section-1-3" id="interest-section">
        <div class="interest">
          <h2 class="section-heading" id="interests-heading" data-target="interest-content">
            <button class="toggle-button" id="toggle-button-1">Interest </button>
          </h2>
          <ul class="interest-content" id="interest-content">
            <li class="listInterest"  contenteditable="true">${interests.interest1}</li>
            <li class="listInterest" contenteditable="true">${interests.interest2}</li>
            <li class="listInterest" contenteditable="true">${interests.interest3}</li>
            <li class="listInterest" contenteditable="true">${interests.interest4}</li>
          </ul>
        </div>
      </section>
      <section class="section-1-4" id="languages-section">
        <div class="languages">
          <h2 class="section-heading" id="languages-heading" data-target="languages-content">
            <button class="toggle-button" id="toggle-button-1">Languages </button>
          </h2>
          <ul class="section-content" id="languages-content">
            <li class="languagesList"  contenteditable="true">${languages.language1}</li>
            <li class="languagesList"  contenteditable="true">${languages.language2}</li>
            <li class="languagesList"  contenteditable="true">${languages.language3}</li>
          </ul>
        </div>
      </section>

    </section>
    <section class="section-2">
      <section class="section-2-1" id="about-section">
        <div class="about">
          <h2 class="section-heading" id="aboutMeHeading-1"
            id="personName">${userName}</h2>
          <h3 class="section-heading" id="aboutMeHeading-2">${jobPosition}</h3>
          <h4 class="section-heading" id="aboutMeHeading-3" data-target="aboutMeContent">
            <button class="toggle-button" class="toggle-button-2">Professional Information </button> 
          </h4>
          <p class="section-content" id="aboutMeContent"  contenteditable="true">
           ${professionalInfo}
          </p>
        </div>
      </section>
      <section class="section-2-2" id="personalInfo-section">
        <h2 class="section-heading" id="personalInfoHeading" data-target="personalInfoContent">
          <button class="toggle-button" class="toggle-button-2">Personal Information </button>
        </h2>
        <div class="section-content" id="personalInfoContent" class="Personal-info">
          <table id="personalInfoTable">
            <tbody id="personalInfoBody">
              <tr class="PersonalInfoRow">
                <td class="personalInfoColumn"><img class="contactInfoIcon" src="../Milestone-1-2/phone_icon.png" alt="phone"></td>
                <td class="personalInfoColumn"  contenteditable="true">${personalInfo.fatherName}</td>
              </tr>
              <tr class="PersonalInfoRow">
                <td class="personalInfoColumn"><img class="contactInfoIcon" src="../Milestone-1-2/whatsapp_icon.jpeg" alt="whatsapp"></td>
                <td class="personalInfoColumn"  contenteditable="true">${personalInfo.dob}</td>
              </tr>
              <tr class="PersonalInfoRow">
                <td class="personalInfoColumn"><img class="contactInfoIcon" src="../Milestone-1-2/gmail-icon.png" alt="email"></td>
                <td class="personalInfoColumn"  contenteditable="true">${personalInfo.maritalStatus}</td>
              </tr>
              <tr class="PersonalInfoRow">
                <td class="personalInfoColumn"><img class="contactInfoIcon" src="../Milestone-1-2/location_icon.png" alt="address"></td>
                <td class="personalInfoColumn"  contenteditable="true">${personalInfo.nationality}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="section-2-3" id="education-section">
        <h2 class="section-heading" id="education-heading"
          data-target="education-content">
          <button class="toggle-button" class="toggle-button-2">Education </button>
        </h2>
        <div class="education-content" class="section-content" id="education-content">
                ${educationEntries.map(entry => `
                  <div class="education-content-columns">
                    <p class="degreeAndYear" contenteditable="true"><b>${entry.degree}</b><br>${entry.year}</p>
                    <p class="institute" contenteditable="true">${entry.institute}</p>
                  </div>
                `).join('')}
      </section>
      <section class="section-2-4" id="experience-section">

        <div class="experience">
          <h2 class="section-heading" id="experience-heading" data-target="experience-content-1,experience-content-2">
            
            <button class="toggle-button">Experience </button>
          </h2>
           ${experienceEntries.map(entry => `
                  <section class="experience-content" id="experience-content">
                    <div class="company">
                      <p class="companyAndYear" contenteditable="true"><b>${entry.company}</b><br>${entry.period}</p>
                    </div>
                    <div class="achievements">
                      <p class="achievementsDetail" contenteditable="true">${entry.achievements}</p>
                    </div>
                  </section>
                `).join('')}
    </section>
  </section>
  </section>
  <button id="download-button" style="display:block;">Download Resume</button>
  <script src="../Milestone-1-2/main.js" defer></script>
  
</body>
    `;

    // Update resume section with the generated HTML
    if (resumeOutput) {
      resumeOutput.innerHTML = resumeHTML;
    }
  });
});
