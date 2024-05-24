const btnLogin = document.querySelector('.btn-login');
const inputLogin = document.querySelector('#login');

btnLogin.addEventListener('click', () => {
    localStorage.setItem('username', inputLogin.value);
})

