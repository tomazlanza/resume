//// retrieving DOM elements of interest
// paragraph elements 
var javascriptParagraph = document.getElementById('js-ts-span');
var reactParagraph = document.getElementById('react-span');
var nodeParagraph = document.getElementById('node-express-span');
var sqlParagraph = document.getElementById('my-sql-span');
var cssParagraph = document.getElementById('css-sass-span');
var htmlParagraph = document.getElementById('html-span');
var rPythonParagraph = document.getElementById('r-python-span');
var vbaParagraph = document.getElementById('vba-span');
// svg elements
var javascriptSVG = document.getElementById('javascript-logo');
var typescriptSVG = document.getElementById('typescript-logo');
var reactSVG = document.getElementById('react-logo');
var cssSVG = document.getElementById('css-logo');
var sassSVG = document.getElementById('sass-logo');
var htmlSVG = document.getElementById('html-logo');
var pythonSVG = document.getElementById('python-logo');
var rSVG = document.getElementById('r-logo');
var vbaSVG = document.getElementById('vba-logo');
var sqlSVG = document.getElementById('my-sql-logo');
var nodeSVG = document.getElementById('node-logo');
var expressSVG = document.getElementById('express-logo');
//// creating event handlers functions
var pointerOverHandler = function (event, paragraph, logos) {
    if ((logos && paragraph) &&
        ((event.currentTarget === paragraph) || (logos === null || logos === void 0 ? void 0 : logos.includes(event.currentTarget)))) {
        logos.forEach(function (logo) {
            logo.style.transform = 'translateY(-10%)';
            logo.style.cursor = 'pointer';
        });
        paragraph.style.scale = '1.03';
        paragraph.style.textShadow = '0 0 2px var(--fourth-details-color), 0 0 4px var(--fourth-details-color), 0 0 8px var(--fourth-details-color), 0 0 16px var(--fourth-details-color), 0 0 32px var(--fourth-details-color)';
    }
    else {
        return;
    }
};
var pointerOutHandler = function (event, paragraph, logos) {
    if ((logos && paragraph) &&
        ((event.currentTarget === paragraph) ||
            (logos === null || logos === void 0 ? void 0 : logos.includes(event.currentTarget)))) {
        logos.forEach(function (logo) {
            logo.style.transform = 'translateY(0)';
            logo.style.cursor = 'initial';
        });
        paragraph.style.scale = '1';
        paragraph.style.textShadow = 'initial';
    }
    else {
        return;
    }
};
//// assigning event listeners for each tool or set of tools (by order of appearance)
// javascript & typescript
//
javascriptParagraph === null || javascriptParagraph === void 0 ? void 0 : javascriptParagraph.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, javascriptParagraph, [javascriptSVG, typescriptSVG]);
});
javascriptParagraph === null || javascriptParagraph === void 0 ? void 0 : javascriptParagraph.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, javascriptParagraph, [javascriptSVG, typescriptSVG]);
});
//
javascriptSVG === null || javascriptSVG === void 0 ? void 0 : javascriptSVG.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, javascriptParagraph, [javascriptSVG, typescriptSVG]);
});
javascriptSVG === null || javascriptSVG === void 0 ? void 0 : javascriptSVG.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, javascriptParagraph, [javascriptSVG, typescriptSVG]);
});
javascriptSVG === null || javascriptSVG === void 0 ? void 0 : javascriptSVG.addEventListener('click', function () {
    window.open('https://tc39.es/ecma262/', '_blank');
});
//
typescriptSVG === null || typescriptSVG === void 0 ? void 0 : typescriptSVG.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, javascriptParagraph, [javascriptSVG, typescriptSVG]);
});
typescriptSVG === null || typescriptSVG === void 0 ? void 0 : typescriptSVG.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, javascriptParagraph, [javascriptSVG, typescriptSVG]);
});
typescriptSVG === null || typescriptSVG === void 0 ? void 0 : typescriptSVG.addEventListener('click', function () {
    window.open('https://www.typescriptlang.org/docs/', '_blank');
});
//// react
//
reactParagraph === null || reactParagraph === void 0 ? void 0 : reactParagraph.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, reactParagraph, [reactSVG]);
});
reactParagraph === null || reactParagraph === void 0 ? void 0 : reactParagraph.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, reactParagraph, [reactSVG]);
});
//
reactSVG === null || reactSVG === void 0 ? void 0 : reactSVG.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, reactParagraph, [reactSVG]);
});
reactSVG === null || reactSVG === void 0 ? void 0 : reactSVG.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, reactParagraph, [reactSVG]);
});
reactSVG === null || reactSVG === void 0 ? void 0 : reactSVG.addEventListener('click', function () {
    window.open('https://react.dev/', '_blank');
});
//// css & sass
// css
//
cssParagraph === null || cssParagraph === void 0 ? void 0 : cssParagraph.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, cssParagraph, [cssSVG, sassSVG]);
});
cssParagraph === null || cssParagraph === void 0 ? void 0 : cssParagraph.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, cssParagraph, [cssSVG, sassSVG]);
});
//
cssSVG === null || cssSVG === void 0 ? void 0 : cssSVG.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, cssParagraph, [cssSVG, sassSVG]);
});
cssSVG === null || cssSVG === void 0 ? void 0 : cssSVG.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, cssParagraph, [cssSVG, sassSVG]);
});
cssSVG === null || cssSVG === void 0 ? void 0 : cssSVG.addEventListener('click', function () {
    window.open('https://www.w3.org/Style/CSS/', "_blank");
});
// sass
sassSVG === null || sassSVG === void 0 ? void 0 : sassSVG.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, cssParagraph, [cssSVG, sassSVG]);
});
sassSVG === null || sassSVG === void 0 ? void 0 : sassSVG.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, cssParagraph, [cssSVG, sassSVG]);
});
sassSVG === null || sassSVG === void 0 ? void 0 : sassSVG.addEventListener('click', function () {
    window.open('https://sass-lang.com/documentation/', '_blank');
});
//// html
//
htmlParagraph === null || htmlParagraph === void 0 ? void 0 : htmlParagraph.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, htmlParagraph, [htmlSVG]);
});
htmlParagraph === null || htmlParagraph === void 0 ? void 0 : htmlParagraph.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, htmlParagraph, [htmlSVG]);
});
//
htmlSVG === null || htmlSVG === void 0 ? void 0 : htmlSVG.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, htmlParagraph, [htmlSVG]);
});
htmlSVG === null || htmlSVG === void 0 ? void 0 : htmlSVG.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, htmlParagraph, [htmlSVG]);
});
htmlSVG === null || htmlSVG === void 0 ? void 0 : htmlSVG.addEventListener('click', function () {
    window.open('https://developer.mozilla.org/en-US/docs/Web/HTML', '_blank');
});
//// r & python
rPythonParagraph === null || rPythonParagraph === void 0 ? void 0 : rPythonParagraph.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, rPythonParagraph, [rSVG, pythonSVG]);
});
rPythonParagraph === null || rPythonParagraph === void 0 ? void 0 : rPythonParagraph.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, rPythonParagraph, [rSVG, pythonSVG]);
});
// r
rSVG === null || rSVG === void 0 ? void 0 : rSVG.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, rPythonParagraph, [rSVG, pythonSVG]);
});
rSVG === null || rSVG === void 0 ? void 0 : rSVG.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, rPythonParagraph, [rSVG, pythonSVG]);
});
rSVG === null || rSVG === void 0 ? void 0 : rSVG.addEventListener('click', function () {
    window.open('https://www.r-project.org/other-docs.html', '_blank');
});
// python
pythonSVG === null || pythonSVG === void 0 ? void 0 : pythonSVG.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, rPythonParagraph, [rSVG, pythonSVG]);
});
pythonSVG === null || pythonSVG === void 0 ? void 0 : pythonSVG.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, rPythonParagraph, [rSVG, pythonSVG]);
});
pythonSVG === null || pythonSVG === void 0 ? void 0 : pythonSVG.addEventListener('click', function () {
    window.open('https://www.python.org/doc/', '_blank');
});
//// VBA
//
vbaParagraph === null || vbaParagraph === void 0 ? void 0 : vbaParagraph.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, vbaParagraph, [vbaSVG]);
});
vbaParagraph === null || vbaParagraph === void 0 ? void 0 : vbaParagraph.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, vbaParagraph, [vbaSVG]);
});
//
vbaSVG === null || vbaSVG === void 0 ? void 0 : vbaSVG.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, vbaParagraph, [vbaSVG]);
});
vbaSVG === null || vbaSVG === void 0 ? void 0 : vbaSVG.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, vbaParagraph, [vbaSVG]);
});
vbaSVG === null || vbaSVG === void 0 ? void 0 : vbaSVG.addEventListener('click', function () {
    window.open('https://github.com/MicrosoftDocs/VBA-Docs/blob/main/Library-Reference/Concepts/getting-started-with-vba-in-office.md', '_blank');
});
//// sql
//
sqlParagraph === null || sqlParagraph === void 0 ? void 0 : sqlParagraph.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, sqlParagraph, [sqlSVG]);
});
sqlParagraph === null || sqlParagraph === void 0 ? void 0 : sqlParagraph.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, sqlParagraph, [sqlSVG]);
});
//
sqlSVG === null || sqlSVG === void 0 ? void 0 : sqlSVG.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, sqlParagraph, [sqlSVG]);
});
sqlSVG === null || sqlSVG === void 0 ? void 0 : sqlSVG.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, sqlParagraph, [sqlSVG]);
});
sqlSVG === null || sqlSVG === void 0 ? void 0 : sqlSVG.addEventListener('click', function () {
    window.open('https://dev.mysql.com/doc/', '_blank');
});
//// Node & Express
// Node
//
nodeParagraph === null || nodeParagraph === void 0 ? void 0 : nodeParagraph.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, nodeParagraph, [nodeSVG, expressSVG]);
});
nodeParagraph === null || nodeParagraph === void 0 ? void 0 : nodeParagraph.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, nodeParagraph, [nodeSVG, expressSVG]);
});
//
nodeSVG === null || nodeSVG === void 0 ? void 0 : nodeSVG.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, nodeParagraph, [nodeSVG, expressSVG]);
});
nodeSVG === null || nodeSVG === void 0 ? void 0 : nodeSVG.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, nodeParagraph, [nodeSVG, expressSVG]);
});
nodeSVG === null || nodeSVG === void 0 ? void 0 : nodeSVG.addEventListener('click', function () {
    window.open('https://nodejs.org/docs/latest/api/', '_blank');
});
// express
expressSVG === null || expressSVG === void 0 ? void 0 : expressSVG.addEventListener('pointerover', function (event) {
    pointerOverHandler(event, nodeParagraph, [nodeSVG, expressSVG]);
});
expressSVG === null || expressSVG === void 0 ? void 0 : expressSVG.addEventListener('pointerout', function (event) {
    pointerOutHandler(event, nodeParagraph, [nodeSVG, expressSVG]);
});
expressSVG === null || expressSVG === void 0 ? void 0 : expressSVG.addEventListener('click', function () {
    window.open('https://expressjs.com/', '_blank');
});
