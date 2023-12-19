"use strict";
//// retrieving DOM elements of interest
// on desktops, unimed LI is outside its 'original' list to enable a better positioning of the image on the page
let outsideUnimedLI = document.getElementById('unimed-li-outside-its-div');
let unimedList = document.getElementById('unimed-list');
let outsideLIHolder = document.getElementById('outside-li-holder');
//// function for moving list item 
const moveItemIntoList = (item, list, listOriginalParent) => {
    const mediaQuery = window.matchMedia('(max-width: 450px)');
    if (mediaQuery.matches) {
        list.appendChild(item);
    }
    else {
        listOriginalParent.appendChild(item);
    }
};
//// calling functions when browser loads HTML
moveItemIntoList(outsideUnimedLI, unimedList, outsideLIHolder);
// calling the function whenever screen size changes
window.addEventListener('resize', () => {
    moveItemIntoList(outsideUnimedLI, unimedList, outsideLIHolder);
});
