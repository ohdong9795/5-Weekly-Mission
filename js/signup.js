const $email = document.querySelector('#email-input');
const $password = document.querySelector('#password-input');
const $repeat = document.querySelector('#password-repeat-input');
const $emailMsg = document.querySelector('#email-msg');
const $passwordMsg = document.querySelector('#password-msg');
const $repeatMsg = document.querySelector('#password-repeat-msg');

function checkEmail(e) {
  const isDuplicate = $email.value === 'test@codeit.com' ? true : false;
  const isEmail = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.target.value);
  const isEmpty = e.target.value.length === 0;
  const isSignUp = location.pathname.includes('signup');

  if (isSignUp && isDuplicate) {
    $emailMsg.textContent = '이미 사용중인 이메일입니다.';
    $emailMsg.hidden = false;
  } else {
    $emailMsg.textContent = isEmpty ? '이메일을 입력해 주세요.' : (!isEmail ? '올바른 이메일 주소가 아닙니다.' : $emailMsg.textContent);
    $emailMsg.hidden = isEmpty ? false : (!isEmail ? false : true);
  }

  toggleInputBorder($emailMsg.hidden, $email);

  return $emailMsg.hidden;
}

function changeType(e) {
  const $passwordImg = e.target;
  const $passwordInput = document.getElementById(e.target.id == 'password-img' ? 'password-input' : 'password-repeat-input');

  let src = $passwordImg.getAttribute('src');
  if (src === 'img/eye-on.png') {
    $passwordImg.setAttribute('src', 'img/eye-off.png');
    $passwordInput.setAttribute('type', 'text');
  } else {
    $passwordImg.setAttribute('src', 'img/eye-on.png');
    $passwordInput.setAttribute('type', 'password');
  }
}

function checkPwdType(e) {
  const errmsg = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
  
  if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/.test(e.target.value)) {
    $passwordMsg.textContent = errmsg;
    $passwordMsg.hidden = false;
  } else if ($passwordMsg.textContent === errmsg){
    $passwordMsg.textContent = '';
    $passwordMsg.hidden = true;
  }

  return $passwordMsg.hidden;
}

function checkPwdDiff() {
  if ($repeat.value === '') {
    $repeat.classList.remove('input-error');
    $repeatMsg.hidden = true;
    $repeatMsg.textContent = '';
  } else {
    if ($password.value === $repeat.value) {
      $repeat.classList.remove('input-error');
      $repeatMsg.hidden = true;
      $repeatMsg.textContent = '';
    } else {
      $repeat.classList.add('input-error');
      $repeatMsg.textContent = '비밀번호가 일치하지 않아요.';
      $repeatMsg.hidden = false;
    }
  }

  return $repeatMsg.hidden;
}

function toggleInputBorder(hidden, input) {
  if (!hidden) input.classList.add('input-error');
  else input.classList.remove('input-error');
}

function register(e) {
  if (e.target.type == 'submit') e.preventDefault();
  if (e.type == 'keyup' && e.keyCode != '13') return; 
  
  const hasErrEmail = checkEmail({ target: $email });
  const hasErrPwdType = checkPwdType({ target: $password });
  const hasErrPwdDiff = checkPwdDiff();
  
  if (hasErrEmail && hasErrPwdType && hasErrPwdDiff) {
    location.href = 'folder';
  }
}

if (location.pathname.includes('signup')) {
  $email.addEventListener('focusout', checkEmail);
  $password.addEventListener('input', checkPwdDiff);
  $password.addEventListener('focusout', checkPwdType);
  document.querySelector('#password-img').addEventListener('click', changeType);
  document.querySelector('#password-repeat-img').addEventListener('click', changeType);
  $repeat.addEventListener('input', checkPwdDiff);
  document.querySelector('#register').addEventListener('keyup', register);
  document.querySelector('#signup').addEventListener('click', register);
}

export { checkEmail, changeType, toggleInputBorder };