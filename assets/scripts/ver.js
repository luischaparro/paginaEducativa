const $estudiantes = document.querySelector('.estudiantes');

const leerJson = async () => {
    const response = await fetch('../json/estudiantes.json').then(res => res.json()).then(data => data);
    response.forEach(estudiante => {
        const article = document.createElement('article');
        article.classList.add('estudiante')
        article.innerHTML += `
            <p class="nombre">${estudiante.nombre}</p>
            <p class="apellido">${estudiante.apellido}</p>
            <p class="edad">${estudiante.edad}</p>
            <p class="email">${estudiante.email}</p>
            <p class="carrera">${estudiante.carrera}</p>
        `;
        $estudiantes.appendChild(article);
    });
}

leerJson();