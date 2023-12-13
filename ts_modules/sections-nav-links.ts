//// retrieving relevant DOM elements

//link elements
let profileButton: HTMLElement | null = document.getElementById('profile-nav-link')
let keySkillsButton: HTMLElement | null = document.getElementById('key-it-skills-nav-link')
let mainExperiencesButton: HTMLElement | null = document.getElementById('main-experiences-nav-link')

//section elements
let profileSection: HTMLElement | null = document.getElementById('profile')
let keySkillsSection: HTMLElement | null = document.getElementById('key-skills')
let mainExperiencesSection: HTMLElement | null = document.getElementById('main-work-experiences')

//creating callback functions

let showProfile = ():void => {
  if (profileSection && 
      keySkillsSection && 
      mainExperiencesSection
  ) {
    profileSection.style.display = 'block'
    keySkillsSection.style.display = 'none'
    mainExperiencesSection.style.display = 'none'
  }
}
let showKeySkills = ():void => {
  if (profileSection && 
      keySkillsSection && 
      mainExperiencesSection
  ) {
    keySkillsSection.style.display = 'block'
    profileSection.style.display = 'none'
    mainExperiencesSection.style.display = 'none'
  }
}
let showMainExperiences = ():void => {
  if (profileSection && 
      keySkillsSection && 
      mainExperiencesSection
  ) {
    mainExperiencesSection.style.display = 'block'
    keySkillsSection.style.display = 'none'
    profileSection.style.display = 'none'
  }
}

// setting event listeners

profileButton?.addEventListener('click', showProfile)
keySkillsButton?.addEventListener('click', showKeySkills)
mainExperiencesButton?.addEventListener('click', showMainExperiences)