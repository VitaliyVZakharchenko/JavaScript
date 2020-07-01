const baseUrl = 'https://5efa35d5bc5f8f0016c677c4.mockapi.io/api/v1/users';

const formElem = document.querySelector('.login-form');
const errorElem = document.querySelector('.error-text');

const onFormSubmit = event => {
    event.preventDefault();

const formData = Object.fromEntries(new FormData(formElem));

fetch(baseUrl, {
    method: 'POST',
    headers: {
        'Content-Type": "application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
})
    .then((response) => response.json())
        .then((value) => {
            alert(JSON.stringify(value));
            formElem.reset();
        })
            .catch(() => {
            errorElem.textContent = 'Failed to create user';
        });
};

formElem.addEventListener('submit', onFormSubmit);
const submitBtn = document.querySelector('.submit-button');

const onInput = () => {
    errorElem.textContent = null;
    formElem.reportValidity() 
    ? (submitBtn.disabled = false)
    : (submitBtn.disabled = true);
};

formElem.addEventListener('input', onInput);