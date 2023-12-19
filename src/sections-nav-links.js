"use strict";
//// retrieving relevant DOM elements
//link elements
let profileButton = document.getElementById('profile-nav-link');
let keySkillsButton = document.getElementById('key-it-skills-nav-link');
let mainExperiencesButton = document.getElementById('main-experiences-nav-link');
//section elements
let profileSection = document.getElementById('profile');
let keySkillsSection = document.getElementById('key-skills');
let mainExperiencesSection = document.getElementById('main-work-experiences');
//creating callback functions
let showProfile = () => {
    if (profileSection &&
        keySkillsSection &&
        mainExperiencesSection) {
        profileSection.style.display = 'block';
        keySkillsSection.style.display = 'none';
        mainExperiencesSection.style.display = 'none';
    }
};
let showKeySkills = () => {
    if (profileSection &&
        keySkillsSection &&
        mainExperiencesSection) {
        keySkillsSection.style.display = 'block';
        profileSection.style.display = 'none';
        mainExperiencesSection.style.display = 'none';
    }
};
let showMainExperiences = () => {
    if (profileSection &&
        keySkillsSection &&
        mainExperiencesSection) {
        mainExperiencesSection.style.display = 'block';
        keySkillsSection.style.display = 'none';
        profileSection.style.display = 'none';
    }
};
// setting event listeners
profileButton === null || profileButton === void 0 ? void 0 : profileButton.addEventListener('click', showProfile);
keySkillsButton === null || keySkillsButton === void 0 ? void 0 : keySkillsButton.addEventListener('click', showKeySkills);
mainExperiencesButton === null || mainExperiencesButton === void 0 ? void 0 : mainExperiencesButton.addEventListener('click', showMainExperiences);
