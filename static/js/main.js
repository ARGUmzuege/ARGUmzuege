function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projects.find(p => p.id === projectId);
    
    if (project) {
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDetails').innerHTML = `
            <p>${project.description}</p>
            <div class="project-info">
                <p><i class="fas fa-map-marker-alt"></i> ${project.location}</p>
                <p><i class="far fa-calendar-alt"></i> ${project.date}</p>
            </div>
        `;
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

// Schließen beim Klick außerhalb des Modals
document.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Schließen mit der Escape-Taste
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}); 