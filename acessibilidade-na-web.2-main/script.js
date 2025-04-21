document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Obrigado por entrar em contato!');
        function tocarMusica(titulo) {
            alert(`🎵 Tocando: ${titulo}`);
          }
    });
});

