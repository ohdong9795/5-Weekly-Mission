import { email_check, password_empty, type_change, toggle_input_error } from './signup.js';

const email = document.querySelector('#email-input');
const password = document.querySelector('#password-input');
const emailMsg = document.querySelector('#email-msg');
const passwordMsg = document.querySelector('#password-msg');

function login(e) {
  if (e.target.type == 'submit') e.preventDefault();
  if (e.type == 'keyup' && e.keyCode != '13') return; 

  if (email.value == 'test@codeit.com' && password.value == 'codeit101') {
    location.href = 'folder';
  } else {
    emailMsg.textContent = '이메일을 확인해주세요.';
    passwordMsg.textContent = '비밀번호를 확인해 주세요.';
    emailMsg.hidden = false;
    passwordMsg.hidden = false;
    toggle_input_error(emailMsg.hidden, email);
    toggle_input_error(passwordMsg.hidden, password);
  }
}

email.addEventListener('focusout', email_check);
password.addEventListener('focusout', password_empty);
document.querySelector('#password-img').addEventListener('click', type_change);
document.querySelector('#login').addEventListener('keyup', login);
document.querySelector('#signin').addEventListener('click', login);