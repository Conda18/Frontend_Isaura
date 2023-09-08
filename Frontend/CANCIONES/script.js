document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cancionForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const imagenUrl = document.getElementById('imagenUrl').value;
        const nombreCancion = document.getElementById('nombreCancion').value;
        const minutos = document.getElementById('minutos').value;
        const segundos = document.getElementById('segundos').value;
        const interprete = document.getElementById('interprete').value;

        const resultadoDiv = document.querySelector('.resultado');
        const nuevaSección = document.createElement('div');
        nuevaSección.className = 'col-md-3 mb-4';
        nuevaSección.innerHTML = `
        <div class="card shadow">
            <img src="${imagenUrl}" class="card-img-top" alt="${nombreCancion}">
            <div class="card-body text-center">
                <h5 class="card-title">${nombreCancion}</h5>
                <p class="card-text">Artista: ${interprete}, Duración: ${minutos}:${segundos}</p>
            </div>
        </div>
         `;

        resultadoDiv.appendChild(nuevaSección);
        resultadoDiv.classList.remove('d-none');

        // Clear the form fields
        document.getElementById('imagenUrl').value = '';
        document.getElementById('nombreCancion').value = '';
        document.getElementById('minutos').value = '';
        document.getElementById('segundos').value = '';
        document.getElementById('interprete').value = '';
    });
});
