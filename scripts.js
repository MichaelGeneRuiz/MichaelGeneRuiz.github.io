// Function to close the hamburger screen when it is open
function hamburger() {
  if (document.getElementById("navi-toggle").checked == true) {
    document.getElementById("navi-toggle").checked = false;
  }
}

// Gets project 1 image
var project_image1 = document.getElementById("project_image1");

// Opens link when clicking on project 1 image
project_image1.onclick = function () {
  window.open("https://blackmeerkat.netlify.app/", "_blank");
};
