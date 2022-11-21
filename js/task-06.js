const inputElement = document.querySelector('#validation-input');
inputElement.addEventListener('blur', onChangeFocus);

function onChangeFocus (evt){
    console.log(evt)

    if (evt.currentTarget.value.length == inputElement.getAttribute('data-length')) {
        inputElement.classList.add('valid')
        inputElement.classList.remove('invalid')
    } else {
        inputElement.classList.remove('valid')
        inputElement.classList.add('invalid')

    }
}
