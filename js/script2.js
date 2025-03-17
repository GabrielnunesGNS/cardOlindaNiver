const btnMimo2 = document.querySelector('#btn-presente')


// window.addEventListener('load',()=>{
//     let nomeSalvo = localStorage.getItem('nome') 
    
//     if(!nomeSalvo){
        
       
//     }else{
//         cmpNomePresença.value = nomeSalvo;
//     }
// })
setTimeout(()=>{
    
    btnMimo2.innerHTML = 'Presente Enviado';
    btnMimo2.classList.add('btn-confirm');
    btnMimo2.setAttribute('disabled','')
},1000)