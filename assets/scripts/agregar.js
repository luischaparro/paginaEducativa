const $studentName = document.getElementById('studentName');
const $studentLastName = document.getElementById('studentLastName');
const $studentAge = document.getElementById('studentAge');
const $studentEmail = document.getElementById('studentEmail');
const $studentCarrera = document.getElementById('studentCarrera');
const $btnSend = document.getElementById('btnSend');
const $error = document.getElementById('error');

$btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    if ($studentName.value === '' || $studentEmail === '' || $studentCarrera === '') {
        $error.style.color = 'red';
        $error.textContent = 'Error: Debe llenar los campos';
    } else {
        $error.style.color = 'yellow';
        $error.textContent = 'Agregando...';
    }
})