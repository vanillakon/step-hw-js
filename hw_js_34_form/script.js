function outUserInfo(){
  let arrUser = [];
  let parentUserMessage = document.querySelector('.parentUserMessage');
  if (document.cookie){
    parentUserMessage.classList.remove('hidden');
    document.querySelector('.userForm').classList.add('hidden');
    let arrCookie = document.cookie.split(';')
    for (let elem of arrCookie){
      let str = elem.slice(elem.indexOf('=') + 1);
      arrUser.push(str);
    }
    let [name, surname, login, mail, phone] = arrUser;
    let outUser = document.createElement('p');
    outUser.innerHTML = `Hello, ${name} ${surname} (${login})`;
    parentUserMessage.appendChild(outUser);
    let outMail = document.createElement('p');
    outMail.innerHTML = `Mail: ${mail.replace('%40', '@')}`;
    parentUserMessage.appendChild(outMail);
    let outPhone = document.createElement('p');
    outPhone.innerHTML = `Phone: ${phone}`;
    parentUserMessage.appendChild(outPhone);
    let btn = document.createElement('button');
    btn.innerHTML = 'Sing out';
    btn.addEventListener('click', () => {
        let obj = {};
        for(let elem of arrCookie){
          obj[elem.substr(0, elem.indexOf('='))] = elem.substr(elem.indexOf('=') + 1);
        }
        console.log(obj);
        for(let key in obj){
          document.cookie = key + '=' + obj[key] + ';expires=Thu, 01 Jan 1970 00:00:00 GMT;';
          document.cookie = key + '=' + obj[key] + ';path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
        window.location.reload();
    });
    parentUserMessage.appendChild(btn);
  }else{
    parentUserMessage.innerHTML = '';
  }
}

function checkForm(){
let [userName, userSurname, login, pass, pass2, mail, phone, code, check] = [document.querySelector('#userName').value,
document.querySelector('#userSurname').value,
document.querySelector('#login').value,
document.querySelector('#password').value,
document.querySelector('#passwordConfirm').value,
document.querySelector('#mail').value,
document.querySelector('#phone').value,
document.querySelector('#code').value,
document.querySelector('#check').value];
if(!/^[a-z]+$/i.test(userName)){
    alert('Invalid First name.');
    return false;
  }
if(!/^[a-z]+$/i.test(userSurname)){
    alert('Invalid Last name.');
    return false;
  }
if(!/[a-zA-Z]+\d*\S/.test(login)){
    alert('Invalid login.');
    return false;
  }
if(!/\d{6,}[a-zA-Z]+/.test(pass)){
    alert('Invalid password. It must be min 6 numbers and 1 letter \"123456aA\".');
    return false;
  }
if(pass !== pass2){
    alert('Password does not match.');
    return false;
  }
if(!/^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test(mail)){
    alert('Invalid mail. It must be \"asd@gmail.com\".');
    return false;
  }
if(!/\d{6}/.test(phone)){
    alert('Invalid phone. It must be six numbers (000000).');
    return false;
  }
if(!/\d+|([a-zA-Z])+/.test(code)){
    alert('Invalid code. It must be six numbers (000000).');
    return false;
  }
if(check.checked == false){
    alert('Please check rules.');
    return false;
  }

let optionsUser = {
    userName: encodeURIComponent(userName),
    surname: encodeURIComponent(userSurname),
    login: encodeURIComponent(login),
    mail: encodeURIComponent(mail),
    phone: encodeURIComponent(phone),
  }
for (let option in optionsUser){
  document.cookie = `${option}=${optionsUser[option]}; max-age=3600; path=/; secure`;
}
return true;
}
