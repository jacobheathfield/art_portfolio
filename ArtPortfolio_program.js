function showSection(sectionId) { //Initially makes all the sections invisible
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('hidden');
  });

  // Shows the chosen section from the nav bar
  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.remove('hidden');
}

function openModal(imageSrc, label, description) { // Activates the modal/pop-up display when clicking on an image
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  captionText.innerHTML = "<h3>" + label + "</h3><p>" + description + "</p>";
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
