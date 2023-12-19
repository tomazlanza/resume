//// retrieving DOM elements of interest

// paragraph elements 
let javascriptParagraph: HTMLElement | null = document.getElementById('js-ts-span')
let reactParagraph: HTMLElement | null = document.getElementById('react-span')
let nodeParagraph: HTMLElement | null = document.getElementById('node-express-span')
let sqlParagraph: HTMLElement | null = document.getElementById('my-sql-span')
let cssParagraph: HTMLElement | null = document.getElementById('css-sass-span')
let htmlParagraph: HTMLElement | null = document.getElementById('html-span')
let rPythonParagraph: HTMLElement | null = document.getElementById('r-python-span')
let vbaParagraph: HTMLElement | null = document.getElementById('vba-span')

// svg elements
let javascriptSVG: HTMLElement | null = document.getElementById('javascript-logo')
let typescriptSVG: HTMLElement | null = document.getElementById('typescript-logo')
let reactSVG: HTMLElement | null = document.getElementById('react-logo')
let cssSVG: HTMLElement | null = document.getElementById('css-logo')
let sassSVG: HTMLElement | null = document.getElementById('sass-logo')
let htmlSVG: HTMLElement | null = document.getElementById('html-logo')
let pythonSVG: HTMLElement | null = document.getElementById('python-logo')
let rSVG: HTMLElement | null = document.getElementById('r-logo')
let vbaSVG: HTMLElement | null = document.getElementById('vba-logo')
let sqlSVG: HTMLElement | null = document.getElementById('my-sql-logo')
let nodeSVG: HTMLElement | null = document.getElementById('node-logo')
let expressSVG: HTMLElement | null = document.getElementById('express-logo')


//// creating event handlers functions

const pointerOverHandler = (
  event: Event, 
  paragraph: HTMLElement | null, 
  logos: HTMLElement[] | null
):void => {
  
  if ((logos && paragraph) && 
    ((event.currentTarget === paragraph) || (logos?.includes(event.currentTarget as HTMLElement)))
  ) {
    logos.forEach((logo) => {
      logo.style.transform = 'translateY(-10%)'
      logo.style.cursor = 'pointer'
    })
    paragraph.style.transform = 'translateY(-10%)'
    paragraph.style.textShadow = '0 0 2px var(--fourth-details-color), 0 0 4px var(--fourth-details-color), 0 0 8px var(--fourth-details-color), 0 0 16px var(--fourth-details-color), 0 0 32px var(--fourth-details-color)'
  } else {
    return
  }
}

const pointerOutHandler = (
  event: Event, 
  paragraph: HTMLElement | null, 
  logos: HTMLElement[] | null
):void => {
  if (
    (logos && paragraph) && 
    (
      (event.currentTarget === paragraph) || 
      (logos?.includes(event.currentTarget as HTMLElement))
    )
  ) {
    logos.forEach((logo) => {
      logo.style.transform = 'translateY(0)'
      logo.style.cursor = 'initial'
    })
    paragraph.style.transform = 'translateY(0)'
    paragraph.style.textShadow = 'initial'
  } else {
    return
  }
}


//// assigning event listeners for each tool or set of tools (by order of appearance)

// javascript & typescript

//
javascriptParagraph?.addEventListener('pointerover', (event) => {
  pointerOverHandler(
    event, 
    javascriptParagraph, 
    [javascriptSVG!, typescriptSVG!]
  )
 }
)

javascriptParagraph?.addEventListener('pointerout', (event) => {
  pointerOutHandler(
    event, 
    javascriptParagraph, 
    [javascriptSVG!, typescriptSVG!]
  )
 }
)

//
javascriptSVG?.addEventListener('pointerover', (event) => {
  pointerOverHandler(
    event, 
    javascriptParagraph, 
    [javascriptSVG!, typescriptSVG!],
  )
 }
)

javascriptSVG?.addEventListener('pointerout', (event) => {
  pointerOutHandler(
    event, 
    javascriptParagraph, 
    [javascriptSVG!, typescriptSVG!]
  )
 }
)
 
javascriptSVG?.addEventListener('click', () => {
  window.open('https://tc39.es/ecma262/', '_blank'
  )
 }
)

