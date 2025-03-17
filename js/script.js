let cmpNomePresença = document.getElementById('nomeCompleto')
let cmpDep1 = document.getElementById('nome-dep-1')
let cmpDep2 = document.getElementById('nome-dep-2')
const possuiDep = document.querySelectorAll('input[name="dependente"]')
const btnEnviar = document.querySelector('#btn-enviar')
const btnMimo = document.querySelector('#btn-presente')
const cotas = document.querySelectorAll('input[name="cota"]')



window.addEventListener('load',()=>{
    let nomeSalvo = localStorage.getItem('nome') 
    
    if(!nomeSalvo){
        
       
    }else{
        cmpNomePresença.value = nomeSalvo;
    }
})
    
function linkCotas(nomeCota){
    url50 = 'https://mpago.la/1p3ty2K'
    url100 = 'https://mpago.la/29VVxtQ'
    url150 = 'https://mpago.la/1Yyd8qX'
    url200 = 'https://mpago.la/2fHHS7e'
    urlOutro = 'http://link.mercadopago.com.br/nnovoconceito'
    
    
    switch(nomeCota){
        case 'cota50':
            window.open(url50,'_blank')
            break
        case 'cota100':
            window.open(url100,'_blank')
            break
        case 'cota150':
            window.open(url150,'_blank')
            break
        case 'cota200':
            window.open(url200, '_blank')
            break
        case 'outro':
            window.open(urlOutro, '_blank')
            break

        default:
            console.error(nomeCota)
    }

    

}

     




possuiDep.forEach(input => {
    
   input.addEventListener('click', ()=>{
        if(input.value == 'sim'){
            cmpDep1.removeAttribute('disabled','' )
            cmpDep2.removeAttribute('disabled','' )
        }if(input.value == 'nao'){
            cmpDep1.setAttribute('disabled','' )
            cmpDep2.setAttribute('disabled','' )
        }
   })

});



function createMensagem(){
   
    let mensagemDeixada = localStorage.getItem("mensagem")
    
            

    if(cmpNomePresença.value ==''){
        cmpNomePresença.style.borderColor = 'red'
        cmpNomePresença.focus()
        return ''
        
    }else{
        
        if(cmpDep1.value == ""){
            dependente = ' ';
        }else{
            dependente = `
            levando comigo:
                ${cmpDep1.value.toUpperCase()}
                ${cmpDep2.value.toUpperCase()}
                `
        }
        

        let mensagem = `
    *Momentos de felidade devem ser comemorados junto a quem amamos*
    *${cmpNomePresença.value.toUpperCase()}* 
    ${dependente}
    ${mensagemDeixada}


    `   
    
        return mensagem;
    }

    
}
    
    
cotas.forEach(item =>{
    

    
    item.addEventListener('click', ()=>{
            
        if(item.checked){
                btnMimo.removeAttribute('disabled','' );
            }else{}

            btnMimo.addEventListener('click',()=>{
                let nome = document.getElementById('nomeCompleto').value
                let mensagem = document.getElementById('mensagemAniversario').value;
                localStorage.setItem('mensagem', mensagem );
                localStorage.setItem('nome', nome);
                linkCotas(item.value)
                
                
            

            })
        })
    }
)





// envio de mensagem
btnEnviar.addEventListener('click',()=>{
    
    const mensagemWapp = createMensagem()
    if(mensagemWapp === ''){
        
    }else{
        
        // enviarMensagemWhatsApp(mensagemWapp)
        localStorage.removeItem('nome')
        localStorage.removeItem('mensagem')
    }
    
});

function enviarMensagemWhatsApp(mensagem) {
    // numero da empresa a ser envoiado a mensagem
    const numero = "+5511944022240";
    const numeroFormatado = numero.replace(/\D/g, '');// Formata o número de telefone, removendo espaços e caracteres especiais
    
    // Codifica a mensagem para garantir que caracteres especiais sejam tratados corretamente
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Cria o link para o WhatsApp
    const url = `https://wa.me/${numeroFormatado}?text=${mensagemCodificada}`;
    
    // Abre o link no navegador
    window.open(url, '_blank');
}     