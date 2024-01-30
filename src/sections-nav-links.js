//// retrieving relevant DOM elements
//link elements
var profileButton = document.getElementById('profile-nav-link');
var keySkillsButton = document.getElementById('key-it-skills-nav-link');
var mainExperiencesButton = document.getElementById('main-experiences-nav-link');
//section elements
var profileSection = document.getElementById('profile');
var keySkillsSection = document.getElementById('key-skills');
var mainExperiencesSection = document.getElementById('main-work-experiences');
//creating callback functions
var showProfile = function () {
    if ((profileSection &&
        keySkillsSection &&
        mainExperiencesSection) &&
        (profileButton &&
            keySkillsButton &&
            mainExperiencesButton)) {
        profileSection.style.display = 'block';
        keySkillsSection.style.display = 'none';
        mainExperiencesSection.style.display = 'none';
        profileSection.className = 'active';
        keySkillsSection.className = '';
        mainExperiencesSection.className = '';
        profileButton.className = 'inner-link active-inner-link';
        keySkillsButton.className = 'inner-link';
        mainExperiencesButton.className = 'inner-link';
    }
};
var showKeySkills = function () {
    if ((profileSection &&
        keySkillsSection &&
        mainExperiencesSection) &&
        (profileButton &&
            keySkillsButton &&
            mainExperiencesButton)) {
        keySkillsSection.style.display = 'block';
        profileSection.style.display = 'none';
        mainExperiencesSection.style.display = 'none';
        keySkillsSection.className = 'active';
        profileSection.className = '';
        mainExperiencesSection.className = '';
        keySkillsButton.className = 'inner-link  active-inner-link';
        profileButton.className = 'inner-link';
        mainExperiencesButton.className = 'inner-link';
    }
};
var showMainExperiences = function () {
    if ((profileSection &&
        keySkillsSection &&
        mainExperiencesSection) &&
        (profileButton &&
            keySkillsButton &&
            mainExperiencesButton)) {
        mainExperiencesSection.style.display = 'block';
        keySkillsSection.style.display = 'none';
        profileSection.style.display = 'none';
        mainExperiencesSection.className = 'active';
        keySkillsSection.className = '';
        profileSection.className = '';
        mainExperiencesButton.className = 'inner-link  active-inner-link';
        keySkillsButton.className = 'inner-link';
        profileButton.className = 'inner-link';
    }
};
// setting event listeners
profileButton === null || profileButton === void 0 ? void 0 : profileButton.addEventListener('click', showProfile);
keySkillsButton === null || keySkillsButton === void 0 ? void 0 : keySkillsButton.addEventListener('click', showKeySkills);
mainExperiencesButton === null || mainExperiencesButton === void 0 ? void 0 : mainExperiencesButton.addEventListener('click', showMainExperiences);