//
typescriptSVG?.addEventListener('pointerover', (event) => {
    pointerOverHandler(
      event, 
    javascriptParagraph, 
    [javascriptSVG!, typescriptSVG!]
  )
 }
)

typescriptSVG?.addEventListener('pointerout', (event) => {
  pointerOutHandler(
    event, 
    javascriptParagraph, 
    [javascriptSVG!, typescriptSVG!]
  )
 }
)
  
typescriptSVG?.addEventListener('click', () => {
  window.open('https://www.typescriptlang.org/docs/', '_blank')
  }
)


//// react

//
reactParagraph?.addEventListener('pointerover', (event) => {
  pointerOverHandler(
    event, 
    reactParagraph, 
    [reactSVG!]
  )
 }
)

reactParagraph?.addEventListener('pointerout', (event) => {
  pointerOutHandler(event, 
    reactParagraph, 
    [reactSVG!]
  )
 }
)

//
reactSVG?.addEventListener('pointerover', (event) => {
  pointerOverHandler(
    event, 
    reactParagraph, 
    [reactSVG!]
  )
 }
)

reactSVG?.addEventListener('pointerout', (event) => {
  pointerOutHandler(
    event, 
    reactParagraph, 
    [reactSVG!]
  )
 }
)

reactSVG?.addEventListener('click', () => {
  window.open('https://react.dev/', '_blank')
 }
)


//// css & sass

// css

//
cssParagraph?.addEventListener('pointerover', (event) => {
  pointerOverHandler(event, 
    cssParagraph, 
    [cssSVG!, sassSVG!]
  )
 }
)

cssParagraph?.addEventListener('pointerout', (event) => {
  pointerOutHandler(event, 
    cssParagraph, 
    [cssSVG!, sassSVG!]
  )
 }
)

//
cssSVG?.addEventListener('pointerover', (event) => {
  pointerOverHandler(event, 
    cssParagraph, 
    [cssSVG!, sassSVG!]
  )
 }
)

cssSVG?.addEventListener('pointerout', (event) => {
  pointerOutHandler(event, 
    cssParagraph, 
    [cssSVG!, sassSVG!]
  )
 }
)

cssSVG?.addEventListener('click', () => {
  window.open('https://www.w3.org/Style/CSS/', "_blank")
 }
)

// sass

sassSVG?.addEventListener('pointerover', (event) => {
  pointerOverHandler(event, 
    cssParagraph,
    [cssSVG!, sassSVG!]
  )
 }
)

sassSVG?.addEventListener('pointerout', (event) => {
  pointerOutHandler(event, 
    cssParagraph,
    [cssSVG!, sassSVG!]
  )
 }
)

sassSVG?.addEventListener('click', () => {
  window.open('https://sass-lang.com/documentation/', '_blank')
 }
)


//// html

//
htmlParagraph?.addEventListener('pointerover', (event) => {
  pointerOverHandler(event, 
    htmlParagraph, 
    [htmlSVG!]
  )
 }
)

htmlParagraph?.addEventListener('pointerout', (event) => {
  pointerOutHandler(event, 
   htmlParagraph, 
   [htmlSVG!]
  )
 }
)

//
htmlSVG?.addEventListener('pointerover', (event) => {
  pointerOverHandler(event, 
    htmlParagraph, 
    [htmlSVG!]
  )
 }
)

htmlSVG?.addEventListener('pointerout', (event) => {
  pointerOutHandler(event, 
   htmlParagraph, 
   [htmlSVG!]
  )
 }
)

htmlSVG?.addEventListener('click', () => {
  window.open('https://developer.mozilla.org/en-US/docs/Web/HTML', '_blank')
 }
)


//// r & python

rPythonParagraph?.addEventListener('pointerover', (event) => {
  pointerOverHandler(event, 
    rPythonParagraph, 
    [rSVG!, pythonSVG!]
  )
 }
)

rPythonParagraph?.addEventListener('pointerout', (event) => {
  pointerOutHandler(event, 
    rPythonParagraph, 
    [rSVG!, pythonSVG!]
  )
 }
)

// r

