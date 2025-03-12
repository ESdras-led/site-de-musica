document.addEventListener('DOMContentLoaded', function() {
    // Botões de navegação
    const ouvinteBtn = document.getElementById('ouvinte-btn');
    const criadorBtn = document.getElementById('criador-btn');

    if (ouvinteBtn) {
        ouvinteBtn.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'cadastro_ouvinte.html';
        });
    }

    if (criadorBtn) {
        criadorBtn.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'cadastro_artista.html';
        });
    }

    // Mudança de tema
    document.getElementById('tema-button').addEventListener('click', function() {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    });

    document.getElementById('temi-button').addEventListener('click', function() {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'whitesmoke';
    });
});
