const form = document.querySelector('form');
const inputName = document.querySelector('input[name="name"]');
const inputEmail = document.querySelector('input[name="email"]');
const inputTelefone = document.querySelector('input[name="number"]');
const textAreaMensagem = document.querySelector('textarea[name="mensagem"]');

let isValidForm = false

const resetInput = (elem) => {
    elem.classList.remove('invalid');
    elem.nextElementSibling.classList.add('error-hidden');
};

const invalidElem = (elem) => {
    elem.classList.add('invalid');
    elem.nextElementSibling.classList.remove('error-hidden');
    isValidForm = false
};

const validateInput = () => {
    isValidForm = true
    if (!inputName.value) {
        invalidElem(inputName);
    }

    if (!inputEmail.value) {
        invalidElem(inputEmail);
    }

    if (!inputTelefone.value) {
        invalidElem(inputTelefone);
    }

    if (!textAreaMensagem.value) {
        invalidElem(textAreaMensagem);
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
});

inputName.addEventListener('input', () => {
    resetInput(inputName)
});

inputEmail.addEventListener('input', () => {
    resetInput(inputEmail)
});

inputTelefone.addEventListener('input', () => {
    resetInput(inputTelefone)
});

textAreaMensagem.addEventListener('input', () => {
    resetInput(textAreaMensagem)
});