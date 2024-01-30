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
  if ((profileSection && 
       keySkillsSection && 
       mainExperiencesSection) &&
      (profileButton && 
       keySkillsButton && 
       mainExperiencesButton)
  ) {
    profileSection.style.display = 'block'
    keySkillsSection.style.display = 'none'
    mainExperiencesSection.style.display = 'none'

    profileSection.className = 'active'
    keySkillsSection.className = ''
    mainExperiencesSection.className = ''

    profileButton.className = 'inner-link active-inner-link'
    keySkillsButton.className = 'inner-link'
    mainExperiencesButton.className = 'inner-link'
  }
}
let showKeySkills = ():void => {
  if ((profileSection && 
       keySkillsSection && 
       mainExperiencesSection) &&
      (profileButton && 
       keySkillsButton && 
       mainExperiencesButton)
  ) {
    keySkillsSection.style.display = 'block'
    profileSection.style.display = 'none'
    mainExperiencesSection.style.display = 'none'
    
    keySkillsSection.className = 'active'
    profileSection.className = ''
    mainExperiencesSection.className = ''

    keySkillsButton.className = 'inner-link  active-inner-link'
    profileButton.className = 'inner-link'
    mainExperiencesButton.className = 'inner-link'
  }
}
let showMainExperiences = ():void => {
  if ((profileSection && 
       keySkillsSection && 
       mainExperiencesSection) &&
      (profileButton && 
       keySkillsButton && 
       mainExperiencesButton)
  ) {
    mainExperiencesSection.style.display = 'block'
    keySkillsSection.style.display = 'none'
    profileSection.style.display = 'none'
    
    mainExperiencesSection.className = 'active'
    keySkillsSection.className = ''
    profileSection.className = ''

    mainExperiencesButton.className = 'inner-link  active-inner-link'
    keySkillsButton.className = 'inner-link'
    profileButton.className = 'inner-link'
  }
}

// setting event listeners

profileButton?.addEventListener('click', showProfile)
keySkillsButton?.addEventListener('click', showKeySkills)
mainExperiencesButton?.addEventListener('click', showMainExperiences)