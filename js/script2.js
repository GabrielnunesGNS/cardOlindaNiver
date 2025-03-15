const btnMimo2 = document.querySelector('#btn-presente')

setTimeout(()=>{
    btnMimo2.innerHTML = 'Presente Enviado';
    btnMimo2.classList.add('btn-confirm');
    btnMimo2.setAttribute('disabled','')
},2000)