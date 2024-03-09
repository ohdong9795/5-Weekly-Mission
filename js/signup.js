const email = document.querySelector('#email-input');
const password = document.querySelector('#password-input');
const repeat = document.querySelector('#password-repeat-input');
const emailMsg = document.querySelector('#email-msg');
const passwordMsg = document.querySelector('#password-msg');
const repeatMsg = document.querySelector('#password-repeat-msg');

function email_check(e) {
  let regex = new RegExp('^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
  let test = regex.test(e.target.value);

  emailMsg.textContent = e.target.value.length == 0 ? '이메일을 입력해 주세요.' : '';
  emailMsg.textContent = e.target.value.length != 0 && !test ? '올바른 이메일 주소가 아닙니다.' : emailMsg.textContent;
  emailMsg.hidden = e.target.value.length == 0 ? false : true;
  if (emailMsg.hidden) emailMsg.hidden = e.target.value.length != 0 && !test ? false : true;

  toggle_input_error(emailMsg.hidden, email);
}

function type_change(e) {
  let password_img = e.target;
  let password_input = document.getElementById(e.target.id == 'password-img' ? 'password-input' : 'password-repeat-input');

  let src = password_img.getAttribute('src');
  if (src == 'img/eye-on.png') {
    password_img.setAttribute('src', 'img/eye-off.png');
    password_input.setAttribute('type', 'text');
  } else {
    password_img.setAttribute('src', 'img/eye-on.png');
    password_input.setAttribute('type', 'password');
  }
}

function diff_check() {
  if (repeat.value == '') {
    repeat.classList.remove('input-error');
    repeatMsg.hidden = true;
    repeatMsg.textContent = '';
  } else {
    if (password.value == repeat.value) {
      repeat.classList.remove('input-error');
      repeatMsg.hidden = true;
      repeatMsg.textContent = '';
    } else {
      repeat.classList.add('input-error');
      repeatMsg.textContent = '비밀번호가 다릅니다.';
      repeatMsg.hidden = false;
    }
  }
}

function password_empty(e) {
  let msg = e.target.id.includes('repeat') ? repeatMsg || passwordMsg : passwordMsg;
  
  if (msg.textContent != '비밀번호가 다릅니다.') {
    msg.textContent = '비밀번호를 입력해 주세요.';
    msg.hidden = e.target.value.length == 0 ? false : true;

    toggle_input_error(msg.hidden, e.target);
  }
}

function toggle_input_error(hidden, input) {
  if (!hidden) input.classList.add('input-error');
  else input.classList.remove('input-error');
}

if (location.pathname.includes('signup')) {
  email.addEventListener('focusout', email_check);
  password.addEventListener('focusout', password_empty);
  password.addEventListener('input', diff_check);
  document.querySelector('#password-img').addEventListener('click', type_change);
  document.querySelector('#password-repeat-img').addEventListener('click', type_change);
  repeat.addEventListener('focusout', password_empty);
  repeat.addEventListener('input', diff_check);
}

export { email_check, password_empty, type_change, toggle_input_error };