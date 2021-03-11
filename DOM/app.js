let container = document.createElement('div');
container.className='container';
document.body.appendChild(container);

let row = document.createElement('div');
row.className='row';
document.querySelector(".container").appendChild(row);

let col =document.createElement('div');
col.className='col-md-4';
row.appendChild(col);


let divFormGrp = document.createElement('div');
divFormGrp.setAttribute("id", "divFormGrp");
divFormGrp.className='form-group';
col.appendChild(divFormGrp);

let lblEmail=document.createElement('label');
lblEmail.setAttribute("id", "lblEmail");
lblEmail.htmlFor='txtEmail';
lblEmail.innerHTML='Email';
divFormGrp.appendChild(lblEmail);

let txtEmail=document.createElement('input');
txtEmail.id='txtEmail';
txtEmail.type='email';
txtEmail.className='form-control';
txtEmail.placeholder='Email Adresinizi Giriniz';
divFormGrp.appendChild(txtEmail);


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


let col2 =document.createElement('div');
col2.className='col-md-4';
row.appendChild(col2);

let col3 =document.createElement('div');
col3.className='col-md-4';
row.appendChild(col3);

let ul = document.createElement('ul');
ul.className='list-group';
col3.appendChild(ul);


let lblAge=document.createElement('label');
lblAge.setAttribute("id", "lblAge");
lblAge.htmlFor='txtYas';
lblAge.innerHTML='Lütfen Yaşınızı Giriniz';
ul.appendChild(lblAge);

let li = document.createElement('li');
li.className='list-group-item';
li.innerHTML='Yasiniz';
ul.appendChild(li);

let lblDogum=document.createElement('label');
lblDogum.setAttribute("id", "lblDogum");
lblDogum.htmlFor='txtDogum';
lblDogum.innerHTML='Dogum Tarihiniz';
ul.appendChild(lblDogum);

let txtDogum=document.createElement('input');
txtDogum.id='txtDogum';
txtDogum.type='Doğum';
txtDogum.className='list-grup-item';
txtDogum.placeholder='Doğum Tarihinizi Giriniz';
ul.appendChild(txtDogum);



