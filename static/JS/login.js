// modalLogin.js
export default function initLoginModal() {
    const btnLogin = document.getElementById('btn-login');
    const loginModal = document.getElementById('modal-login');
    const modalContainer = document.getElementById('modais');

    if (!btnLogin || !loginModal || !modalContainer) return;

    btnLogin.addEventListener('click', () => {
        modalContainer.classList.remove('hidden');
        loginModal.style.display = 'block';
    });

    document.querySelector('#modal-login .btn-close').addEventListener('click', () => {
        modalContainer.classList.add('hidden');
        loginModal.style.display = 'none';
    });
}
