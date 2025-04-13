// Function to switch between sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });

    // Show the clicked section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// Initially show the "About Me" section
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});

