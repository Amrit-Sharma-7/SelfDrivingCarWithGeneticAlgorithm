let currentPage = 1;
let totalPages = document.getElementsByClassName("info-content-page").length;

function toggleInfoBox() {
  var infoBox = document.getElementById("infoBox");
  var infoBoxBtn = document.getElementById("infoBoxBtn");

  if (infoBox.style.display === "block") {
    infoBox.style.display = "none";
    infoBoxBtn.style.display = "block";
  } else {
    infoBox.style.display = "block";
    infoBoxBtn.style.display = "none";
    currentPage = 1;
    updateInfoContent();
  }
}

function closeInfoBox() {
  var infoBox = document.getElementById("infoBox");
  var infoBoxBtn = document.getElementById("infoBoxBtn");

  infoBox.style.display = "none";
  infoBoxBtn.style.display = "block";
}

function nextInfo() {
  currentPage++;
  updateInfoContent();
}

function prevInfo() {
  currentPage--;
  updateInfoContent();
}

function updateInfoContent() {
  var infoContentPages = document.getElementsByClassName("info-content-page");

  for (var i = 0; i < infoContentPages.length; i++) {
    infoContentPages[i].style.display = "none";
  }

  infoContentPages[currentPage - 1].style.display = "block";

  updateNavButtons();
}

function updateNavButtons() {
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");

  if (currentPage === 1) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  if (currentPage === totalPages) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}

updateNavButtons();

function toggleNetworkVisualizer() {
  var networkCanvas = document.getElementById("networkCanvas");

  if (networkCanvas.style.display === "block") {
    networkCanvas.style.display = "none";
  } else {
    networkCanvas.style.display = "block";
  }
}
