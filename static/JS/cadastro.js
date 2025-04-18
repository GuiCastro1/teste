// modalCadastro.js
export default function initCadastroModal() {
    const btnCadastro = document.getElementById('btn-cadastro');
    const cadastroModal = document.getElementById('modal-cadastro');
    const modalContainer = document.getElementById('modais');

    if (!btnCadastro || !cadastroModal || !modalContainer) return;

    btnCadastro.addEventListener('click', () => {
        modalContainer.classList.remove('hidden');
        cadastroModal.style.display = 'block';
    });

    document.querySelector('#modal-cadastro .btn-close').addEventListener('click', () => {
        modalContainer.classList.add('hidden');
        cadastroModal.style.display = 'none';
    });
}
