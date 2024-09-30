document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeOutput = document.getElementById("page");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var img = document.getElementById("profile-pic");
        // Skills
        var skills = {
            skill1: document.getElementById("skill1").value,
            skill2: document.getElementById("skill2").value,
            skill3: document.getElementById("skill3").value,
            skill4: document.getElementById("skill4").value,
        };
        // Interests
        var interests = {
            interest1: document.getElementById("interest1").value,
            interest2: document.getElementById("interest2").value,
            interest3: document.getElementById("interest3").value,
            interest4: document.getElementById("interest4").value,
        };
        // Languages
        var languages = {
            language1: document.getElementById("language1").value,
            language2: document.getElementById("language2").value,
            language3: document.getElementById("language3").value,
        };
        // User Info
        var userName = document.getElementById("name").value;
        var jobPosition = document.getElementById("job-position").value;
        var professionalInfo = document.getElementById("professional-info").value;
        // Personal Info
        var personalInfo = {
            fatherName: document.getElementById("fatherName").value,
            dob: document.getElementById("dob").value,
            maritalStatus: document.getElementById("maritalStatus").value,
            nationality: document.getElementById("nationality").value,
        };
        // Collect Education Entries
        var educationEntries = Array.from(document.querySelectorAll(".education-entry")).map(function (entry) {
            var _a, _b, _c;
            return {
                degree: (_a = entry.querySelector(".degree")) === null || _a === void 0 ? void 0 : _a.value,
                year: (_b = entry.querySelector(".year")) === null || _b === void 0 ? void 0 : _b.value,
                institute: (_c = entry.querySelector(".institute")) === null || _c === void 0 ? void 0 : _c.value,
            };
        });
        // Collect Experience Entries
        var experienceEntries = Array.from(document.querySelectorAll(".experience-entry")).map(function (entry) {
            var _a, _b, _c;
            return {
                company: (_a = entry.querySelector(".company")) === null || _a === void 0 ? void 0 : _a.value,
                period: (_b = entry.querySelector(".workingPeriod")) === null || _b === void 0 ? void 0 : _b.value,
                achievements: (_c = entry.querySelector(".achievements")) === null || _c === void 0 ? void 0 : _c.value,
            };
        });
        var resumeHTML = "      \n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Interactive Resume Builder</title>\n <link rel=\"stylesheet\" href=\"./resume.css\" />\n  <link rel=\"stylesheet\" href=\"../Milestone-1-2/media-query.css\" />\n</head>\n<body>\n  <section class=\"main-section\">\n    <section class=\"section-1\">\n      <section class=\"section-1-1\">\n        <div id=\"profile-picture\" >\n        <img id=\"pic\" contenteditable=\"true\" src=\"".concat(img, "\" />\n        </div>\n      </section>\n      <section class=\"section-1-2\" id=\"skill-section\">\n        <div class=\"skills\">\n          <h2 class=\"section-heading\" id=\"skill-heading\" data-target=\"skills-content\">\n            <button class=\"toggle-button\" id=\"toggle-button-1\">SKILLS </button>\n          </h2>\n          <ul class=\"section-content\" id=\"skills-content\">\n            <li class=\"listSkills\" contenteditable=\"true\">").concat(skills.skill1, "</li>\n            <li class=\"listSkills\" contenteditable=\"true\">").concat(skills.skill2, "</li>\n            <li class=\"listSkills\" contenteditable=\"true\">").concat(skills.skill3, "</li>\n            <li class=\"listSkills\" contenteditable=\"true\">").concat(skills.skill4, "</li>\n          </ul>\n        </div>\n      </section>\n      <section class=\"section-1-3\" id=\"interest-section\">\n        <div class=\"interest\">\n          <h2 class=\"section-heading\" id=\"interests-heading\" data-target=\"interest-content\">\n            <button class=\"toggle-button\" id=\"toggle-button-1\">Interest </button>\n          </h2>\n          <ul class=\"interest-content\" id=\"interest-content\">\n            <li class=\"listInterest\"  contenteditable=\"true\">").concat(interests.interest1, "</li>\n            <li class=\"listInterest\" contenteditable=\"true\">").concat(interests.interest2, "</li>\n            <li class=\"listInterest\" contenteditable=\"true\">").concat(interests.interest3, "</li>\n            <li class=\"listInterest\" contenteditable=\"true\">").concat(interests.interest4, "</li>\n          </ul>\n        </div>\n      </section>\n      <section class=\"section-1-4\" id=\"languages-section\">\n        <div class=\"languages\">\n          <h2 class=\"section-heading\" id=\"languages-heading\" data-target=\"languages-content\">\n            <button class=\"toggle-button\" id=\"toggle-button-1\">Languages </button>\n          </h2>\n          <ul class=\"section-content\" id=\"languages-content\">\n            <li class=\"languagesList\"  contenteditable=\"true\">").concat(languages.language1, "</li>\n            <li class=\"languagesList\"  contenteditable=\"true\">").concat(languages.language2, "</li>\n            <li class=\"languagesList\"  contenteditable=\"true\">").concat(languages.language3, "</li>\n          </ul>\n        </div>\n      </section>\n\n    </section>\n    <section class=\"section-2\">\n      <section class=\"section-2-1\" id=\"about-section\">\n        <div class=\"about\">\n          <h2 class=\"section-heading\" id=\"aboutMeHeading-1\"\n            id=\"personName\">").concat(userName, "</h2>\n          <h3 class=\"section-heading\" id=\"aboutMeHeading-2\">").concat(jobPosition, "</h3>\n          <h4 class=\"section-heading\" id=\"aboutMeHeading-3\" data-target=\"aboutMeContent\">\n            <button class=\"toggle-button\" class=\"toggle-button-2\">Professional Information </button> \n          </h4>\n          <p class=\"section-content\" id=\"aboutMeContent\"  contenteditable=\"true\">\n           ").concat(professionalInfo, "\n          </p>\n        </div>\n      </section>\n      <section class=\"section-2-2\" id=\"personalInfo-section\">\n        <h2 class=\"section-heading\" id=\"personalInfoHeading\" data-target=\"personalInfoContent\">\n          <button class=\"toggle-button\" class=\"toggle-button-2\">Personal Information </button>\n        </h2>\n        <div class=\"section-content\" id=\"personalInfoContent\" class=\"Personal-info\">\n          <table id=\"personalInfoTable\">\n            <tbody id=\"personalInfoBody\">\n              <tr class=\"PersonalInfoRow\">\n                <td class=\"personalInfoColumn\"><img class=\"contactInfoIcon\" src=\"../Milestone-1-2/phone_icon.png\" alt=\"phone\"></td>\n                <td class=\"personalInfoColumn\"  contenteditable=\"true\">").concat(personalInfo.fatherName, "</td>\n              </tr>\n              <tr class=\"PersonalInfoRow\">\n                <td class=\"personalInfoColumn\"><img class=\"contactInfoIcon\" src=\"../Milestone-1-2/whatsapp_icon.jpeg\" alt=\"whatsapp\"></td>\n                <td class=\"personalInfoColumn\"  contenteditable=\"true\">").concat(personalInfo.dob, "</td>\n              </tr>\n              <tr class=\"PersonalInfoRow\">\n                <td class=\"personalInfoColumn\"><img class=\"contactInfoIcon\" src=\"../Milestone-1-2/gmail-icon.png\" alt=\"email\"></td>\n                <td class=\"personalInfoColumn\"  contenteditable=\"true\">").concat(personalInfo.maritalStatus, "</td>\n              </tr>\n              <tr class=\"PersonalInfoRow\">\n                <td class=\"personalInfoColumn\"><img class=\"contactInfoIcon\" src=\"../Milestone-1-2/location_icon.png\" alt=\"address\"></td>\n                <td class=\"personalInfoColumn\"  contenteditable=\"true\">").concat(personalInfo.nationality, "</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </section>\n      <section class=\"section-2-3\" id=\"education-section\">\n        <h2 class=\"section-heading\" id=\"education-heading\"\n          data-target=\"education-content\">\n          <button class=\"toggle-button\" class=\"toggle-button-2\">Education </button>\n        </h2>\n        <div class=\"education-content\" class=\"section-content\" id=\"education-content\">\n                ").concat(educationEntries.map(function (entry) { return "\n                  <div class=\"education-content-columns\">\n                    <p class=\"degreeAndYear\" contenteditable=\"true\"><b>".concat(entry.degree, "</b><br>").concat(entry.year, "</p>\n                    <p class=\"institute\" contenteditable=\"true\">").concat(entry.institute, "</p>\n                  </div>\n                "); }).join(''), "\n      </section>\n      <section class=\"section-2-4\" id=\"experience-section\">\n\n        <div class=\"experience\">\n          <h2 class=\"section-heading\" id=\"experience-heading\" data-target=\"experience-content-1,experience-content-2\">\n            \n            <button class=\"toggle-button\">Experience </button>\n          </h2>\n           ").concat(experienceEntries.map(function (entry) { return "\n                  <section class=\"experience-content\" id=\"experience-content\">\n                    <div class=\"company\">\n                      <p class=\"companyAndYear\" contenteditable=\"true\"><b>".concat(entry.company, "</b><br>").concat(entry.period, "</p>\n                    </div>\n                    <div class=\"achievements\">\n                      <p class=\"achievementsDetail\" contenteditable=\"true\">").concat(entry.achievements, "</p>\n                    </div>\n                  </section>\n                "); }).join(''), "\n    </section>\n  </section>\n  </section>\n  <button id=\"download-button\" style=\"display:block;\">Download Resume</button>\n  <script src=\"../Milestone-1-2/main.js\" defer></script>\n  \n</body>\n    ");
        // Update resume section with the generated HTML
        if (resumeOutput) {
            resumeOutput.innerHTML = resumeHTML;
        }
    });
});
