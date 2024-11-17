// Function to add a new education entry
function addEducationEntry() {
    const educationSection = document.getElementById('education-section');
    const newEducationEntry = document.createElement('div');
    newEducationEntry.className = 'education-entry';
    newEducationEntry.innerHTML = `
      <label for="degree">Degree:
        <input class="degree" type="text" />
      </label>
      <label for="year">Year:
        <input class="year" type="number" />
      </label>
      <label for="institute">Institute:
        <input class="institute" type="text" />
      </label>
    `;
    educationSection.appendChild(newEducationEntry);
  }
  
  // Function to add a new experience entry
  function addExperienceEntry() {
    const experienceSection = document.getElementById('experience-section');
    const newExperienceEntry = document.createElement('div');
    newExperienceEntry.className = 'experience-entry';
    newExperienceEntry.innerHTML = `
      <label for="company">Company:
        <input class="company" type="text" />
      </label>
      <label for="workingPeriod">Working Period:
        <input class="workingPeriod" type="number" />
      </label>
      <label for="achievements">Achievements:
        <textarea class="achievements"></textarea>
      </label>
    `;
    experienceSection.appendChild(newExperienceEntry);
  }
  
  // Event Listeners for adding more education and experience entries
  document.getElementById('add-education').addEventListener('click', addEducationEntry);
  document.getElementById('add-experience').addEventListener('click', addExperienceEntry);
  
  // Basic form submit event to prevent page reload and handle form data
  document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Further form handling logic can be implemented here
    alert('Form submitted successfully!');
  });
  