rSVG?.addEventListener('pointerover', (event) => {pointerOverHandler(event, 
  rPythonParagraph, 
   [rSVG!, pythonSVG!]
  )
 }
)

rSVG?.addEventListener('pointerout', (event) => {pointerOutHandler(event, 
  rPythonParagraph, 
   [rSVG!, pythonSVG!]
  )
 }
)

rSVG?.addEventListener('click', () => {
  window.open('https://www.r-project.org/other-docs.html', '_blank')
 }
)

// python

pythonSVG?.addEventListener('pointerover', (event) => {pointerOverHandler(event, 
  rPythonParagraph, 
   [rSVG!, pythonSVG!]
  )
 }
)

pythonSVG?.addEventListener('pointerout', (event) => {pointerOutHandler(event, 
  rPythonParagraph, 
   [rSVG!, pythonSVG!]
  )
 }
)

pythonSVG?.addEventListener('click', () => {
  window.open('https://www.python.org/doc/', '_blank')
 }
)


//// VBA

//
vbaParagraph?.addEventListener('pointerover', (event) => {
  pointerOverHandler(
    event, 
    vbaParagraph, 
    [vbaSVG!]
  )
 }
)

vbaParagraph?.addEventListener('pointerout', (event) => {
  pointerOutHandler(
    event, 
    vbaParagraph, 
    [vbaSVG!]
  )
 }
)

//
vbaSVG?.addEventListener('pointerover', (event) => {
  pointerOverHandler(
    event, 
    vbaParagraph, 
    [vbaSVG!]
  )
 }
)

vbaSVG?.addEventListener('pointerout', (event) => {
  pointerOutHandler(event, 
    vbaParagraph, 
    [vbaSVG!]
  )
 }
)

vbaSVG?.addEventListener('click', () => {
  window.open('https://github.com/MicrosoftDocs/VBA-Docs/blob/main/Library-Reference/Concepts/getting-started-with-vba-in-office.md', '_blank')
 }
)


//// sql

//
sqlParagraph?.addEventListener('pointerover', (event) => {
  pointerOverHandler(event, 
    sqlParagraph, 
    [sqlSVG!]
  )
 }
)

sqlParagraph?.addEventListener('pointerout', (event) => {
  pointerOutHandler(event, 
    sqlParagraph, 
    [sqlSVG!]
  )
 }
)

//
sqlSVG?.addEventListener('pointerover', (event) => {
  pointerOverHandler(event, 
    sqlParagraph, 
    [sqlSVG!]
  )
 }
)

sqlSVG?.addEventListener('pointerout', (event) => {
  pointerOutHandler(event, 
    sqlParagraph, 
    [sqlSVG!]
  )
 }
)

sqlSVG?.addEventListener('click', () => {
  window.open('https://dev.mysql.com/doc/', '_blank')
 }
)


//// Node & Express

// Node

//
nodeParagraph?.addEventListener('pointerover', (event) => {
  pointerOverHandler(event, 
    nodeParagraph, 
    [nodeSVG!, expressSVG!]
  )
 }
)

nodeParagraph?.addEventListener('pointerout', (event) => {
  pointerOutHandler(event, 
    nodeParagraph, 
    [nodeSVG!, expressSVG!]
  )
 }
)

//
nodeSVG?.addEventListener('pointerover', (event) => {
  pointerOverHandler(event, 
    nodeParagraph, 
    [nodeSVG!, expressSVG!]
  )
 }
)

nodeSVG?.addEventListener('pointerout', (event) => {
  pointerOutHandler(event, 
    nodeParagraph, 
    [nodeSVG!, expressSVG!]
  )
 }
)

nodeSVG?.addEventListener('click', () => {
  window.open('https://nodejs.org/docs/latest/api/', '_blank')
 }
)


// express

expressSVG?.addEventListener('pointerover', (event) => {
  pointerOverHandler(event, 
    nodeParagraph, 
    [nodeSVG!, expressSVG!]
  )
 }
)

expressSVG?.addEventListener('pointerout', (event) => {
  pointerOutHandler(event, 
    nodeParagraph, 
    [nodeSVG!, expressSVG!]
  )
 }
)

expressSVG?.addEventListener('click', () => {
  window.open('https://expressjs.com/', '_blank')
 }
)








