var content = document.getElementById("mainContent");
var header = document.getElementById("pageHead");
var navigation = document.getElementById("navMenu");

var poorContrastButton = document.getElementById("poorContrast");
var goodContrastButton = document.getElementById("goodContrast");
var darkThemeButton = document.getElementById("darkTheme");
var defaultThemeButton = document.getElementById("defaultTheme");

var tipsTable = document.getElementById("devTipsTable");
var headerCells = document.getElementsByTagName("th");
var dataCells = document.getElementsByTagName("td");

var links = document.getElementsByTagName("a");

poorContrastButton.addEventListener("click", function() {
    content.style.backgroundColor = "red";
    content.style.color = "orange";
    goodContrastButton.style.display = "block";
    poorContrastButton.style.display = "none";
});

goodContrastButton.addEventListener("click", function() {
    content.style.backgroundColor = "white";
    content.style.color = "#212529";
    goodContrastButton.style.display = "none";
    poorContrastButton.style.display = "block";
});

darkThemeButton.addEventListener("click", function() {
    /* Change text and background color of main content. */
    content.style.backgroundColor = "black";
    content.style.color = "#DEDAD6";
    
    /* Change background color of header. */
    header.style.backgroundColor = "navy";
    
    /* Change background color of navigation menu. */
    navigation.style.backgroundColor = "darkred";
    
    /* Change color of table borders */
    tipsTable.style.borderColor = "white";
    for (var i = 0; i < headerCells.length; i++) {
        headerCells[i].style.borderColor = "white";
    }
    for (var i = 0; i < dataCells.length; i++) {
        dataCells[i].style.borderColor = "white";
    }
    
    /* Change color of link text */
    for (var i = 0; i < links.length; i++) {
        links[i].style.color = "yellow";
    }
    
    darkThemeButton.style.display = "none";
    defaultThemeButton.style.display = "block";
});

defaultThemeButton.addEventListener("click", function() {
    /* Change text and background color of main content. */
    content.style.backgroundColor = "white";
    content.style.color = "#212529";
    
    /* Change background color of header. */
    header.style.backgroundColor = "royalblue";
    
    /* Change background color of navigation menu. */
    navigation.style.backgroundColor = "lightyellow";
    
    /* Change color of table borders */
    tipsTable.style.borderColor = "black";
    for (var i = 0; i < headerCells.length; i++) {
        headerCells[i].style.borderColor = "black";
    }
    for (var i = 0; i < dataCells.length; i++) {
        dataCells[i].style.borderColor = "black";
    }
    
    /* Change color of link text */
    for (var i = 0; i < links.length; i++) {
        links[i].style.color = "#007bff";
    }
    
    darkThemeButton.style.display = "block";
    defaultThemeButton.style.display = "none";
});