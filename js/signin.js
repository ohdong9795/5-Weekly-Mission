import { checkEmail, changeType, toggleInputBorder } from './signup.js';

const $email = document.querySelector('#email-input');
const $password = document.querySelector('#password-input');
const $emailMsg = document.querySelector('#email-msg');
const $passwordMsg = document.querySelector('#password-msg');

function login(e) {
  if (e.target.type == 'submit') e.preventDefault();
  if (e.type == 'keyup' && e.keyCode != '13') return; 

  if ($email.value == 'test@codeit.com' && $password.value == 'codeit101') {
    location.href = 'folder';
  } else {
    $emailMsg.textContent = '이메일을 확인해주세요.';
    $passwordMsg.textContent = '비밀번호를 확인해 주세요.';
    $emailMsg.hidden = false;
    $passwordMsg.hidden = false;
    toggleInputBorder($emailMsg.hidden, $email);
    toggleInputBorder($passwordMsg.hidden, $password);
  }
}

function checkPwdEmpty(e) {
  const isEmpty = e.target.value.length === 0;
  
  $passwordMsg.textContent = isEmpty ? '비밀번호를 입력해 주세요.' : $passwordMsg.textContent;
  $passwordMsg.hidden = isEmpty ? false : true;

  toggleInputBorder($passwordMsg.hidden, e.target);
}

$email.addEventListener('focusout', checkEmail);
$password.addEventListener('focusout', checkPwdEmpty);
document.querySelector('#password-img').addEventListener('click', changeType);
document.querySelector('#login').addEventListener('keyup', login);
document.querySelector('#signin').addEventListener('click', login);