let form = document.querySelector('.form'),
    inputs = document.querySelectorAll('.form__input'),
    inputName = document.querySelector('.input-name'),
    inputGroup = document.querySelector('.input-group'),
    inputPhone = document.querySelector('.input-phone'),
    inputAddress = document.querySelector('.input-address'),
    inputEmail = document.querySelector('.input-email');


form.onsubmit = function () {
    inputs.forEach(function (input) {
        removeError(input)
        if (input.value === '') {
            createError(input, 'Поле пусте :(')
        }
    })

    const nameReg = /^[А-ЩЬЮЯІЇЄҐа-щьюяіїєґ\\s]+\s[А-ЩЬЮЯІЇЄҐа-щьюяіїєґ]\.[А-ЩЬЮЯІЇЄҐа-щьюяіїєґ]\.$/
    if (!nameReg.test(inputName.value) && !inputName.classList.contains('error')) {
        createError(inputName, 'Некоректні ПІБ')
    }
    const groupReg = /^[A-Za-zА-ЩЬЮЯІЇЄҐа-щьюяіїєґ]{2}-[0-9]{2}$/
    if (!groupReg.test(inputGroup.value) && !inputGroup.classList.contains('error')) {
        createError(inputGroup, 'Некоректі дані групи')
    }
    const phoneReg = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/
    if (!phoneReg.test(inputPhone.value) && !inputPhone.classList.contains('error')) {
        createError(inputPhone, 'Некоректний номер телефону')
    }
    const addressReg = /^м\. [A-Za-zА-ЩЬЮЯІЇЄҐа-щьюяіїєґ\s]+$/
    if (!addressReg.test(inputAddress.value) && !inputAddress.classList.contains('error')) {
        createError(inputAddress, 'Некоректна адреса')
    }
    const emailReg = /^[A-Za-zА-ЩЬЮЯІЇЄҐа-щьюяіїєґ0-9]+@[A-Za-zА-ЩЬЮЯІЇЄҐа-щьюяіїєґ]+\.[a-zA-Z]+$/
    if (!emailReg.test(inputEmail.value) && !inputEmail.classList.contains('error')) {
        createError(inputEmail, 'Некоректна пошта')
    }

    let errors = document.querySelector('.error')
    if (errors === null) {
        const results = document.querySelector('.results'),
            name = document.querySelector('.result__name'),
            group = document.querySelector('.result__group'),
            phone = document.querySelector('.result__phone'),
            address = document.querySelector('.result__address'),
            email = document.querySelector('.result__email');

        name.textContent = inputName.value
        group.textContent = inputGroup.value
        phone.textContent = inputPhone.value
        address.textContent = inputAddress.value
        email.textContent = inputEmail.value

        results.hidden = false
    } else {
        const results = document.querySelector('.results')
        results.hidden = true
    }

    return false
}

function createError(input, message) {
    input.classList.add('error')
    const parent = input.parentNode
    parent.classList.add('error')
    const errorLabel = document.createElement('label')
    errorLabel.classList.add('error-label')
    errorLabel.textContent = message
    parent.append(errorLabel)
}

function removeError(input) {
    input.classList.remove('error')
    const parent = input.parentNode

    if (parent.classList.contains('error')) {
        parent.querySelector('.error-label').remove()
        parent.classList.remove('error')
    }
}