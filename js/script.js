let cmpNomePresença = document.getElementById('nomeCompleto')
let cmpDep1 = document.getElementById('nome-dep-1')
let cmpDep2 = document.getElementById('nome-dep-2')
const possuiDep = document.querySelectorAll('input[name="dependente"]')
const btnEnviar = document.querySelector('#btn-enviar')
const btnVoltar = document.querySelector('#btn-voltar')
const btnMimo = document.querySelector('#btn-presente')
const cotas = document.querySelectorAll('input[name="cota"]')
const btnPresenca = document.getElementById('btn-confirmacao')


// link pagamento




//data limite de confirmação
window.addEventListener('load',()=>{
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()
    let mesFormatado = mes + 1     
if(dia > 13 && mesFormatado == 4){
    btnEnviar.textContent = 'Indisponível'
    btnEnviar.style.opacity = '0.9'
    cmpNomePresença.setAttribute('disabled','')
    btnEnviar.removeAttribute('href')
}
    
    //verfica se possui nome salvo na memoria
    let nomeSalvo = localStorage.getItem('nome') 
    
    if(!nomeSalvo){
        
       
    }else{
        cmpNomePresença.value = nomeSalvo;
    }
})


function linkCotas(nomeCota){
    const url50 = 'https://mpago.la/1p3ty2K'
    const url100 = 'https://mpago.la/29VVxtQ'
    const url150 = 'https://mpago.la/1Yyd8qX'
    const url200 = 'https://mpago.la/2fHHS7e'
    const urlOutro = 'http://link.mercadopago.com.br/nnovoconceito'
    
    
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
            console.error("cota não identificada")
    }

    

}

//cria mensagem a ser enviada
function createMensagem(){
    //
    let mensagemDeixada = localStorage.getItem("mensagem")
    
    if(cmpNomePresença.value == ''){
        cmpNomePresença.style.borderColor = 'red'
        cmpNomePresença.focus()
        return ''
        
    }else{
        
        if(cmpDep1.value == ""){
            dependente = ' ';
        }else{
            dependente = `levando comigo:
            *${cmpDep1.value.toUpperCase()}*
            *${cmpDep2.value.toUpperCase()}*`
        }
        let mensagem = 
        `*Momentos de felicidade devem ser comemorados junto a quem amamos*
        *${cmpNomePresença.value.toUpperCase()}* 
        confirmou presença em seu aniversario
        ${dependente}
        ${mensagemDeixada}`   
        
        return mensagem;
    }
    
    
}



cotas.forEach(item =>{
    item.addEventListener('click', ()=>{
        if(item.checked){
            btnMimo.removeAttribute('disabled','' );
        }
        //salva nomes se ja preenchidos nos campos e carrega na pagina presente
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

//atribui evento de habilitar dependente
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
if(typeof btnEnviar != null){
btnEnviar.addEventListener('click',()=>{
    const mensagemWapp = createMensagem()
    if(mensagemWapp == ''){
     
    }else{
        enviarMensagemWhatsApp(mensagemWapp)
        localStorage.removeItem('nome')
        localStorage.removeItem('mensagem')
    }
    
})};

if(typeof btnVoltar != null){
btnVoltar.addEventListener('click',()=>{
    let nome = document.getElementById('nomeCompleto').value
    let mensagem = document.getElementById('mensagemAniversario').value;
    localStorage.setItem('mensagem', mensagem );
    localStorage.setItem('nome', nome);
})}

function enviarMensagemWhatsApp(mensagem) {
    const numero = "";//adicione o numero aqui
    const numeroFormatado = numero.replace(/\D/g, '');
    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numeroFormatado}?text=${mensagemCodificada}`;
    window.open(url, '_blank');
}     
