const cmpNomePresença = document.getElementById('nomeCompleto')
const possuiDep = document.querySelectorAll('input[name="dependente"]')
const cmpDep1 = document.getElementById('nome-dep-1')
const cmpDep2 = document.getElementById('nome-dep-2')
const btnEnviar = document.getElementById('btn-enviar')

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
    
    
    

    let mensagem = `
    *Momentos de felidade devem ser comemorados junto a quem amamos*
    
    *${cmpNomePresença.value.toUpperCase()}* 
    Confirmou que estará presente em seu aniversario
    
    levando junto:
    ${cmpDep1.value.toUpperCase()}
    ${cmpDep2.value.toUpperCase()}
    
    `
 
    return mensagem;
}
    
    




// envio de mensagem
btnEnviar.addEventListener('click',()=>{
    const mensagemWapp = createMensagem()
    enviarMensagemWhatsApp(mensagemWapp)
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





