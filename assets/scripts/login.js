const $userName = document.getElementById('userName');
const $userPwd = document.getElementById('userPwd');
const $btnSend = document.getElementById('btnSend');
const $Alert = document.getElementById('Alert');

btnSend.addEventListener('click', ()=> {
    if ($userName.value == '' || $userPwd.value == '') {
        $Alert.style.display = 'block';
        $Alert.textContent = 'Error: Debe llenar los campos';
    } else {
        $Alert.style.display = 'block';
        $Alert.style.color = 'yellow';
        $Alert.textContent = 'Verificando...';
    }

})