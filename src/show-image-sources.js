document.getElementById("showSources").addEventListener("click", function() {
    document.getElementById("imageSources").style.display = "block";
    document.getElementById("showSources").style.display = "none";
    document.getElementById("hideSources").style.display = "block";
});

document.getElementById("hideSources").addEventListener("click", function() {
    document.getElementById("imageSources").style.display = "none";
    document.getElementById("showSources").style.display = "block";
    document.getElementById("hideSources").style.display = "none";
});