let divFormGrp = document.createElement('div');
divFormGrp.id='divFormGrp';
divFormGrp.className='form-group';
let lblEmail=document.createElement('label');
lblEmail.id='lblEmail';
lblEmail.htmlFor='txtEmail';
lblEmail.innerHTML='Email Adresinizi Giriniz';
divFormGrp.appendChild(lblEmail);
let txtEmail=document.createElement('input');
txtEmail.id='txtEmail';
txtEmail.type='email';
txtEmail.className='form-control';
txtEmail.placeholder='Email Adresinizi Giriniz';
divFormGrp.appendChild(txtEmail);
let divCont = document.querySelector("#divCont");
divCont.appendChild(divFormGrp);

