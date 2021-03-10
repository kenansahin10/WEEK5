let divFormGrp = document.createElement('div');
divFormGrp.id='divFormGrp';
divFormGrp.className='form-group';
let lblEmail=document.createElement('label');
lblEmail.id='lblEmail';
lblEmail.htmlFor='txtEmail';
lblEmail.innerHTML='Email';
divFormGrp.appendChild(lblEmail);
let txtEmail=document.createElement('input');
txtEmail.id='txtEmail';
txtEmail.type='email';
txtEmail.className='form-control';
txtEmail.placeholder='Email Adresinizi Giriniz';
divFormGrp.appendChild(txtEmail);
let divCont = document.querySelector("#divCont");
divCont.appendChild(divFormGrp);

let lblPassword=document.createElement('label');
lblPassword.id='pwd';
lblPassword.htmlFor='txtPassword';
lblPassword.innerHTML='Sifre';
divFormGrp.appendChild(lblPassword);
let txtPassword=document.createElement('input');
txtPassword.id='txtPassword';
txtPassword.type='password';
txtPassword.className='form-control';
txtPassword.placeholder='Sifrenizi Giriniz';
divFormGrp.appendChild(txtPassword);



