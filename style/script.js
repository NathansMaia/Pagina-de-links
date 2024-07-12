document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    
    const icon = document.getElementById('toggle-icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');
    } else {
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon');
    }
    
    const profileImg = document.getElementById('profile-img');
    profileImg.classList.toggle('dark-mode');
});

// Verifica se o modo escuro está ativo ao carregar a página e ajusta o ícone
window.addEventListener('DOMContentLoaded', (event) => {
    const icon = document.getElementById('toggle-icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');
    } else {
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon');
    }
});
